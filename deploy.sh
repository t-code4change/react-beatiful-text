#!/bin/bash

# React Beautiful Text - NPM Deployment Script
# This script automatically builds, versions, and publishes the package to npm

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored messages
print_info() {
    echo -e "${BLUE}ℹ ${1}${NC}"
}

print_success() {
    echo -e "${GREEN}✓ ${1}${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ ${1}${NC}"
}

print_error() {
    echo -e "${RED}✗ ${1}${NC}"
}

# Print banner
echo ""
echo -e "${BLUE}╔════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   React Beautiful Text - NPM Deployment Script        ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════╝${NC}"
echo ""

# Check if npm is logged in
print_info "Checking npm authentication..."
if ! npm whoami &> /dev/null; then
    print_error "Not logged in to npm. Please run 'npm login' first."
    exit 1
fi

CURRENT_USER=$(npm whoami)
print_success "Logged in as: ${CURRENT_USER}"
echo ""

# Get current version
CURRENT_VERSION=$(node -p "require('./package.json').version")
print_info "Current version: ${CURRENT_VERSION}"
echo ""

# Ask for version bump type
echo -e "${YELLOW}Select version bump type:${NC}"
echo "  1) patch (bug fixes)        - ${CURRENT_VERSION} → $(npm version patch --no-git-tag-version --dry-run | tail -n1)"
echo "  2) minor (new features)     - ${CURRENT_VERSION} → $(npm version minor --no-git-tag-version --dry-run | tail -n1)"
echo "  3) major (breaking changes) - ${CURRENT_VERSION} → $(npm version major --no-git-tag-version --dry-run | tail -n1)"
echo "  4) custom version"
echo "  5) cancel"
echo ""

read -p "Enter your choice [1-5]: " choice

case $choice in
    1)
        VERSION_TYPE="patch"
        ;;
    2)
        VERSION_TYPE="minor"
        ;;
    3)
        VERSION_TYPE="major"
        ;;
    4)
        read -p "Enter custom version (e.g., 1.2.3): " CUSTOM_VERSION
        VERSION_TYPE="custom"
        ;;
    5)
        print_warning "Deployment cancelled."
        exit 0
        ;;
    *)
        print_error "Invalid choice. Deployment cancelled."
        exit 1
        ;;
esac

echo ""

# Check for uncommitted changes
print_info "Checking for uncommitted changes..."
if [[ -n $(git status -s) ]]; then
    print_warning "You have uncommitted changes:"
    git status -s
    echo ""
    read -p "Do you want to continue anyway? (y/n): " continue_deploy
    if [[ $continue_deploy != "y" && $continue_deploy != "Y" ]]; then
        print_warning "Deployment cancelled."
        exit 0
    fi
fi

print_success "Ready to deploy"
echo ""

# Run tests (if test script exists)
if grep -q '"test"' package.json; then
    print_info "Running tests..."
    if npm test; then
        print_success "Tests passed"
    else
        print_error "Tests failed. Deployment cancelled."
        exit 1
    fi
    echo ""
fi

# Clean old build
print_info "Cleaning old build..."
rm -rf dist
print_success "Cleaned"
echo ""

# Build the package
print_info "Building package..."
if npm run build; then
    print_success "Build completed"
else
    print_error "Build failed. Deployment cancelled."
    exit 1
fi
echo ""

# Verify build output
print_info "Verifying build output..."
if [ ! -d "dist" ]; then
    print_error "Build directory 'dist' not found. Deployment cancelled."
    exit 1
fi

if [ ! -f "dist/index.js" ] || [ ! -f "dist/index.mjs" ]; then
    print_error "Build output files not found. Deployment cancelled."
    exit 1
fi

print_success "Build verification passed"
echo ""

# Bump version
print_info "Bumping version..."
if [ "$VERSION_TYPE" = "custom" ]; then
    npm version $CUSTOM_VERSION --no-git-tag-version
else
    npm version $VERSION_TYPE --no-git-tag-version
fi

NEW_VERSION=$(node -p "require('./package.json').version")
print_success "Version bumped: ${CURRENT_VERSION} → ${NEW_VERSION}"
echo ""

# Show what will be published
print_info "Files to be published:"
npm pack --dry-run 2>&1 | grep -E '^\s+[0-9]+\s+[a-zA-Z]' | head -20
echo ""

# Calculate package size
PACKAGE_SIZE=$(npm pack --dry-run 2>&1 | grep "package size:" | awk '{print $3, $4}')
print_info "Package size: ${PACKAGE_SIZE}"
echo ""

# Final confirmation
echo -e "${YELLOW}═══════════════════════════════════════════════════════${NC}"
echo -e "${YELLOW}Ready to publish:${NC}"
echo -e "  Package: react-beautiful-text"
echo -e "  Version: ${GREEN}${NEW_VERSION}${NC}"
echo -e "  Size:    ${PACKAGE_SIZE}"
echo -e "  User:    ${CURRENT_USER}"
echo -e "${YELLOW}═══════════════════════════════════════════════════════${NC}"
echo ""

read -p "Proceed with publishing to npm? (y/n): " confirm

if [[ $confirm != "y" && $confirm != "Y" ]]; then
    print_warning "Deployment cancelled. Rolling back version..."
    npm version $CURRENT_VERSION --no-git-tag-version
    print_success "Version rolled back to ${CURRENT_VERSION}"
    exit 0
fi

echo ""

# Publish to npm
print_info "Publishing to npm..."
if npm publish; then
    print_success "Successfully published to npm!"
else
    print_error "Publishing failed."
    print_warning "Rolling back version..."
    npm version $CURRENT_VERSION --no-git-tag-version
    exit 1
fi

echo ""

# Git commit and tag
print_info "Creating git commit and tag..."
git add package.json
git commit -m "Release v${NEW_VERSION}" || print_warning "No changes to commit"
git tag -a "v${NEW_VERSION}" -m "Version ${NEW_VERSION}"

print_success "Git commit and tag created"
echo ""

# Ask to push to git
read -p "Push to git remote? (y/n): " push_git

if [[ $push_git == "y" || $push_git == "Y" ]]; then
    print_info "Pushing to git..."
    git push origin main || git push origin master
    git push origin --tags
    print_success "Pushed to git"
else
    print_warning "Skipped git push. Don't forget to push manually:"
    print_warning "  git push origin main"
    print_warning "  git push origin --tags"
fi

echo ""

# Show npm package URL
NPM_URL="https://www.npmjs.com/package/react-beautiful-text"
print_success "╔════════════════════════════════════════════════════════╗"
print_success "║            DEPLOYMENT SUCCESSFUL! 🎉                   ║"
print_success "╚════════════════════════════════════════════════════════╝"
echo ""
echo -e "  📦 Package:  react-beautiful-text"
echo -e "  🏷️  Version:  ${GREEN}${NEW_VERSION}${NC}"
echo -e "  🔗 NPM URL:  ${BLUE}${NPM_URL}${NC}"
echo ""
echo -e "${GREEN}Users can now install with:${NC}"
echo -e "  ${BLUE}npm install react-beautiful-text@${NEW_VERSION}${NC}"
echo ""

# Optional: Open npm package page
read -p "Open npm package page in browser? (y/n): " open_npm

if [[ $open_npm == "y" || $open_npm == "Y" ]]; then
    if command -v open &> /dev/null; then
        open "$NPM_URL"
    elif command -v xdg-open &> /dev/null; then
        xdg-open "$NPM_URL"
    else
        echo "Please visit: $NPM_URL"
    fi
fi

echo ""
print_success "Deployment complete! 🚀"
echo ""

# Show next steps
echo -e "${YELLOW}Next steps:${NC}"
echo "  1. Test installation: npm install react-beautiful-text@${NEW_VERSION}"
echo "  2. Update documentation if needed"
echo "  3. Announce the release"
echo "  4. Celebrate! 🎉"
echo ""

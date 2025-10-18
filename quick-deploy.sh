#!/bin/bash

# Quick deployment script - auto patch version and publish
# Usage: ./quick-deploy.sh [patch|minor|major]

set -e

VERSION_TYPE=${1:-patch}

echo "🚀 Quick Deploy - React Beautiful Text"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Check npm login
if ! npm whoami &> /dev/null; then
    echo "❌ Not logged in to npm. Run 'npm login' first."
    exit 1
fi

echo "✓ Logged in as: $(npm whoami)"

# Get current version
CURRENT=$(node -p "require('./package.json').version")
echo "✓ Current version: $CURRENT"

# Build
echo ""
echo "🔨 Building..."
rm -rf dist
npm run build

# Bump version
echo ""
echo "📦 Bumping version ($VERSION_TYPE)..."
npm version $VERSION_TYPE --no-git-tag-version

NEW=$(node -p "require('./package.json').version")
echo "✓ New version: $NEW"

# Publish
echo ""
echo "📤 Publishing to npm..."
npm publish

# Git
echo ""
echo "📝 Committing to git..."
git add package.json
git commit -m "Release v$NEW" || true
git tag -a "v$NEW" -m "Version $NEW"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ DEPLOYMENT SUCCESSFUL!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📦 Package: react-beautiful-text@$NEW"
echo "🔗 URL: https://www.npmjs.com/package/react-beautiful-text"
echo ""
echo "Don't forget to push:"
echo "  git push origin main && git push origin --tags"
echo ""

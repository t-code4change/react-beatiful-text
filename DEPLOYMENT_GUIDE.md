# Deployment Guide - React Beautiful Text

## Quick Start

### Method 1: Interactive Deployment Script (Recommended)

```bash
./deploy.sh
```

This script will:
1. ✅ Check npm authentication
2. ✅ Ask which version to bump (patch/minor/major)
3. ✅ Run tests (if available)
4. ✅ Build the package
5. ✅ Show what will be published
6. ✅ Ask for confirmation
7. ✅ Publish to npm
8. ✅ Create git commit and tag
9. ✅ Ask to push to git

### Method 2: Quick Deploy (Fast)

```bash
# Patch version (1.0.0 → 1.0.1)
./quick-deploy.sh

# Minor version (1.0.0 → 1.1.0)
./quick-deploy.sh minor

# Major version (1.0.0 → 2.0.0)
./quick-deploy.sh major
```

This is faster but has less safety checks.

## Manual Deployment

### 1. Prepare

```bash
# Make sure you're logged in
npm login

# Check who you're logged in as
npm whoami

# Pull latest changes
git pull origin main
```

### 2. Update Version

```bash
# For bug fixes (1.0.0 → 1.0.1)
npm version patch

# For new features (1.0.0 → 1.1.0)
npm version minor

# For breaking changes (1.0.0 → 2.0.0)
npm version major

# Or set specific version
npm version 1.2.3
```

### 3. Build

```bash
npm run build
```

### 4. Test Build

```bash
# Dry run - see what will be published
npm pack --dry-run

# Create actual .tgz file for testing
npm pack

# Test installation locally
npm install ./react-beautiful-text-1.0.0.tgz
```

### 5. Publish

```bash
# Publish to npm
npm publish

# Or publish with tag
npm publish --tag beta
npm publish --tag next
```

### 6. Push to Git

```bash
git push origin main
git push origin --tags
```

## Version Bump Guide

### Semantic Versioning (SemVer)

Format: `MAJOR.MINOR.PATCH`

**PATCH** (1.0.0 → 1.0.1)
- Bug fixes
- Documentation updates
- No API changes

```bash
npm version patch
./quick-deploy.sh patch
```

**MINOR** (1.0.0 → 1.1.0)
- New features
- Backward compatible
- New components added

```bash
npm version minor
./quick-deploy.sh minor
```

**MAJOR** (1.0.0 → 2.0.0)
- Breaking changes
- API changes
- Removing features

```bash
npm version major
./quick-deploy.sh major
```

## Pre-Deployment Checklist

- [ ] All tests passing
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] README.md accurate
- [ ] No uncommitted changes (or committed)
- [ ] Build succeeds
- [ ] Logged in to npm
- [ ] Version number correct

## Common Deployment Scenarios

### Scenario 1: First Time Deployment

```bash
# 1. Set version to 1.0.0 in package.json manually
# 2. Login to npm
npm login

# 3. Build and publish
npm run build
npm publish

# 4. Create git tag
git tag -a v1.0.0 -m "Initial release"
git push origin main --tags
```

### Scenario 2: Bug Fix Release

```bash
# Use the interactive script
./deploy.sh
# Select option 1 (patch)

# Or quick deploy
./quick-deploy.sh patch
```

### Scenario 3: New Feature Release

```bash
# Use the interactive script
./deploy.sh
# Select option 2 (minor)

# Or quick deploy
./quick-deploy.sh minor
```

### Scenario 4: Beta Release

```bash
# Set version to beta
npm version 2.0.0-beta.1 --no-git-tag-version

# Build
npm run build

# Publish with beta tag
npm publish --tag beta

# Install beta version
npm install react-beautiful-text@beta
```

## Deployment Scripts Reference

### deploy.sh

Full-featured interactive deployment script.

**Features:**
- Interactive version selection
- Uncommitted changes check
- Test execution
- Build verification
- Dry-run preview
- Confirmation prompts
- Automatic git tagging
- Colored output

**Usage:**
```bash
./deploy.sh
```

### quick-deploy.sh

Fast deployment with minimal prompts.

**Features:**
- One-command deployment
- Automatic version bump
- Build + publish + tag
- No interactive prompts (except npm login)

**Usage:**
```bash
./quick-deploy.sh [patch|minor|major]
```

**Examples:**
```bash
# Patch version
./quick-deploy.sh

# Minor version
./quick-deploy.sh minor

# Major version
./quick-deploy.sh major
```

## NPM Scripts

Added to package.json:

```json
{
  "scripts": {
    "build": "tsup",
    "prepublishOnly": "npm run build",
    "version": "npm run build && git add .",
    "postversion": "git push && git push --tags"
  }
}
```

**What they do:**
- `prepublishOnly`: Runs before `npm publish` (safety check)
- `version`: Runs when you do `npm version`
- `postversion`: Runs after version bump

## Troubleshooting

### "You do not have permission to publish"

**Solution:** Package name is taken. Change name in package.json.

```json
{
  "name": "@yourusername/react-beautiful-text"
}
```

Then publish with:
```bash
npm publish --access public
```

### "You must verify your email"

**Solution:** Check your email and verify npm account.

```bash
npm profile get
```

### Build fails

**Solution:** Check for errors, install dependencies.

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Version already published

**Solution:** Can't republish same version. Bump version.

```bash
npm version patch
npm publish
```

### Git tag already exists

**Solution:** Delete tag and recreate.

```bash
git tag -d v1.0.0
git push origin :refs/tags/v1.0.0
npm version 1.0.0
git push --tags
```

## After Deployment

### 1. Verify Publication

```bash
# Check on npm
npm view react-beautiful-text

# Check specific version
npm view react-beautiful-text@1.0.0

# Install and test
npm install react-beautiful-text@latest
```

### 2. Update CHANGELOG.md

```markdown
## [1.0.1] - 2024-01-15

### Fixed
- Fixed neon text flickering on Safari
- Updated dependencies

### Added
- New GoldText component
```

### 3. Create GitHub Release

Go to: https://github.com/yourusername/react-beautiful-text/releases

Click "Create a new release"

### 4. Announce

- Post on Twitter/X
- Share in React communities
- Update documentation site

## Best Practices

1. **Always test locally first**
   ```bash
   npm pack
   cd ../test-project
   npm install ../react-beautiful-text/react-beautiful-text-1.0.0.tgz
   ```

2. **Use semantic versioning correctly**
   - Patch: Bug fixes only
   - Minor: New features, backward compatible
   - Major: Breaking changes

3. **Keep CHANGELOG.md updated**

4. **Tag releases in git**

5. **Don't publish from feature branches**
   - Always publish from `main` or `master`

6. **Check npm package page after publish**
   - https://www.npmjs.com/package/react-beautiful-text

7. **Monitor download stats**
   ```bash
   npm info react-beautiful-text
   ```

## Quick Commands Reference

```bash
# Login
npm login

# Check login
npm whoami

# Build
npm run build

# Version bump
npm version patch|minor|major

# Publish
npm publish

# View package info
npm view react-beautiful-text

# Unpublish (within 72 hours only)
npm unpublish react-beautiful-text@1.0.0

# Deprecate version
npm deprecate react-beautiful-text@1.0.0 "Use 1.0.1 instead"

# Update dist-tags
npm dist-tag add react-beautiful-text@1.0.0 latest
npm dist-tag add react-beautiful-text@2.0.0-beta.1 beta
```

## Rollback

If you need to rollback after publishing:

### Within 72 hours:
```bash
npm unpublish react-beautiful-text@1.0.0
```

### After 72 hours:
```bash
# Publish a new patch version with the fix
npm version patch
npm publish

# Or deprecate the bad version
npm deprecate react-beautiful-text@1.0.0 "This version has critical bugs. Use 1.0.1"
```

## Automation with GitHub Actions

Coming soon: Automatic deployment when pushing tags.

## Support

If you encounter issues:
1. Check npm status: https://status.npmjs.org/
2. Check npm documentation: https://docs.npmjs.com/
3. Contact npm support: https://www.npmjs.com/support

---

Happy deploying! 🚀

Remember: The `./deploy.sh` script handles most of this automatically!

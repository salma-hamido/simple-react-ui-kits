# Scripts

This folder contains utility scripts for managing the package.

## release.js

A release automation script that helps manage versioning and publishing of the npm package.

### Purpose

This script automates the process of creating new versions and preparing them for publication to npm.

### What it does step by step:

1. **Reads current version** from `package.json` (currently `1.0.1`)

2. **Accepts release type** as a command line argument:

   - `patch` - for bug fixes (1.0.1 → 1.0.2)
   - `minor` - for new features (1.0.1 → 1.1.0)
   - `major` - for breaking changes (1.0.1 → 2.0.0)

3. **Updates version** in `package.json` automatically

4. **Builds the package** using `npm run build`

5. **Creates git commit and tag** for the new version

6. **Provides next steps** for publishing

### Usage

```bash
# For a bug fix release
npm run release:patch

# For a new feature release
npm run release:minor

# For a breaking change release
npm run release:major
```

### Example workflow:

```bash
# 1. Run the release script
npm run release:patch

# 2. Push to GitHub (this triggers automated npm publishing)
git push origin main
git push origin --tags
```

### Integration with GitHub Actions

When you push the tag, the GitHub Action will automatically:

- Build the package
- Publish it to npm
- No manual work needed!

This script makes versioning and publishing much easier and less error-prone than doing it manually!

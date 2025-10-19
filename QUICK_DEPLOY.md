# Quick Deploy Guide - React Beautiful Text Example

## 🚀 Deploy to Vercel via Terminal

### 📦 Example is Standalone

The example app contains its own copy of the library code in `example/lib/beautiful-text/`.
This makes it completely standalone and ready to deploy independently.

### Quick Commands (Copy & Paste)

```bash
# Navigate to example directory
cd example

# Install dependencies
npm install

# Build to test locally
npm run build

# Deploy to Vercel
npm install -g vercel
vercel --yes
```

**That's it!** You'll get a demo URL like: `https://example-xxx.vercel.app`

---

## 🔄 Syncing Latest Changes

If you made changes to the library source code (`src/`) and want to update the example:

```bash
# From project root
./sync-example.sh

# Then rebuild and redeploy
cd example
npm run build
vercel --yes
```

### Detailed Steps

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Navigate to Example Directory

```bash
cd example
```

#### Step 3: Install Dependencies

```bash
npm install
```

#### Step 4: Build the Project

```bash
npm run build
```

#### Step 5: Deploy

First deployment (with prompts):
```bash
vercel
```

Quick deployment (skip prompts):
```bash
vercel --yes
```

Production deployment:
```bash
vercel --prod
```

## ✅ What's Configured

The project is already set up with:

- ✅ `vercel.json` - Build configuration
- ✅ Example app in `example/` folder
- ✅ Library linked to example via `file:..`
- ✅ All dependencies properly configured

## 🔧 Manual Build & Test Locally

Before deploying, you can test locally:

```bash
# 1. Build the library
npm run build

# 2. Install example dependencies
cd example
npm install --legacy-peer-deps

# 3. Build example
npm run build

# 4. Start production server
npm start
```

Open http://localhost:3000

## 📦 Alternative: Deploy via GitHub

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your repository
   - Set **Root Directory** to `example`
   - Click "Deploy"

## 🎯 Live Demo

After deployment, you'll get a URL like:
```
https://react-beautiful-text-example.vercel.app
```

## 🐛 Troubleshooting

**Build fails with peer dependency errors:**
```bash
npm install --legacy-peer-deps
```

**Library not found:**
```bash
# Rebuild library first
npm run build
```

**Module not found errors:**
Make sure you're in the correct directory and all files are committed.

## 📝 Notes

- The example app uses React 19
- Some dependencies require `--legacy-peer-deps`
- Build time: ~2-3 minutes
- The library is built first, then linked to example

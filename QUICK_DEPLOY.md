# Quick Deploy Guide - React Beautiful Text Example

## 🚀 Deploy to Vercel (Easiest Method)

### Step 1: Login to Vercel CLI

```bash
vercel login
```

This will open your browser. Follow the login process.

### Step 2: Deploy

From the project root directory:

```bash
vercel
```

Answer the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No
- **What's your project's name?** → react-beautiful-text-example (or any name)
- **In which directory is your code located?** → `./example`
- **Want to override settings?** → No

### Step 3: Deploy to Production

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

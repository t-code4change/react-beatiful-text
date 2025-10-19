# Deploy Example App to Vercel

This guide explains how to deploy the example app to Vercel using the terminal.

## Quick Start (Terminal Deployment)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Navigate to Example Directory

```bash
cd example
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Build the Project

```bash
npm run build
```

### Step 5: Deploy to Vercel

```bash
vercel --yes
```

**That's it!** Your app will be deployed to Vercel.

---

## Detailed Instructions

### Option 1: Deploy via Terminal (Recommended for Quick Deploy)

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Navigate to example directory**:
```bash
cd example
```

3. **Install dependencies**:
```bash
npm install
```

4. **Build locally** (optional, to test):
```bash
npm run build
```

5. **Deploy to Vercel**:

For first-time deployment:
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N** (or Y if updating existing)
- What's your project's name? **react-beautiful-text** (or your preferred name)
- In which directory is your code located? **./** (already in example dir)
- Want to override the settings? **N**

For quick deployment (skip prompts):
```bash
vercel --yes
```

For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via GitHub (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Prepare example for Vercel deployment"
git push origin main
```

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)

3. Click "Add New..." → "Project"

4. Import your GitHub repository

5. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `example`
   - **Build Command**: Leave default or use:
     ```
     npm install --legacy-peer-deps && npm run build
     ```
   - **Install Command**:
     ```
     npm install --legacy-peer-deps
     ```

6. Click "Deploy"

## Environment Variables

No environment variables are required for the basic example app.

## Vercel Configuration

The project includes a `vercel.json` file that configures:
- Build command to build library first, then example
- Output directory pointing to example/.next
- Next.js framework detection

## Troubleshooting

### Build Fails with Peer Dependency Errors

Use `--legacy-peer-deps` flag:
```bash
npm install --legacy-peer-deps
```

### Module Not Found Errors

Ensure the library is built before building the example:
```bash
npm run build
cd example && npm install --legacy-peer-deps && npm run build
```

## Updating Deployment

To update the deployment:

```bash
# Make your changes
git add .
git commit -m "Update example"
git push

# Or deploy directly
vercel --prod
```

## Local Testing

Before deploying, test the build locally:

```bash
# Build library
npm run build

# Install example dependencies
cd example && npm install --legacy-peer-deps

# Build example
npm run build

# Test production build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view.

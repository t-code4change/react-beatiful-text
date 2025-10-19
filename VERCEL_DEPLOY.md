# Deploy Example App to Vercel

This guide explains how to deploy the example app to Vercel.

## Prerequisites

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

## Deploy Steps

### Option 1: Deploy via CLI

1. Navigate to the project root:
```bash
cd /Users/tuanpham/MyLife/Code4Change/react-beatiful-text
```

2. Run Vercel deploy:
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? **react-beautiful-text-example**
- In which directory is your code located? **./example**
- Want to override the settings? **N**

3. For production deployment:
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

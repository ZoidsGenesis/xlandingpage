# Deploy to Vercel - Step by Step Guide

## Prerequisites
- A GitHub account
- A Vercel account (free tier is fine)

## Step 1: Prepare Your Code for GitHub

1. **Download your project files**:
   - Click on the three dots menu in Replit
   - Select "Download as zip"
   - Extract the zip file on your computer

2. **Create a new GitHub repository**:
   - Go to [github.com](https://github.com)
   - Click the "+" button in the top right
   - Select "New repository"
   - Name it (e.g., "discord-bot-landing")
   - Make it public or private
   - Click "Create repository"

3. **Upload your code to GitHub**:
   
   **Option A - Using GitHub web interface (easiest)**:
   - On your repository page, click "uploading an existing file"
   - Drag and drop ALL files and folders from your extracted project
   - Important files to include:
     - `client/` folder (entire folder with all contents)
     - `attached_assets/` folder
     - `package.json`
     - `package-lock.json`
     - `vite.config.ts`
     - `tsconfig.json`
     - `tailwind.config.ts`
     - `postcss.config.js`
     - `components.json`
     - `vercel.json` (the file I just created)
     - `.vercelignore` (the file I just created)
   - Commit the files

   **Option B - Using Git command line**:
   ```bash
   # In your extracted project folder
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" if you don't have an account
   - Sign up with your GitHub account

2. **Import your project**:
   - Click "Add New..." → "Project"
   - You'll see a list of your GitHub repositories
   - Find your "discord-bot-landing" repository
   - Click "Import"

3. **Configure the project**:
   - **Framework Preset**: Should auto-detect as "Vite" ✓
   - **Root Directory**: Leave as `./` (default)
   - **Build Command**: `npm run build` (should be auto-filled)
   - **Output Directory**: `dist/public` (should be auto-filled)
   - **Install Command**: `npm install` (should be auto-filled)
   
4. **Environment Variables** (Skip this - you don't need any!)

5. **Deploy**:
   - Click "Deploy"
   - Wait 1-2 minutes for the build to complete
   - You'll get a live URL like `https://your-project.vercel.app`

## Step 3: Configure Custom Domain (Optional)

1. **In your Vercel project dashboard**:
   - Go to Settings → Domains
   - Click "Add Domain"
   - Enter your custom domain (e.g., `discordbot.com`)
   - Follow the DNS configuration instructions
   - Wait for DNS propagation (can take up to 48 hours)

## Step 4: Update Deployment (When you make changes)

**Option A - Push to GitHub (automatic deployment)**:
1. Make changes in Replit
2. Download updated files
3. Push to GitHub
4. Vercel automatically redeploys!

**Option B - Redeploy from Vercel dashboard**:
1. Go to your project in Vercel
2. Click "Deployments"
3. Click "Redeploy" on the latest deployment

## Troubleshooting

### Build fails with "Cannot find module"
- Make sure all dependencies are in `package.json`
- Check that `node_modules` is NOT uploaded to GitHub

### 404 on page refresh
- This shouldn't happen with the Vercel config I created
- If it does, check that `vercel.json` is properly uploaded

### Styles not loading
- Make sure `client/src/index.css` exists
- Check that `tailwind.config.ts` is uploaded

## Your Live URL
After deployment, you'll get a URL like:
- `https://discord-bot-landing.vercel.app` (or your custom domain)

## Need Help?
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/help

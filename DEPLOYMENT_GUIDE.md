# 🚀 Deployment Guide - Arth Rathod Portfolio

Complete step-by-step guide to deploy your portfolio website to various platforms.

---

## 📋 Pre-Deployment Checklist

- [ ] All dependencies installed (`npm install`)
- [ ] Build works locally (`npm run build`)
- [ ] Preview works correctly (`npm run preview`)
- [ ] All links and contact information are correct
- [ ] Dark mode works properly
- [ ] Responsive design tested on mobile/tablet

---

## 🌐 Option 1: Deploy to Netlify (Recommended)

Netlify is perfect for React apps with excellent performance and CDN support.

### Method A: Netlify Dashboard (Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [https://netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose **GitHub** and select your repository
   
3. **Configure Build Settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click **"Deploy site"**

4. **Custom Domain (Optional):**
   - Go to **Site settings** → **Domain management**
   - Add your custom domain
   - Update DNS records as instructed

### Method B: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Or deploy directly
npm run build
netlify deploy --prod
```

---

## 🔷 Option 2: Deploy to Vercel

Vercel offers excellent performance and automatic deployments.

### Method A: Vercel Dashboard

1. **Push to GitHub** (same as Netlify step 1)

2. **Import to Vercel:**
   - Go to [https://vercel.com](https://vercel.com)
   - Click **"New Project"**
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click **"Deploy"**

### Method B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 🐙 Option 3: Deploy to GitHub Pages

Free hosting directly from your GitHub repository.

### Setup:

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://arth912.github.io/portfolio"
   }
   ```

3. **Update vite.config.js:**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/', // Your repo name
     server: {
       port: 3000
     }
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Under **Build and deployment** → **Source**, choose one of the following options:
     - **GitHub Actions**: select this to let a workflow build and publish your site automatically (use a workflow like the example in the "Continuous Deployment" section above).
     - **Deploy from a branch**: select this to publish directly from a branch (commonly the `gh-pages` branch). If you use the `gh-pages` package (`npm run deploy`), set the source branch to `gh-pages` and the folder to `/` (root).
   - Click **Save** to apply the setting

---

## 🎯 Option 4: Deploy to AWS S3 + CloudFront

For full control and AWS integration.

### Steps:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket:**
   - Go to AWS S3 Console
   - Create bucket (e.g., `arth-portfolio`)
   - Enable static website hosting
   - Set index document: `index.html`

3. **Upload Files:**
   ```bash
   aws s3 sync dist/ s3://arth-portfolio --delete
   ```

4. **Setup CloudFront:**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Set default root object: `index.html`
   - Configure custom error page (404 → index.html)

---

## 🔧 Environment Variables (if needed)

If you add any API keys or environment variables:

### Netlify:
- Go to **Site settings** → **Environment variables**
- Add variables with `VITE_` prefix

### Vercel:
- Go to **Project Settings** → **Environment Variables**
- Add variables with `VITE_` prefix

### Local Development:
Create `.env.local`:
```env
VITE_API_KEY=your_key_here
```

Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY
```

---

## ✅ Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All sections are visible
- [ ] Navigation works (smooth scroll)
- [ ] Dark mode toggle works
- [ ] All links open correctly
- [ ] Mobile responsive
- [ ] Contact links work (email, LinkedIn, GitHub)
- [ ] Page metadata/SEO tags are correct
- [ ] No console errors

---

## 🔄 Continuous Deployment

### Netlify/Vercel (Automatic):
- Push to `main` branch → Auto-deploys
- Pull requests → Preview deployments

### GitHub Actions (Manual Setup):
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 🐛 Troubleshooting

### Build Fails:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues (404 on refresh):
- Ensure `netlify.toml` or `vercel.json` is configured
- These files handle SPA routing

### Blank Page After Deploy:
- Check browser console for errors
- Verify `base` path in `vite.config.js`
- Check if assets are loading correctly

### Dark Mode Not Persisting:
- Ensure localStorage is accessible
- Check browser privacy settings

---

## 📊 Performance Optimization

### Before deploying, optimize:

1. **Image Optimization:**
   ```bash
   npm install -D vite-plugin-imagemin
   ```

2. **Lazy Loading Components:**
   ```javascript
   const Component = React.lazy(() => import('./Component'))
   ```

3. **Lighthouse Audit:**
   - Open Chrome DevTools
   - Run Lighthouse audit
   - Fix any issues

---

## 🎉 Your Portfolio is Live!

Share your portfolio:
- **LinkedIn**: Add to profile
- **GitHub**: Add to repository description
- **Resume**: Include the link
- **Email Signature**: Add portfolio link

---

## 📞 Need Help?

- **Netlify Docs**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev/guide

**Contact:**
- Email: arthrathod007@gmail.com
- GitHub: @arth912

---

**Built with ❤️ by Arth Rathod**

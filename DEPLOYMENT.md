# 🚀 Deployment Guide

This guide covers deploying your portfolio website to popular hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've:

- [x] Replaced all placeholder text with your actual information
- [x] Updated social media links
- [x] Added your resume PDF to the public folder
- [x] Configured Telegram bot credentials
- [x] Tested the contact form
- [x] Replaced placeholder project images/links
- [x] Updated meta tags in `index.html`
- [x] Set up environment variables for production

## 🔐 Environment Variables Setup

Create a `.env` file in your project root:

```env
# Telegram Configuration
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
VITE_TELEGRAM_CHAT_ID=your_chat_id_here
```

Update `src/components/Contact/Contact.jsx`:

```javascript
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || 'YOUR_BOT_TOKEN_HERE'
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || 'YOUR_CHAT_ID_HERE'
```

Add `.env` to `.gitignore`:

```
# Environment variables
.env
.env.local
.env.production
```

## 🌐 Deployment Options

### 1. Vercel (Recommended) ⭐

**Why Vercel?**
- Zero configuration for Vite projects
- Automatic HTTPS
- Global CDN
- Automatic deployments from Git
- Environment variables support
- Free for personal projects

**Deployment Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration

3. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add:
     - Key: `VITE_TELEGRAM_BOT_TOKEN`
     - Value: Your bot token
   - Add:
     - Key: `VITE_TELEGRAM_CHAT_ID`
     - Value: Your chat ID

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~30 seconds!
   - You'll get a URL like: `your-portfolio.vercel.app`

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

**Continuous Deployment:**
- Every push to `main` branch automatically deploys
- Pull requests get preview deployments

---

### 2. Netlify

**Why Netlify?**
- Drag-and-drop deployment
- Automatic HTTPS
- Form handling built-in
- Continuous deployment
- Free tier available

**Method 1: Drag and Drop**

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Go to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag the `dist` folder to the deploy zone

**Method 2: Git Integration**

1. **Push to GitHub** (same as Vercel step 1)

2. **Connect to Netlify**
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository

3. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Environment Variables**
   - Go to Site settings → Build & deploy → Environment
   - Add your Telegram credentials

5. **Deploy**
   - Click "Deploy site"
   - Your site will be live!

**Custom Domain:**
- Go to Domain settings
- Add custom domain
- Update DNS records

---

### 3. GitHub Pages

**Why GitHub Pages?**
- Free hosting
- Easy integration with GitHub
- Good for simple static sites

**Deployment Steps:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/portfolio/', // Your repo name
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Folder: / (root)

**⚠️ Note:** GitHub Pages doesn't support environment variables. You'll need to hardcode credentials or use a backend service.

---

### 4. Render

**Why Render?**
- Free tier with static sites
- Automatic HTTPS
- Custom domains
- Auto-deploy from Git

**Deployment Steps:**

1. **Push to GitHub** (same as Vercel)

2. **Create New Static Site**
   - Go to [render.com](https://render.com)
   - Click "New Static Site"
   - Connect GitHub repository

3. **Configure**
   ```
   Build Command: npm run build
   Publish Directory: dist
   ```

4. **Environment Variables**
   - Add your Telegram credentials in Environment tab

5. **Deploy**
   - Click "Create Static Site"
   - Wait for deployment

---

### 5. Firebase Hosting

**Why Firebase?**
- Google infrastructure
- Global CDN
- Free SSL
- Custom domains

**Deployment Steps:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Project**
   ```bash
   firebase init hosting
   ```
   - Choose "Use an existing project" or create new
   - Public directory: `dist`
   - Single-page app: Yes
   - GitHub integration: Optional

4. **Build**
   ```bash
   npm run build
   ```

5. **Deploy**
   ```bash
   firebase deploy
   ```

Your site will be live at `your-project.web.app`

---

## 🔧 Build Optimization Tips

### 1. Analyze Bundle Size

```bash
npm run build -- --mode production
```

Check the `dist` folder size and optimize large dependencies.

### 2. Image Optimization

- Use WebP format for images
- Compress images before adding to project
- Consider using a CDN for images

### 3. Code Splitting

Already configured! Vite automatically splits:
- React vendor bundle
- Animation vendor bundle
- Your code

### 4. Performance Testing

Test your deployed site:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## 🎯 Post-Deployment

### 1. Custom Domain Setup

**For Vercel/Netlify:**
1. Buy domain from registrar (Namecheap, GoDaddy, etc.)
2. Add domain in platform settings
3. Update DNS records:
   - Type: A Record
   - Name: @
   - Value: Platform's IP
   - Type: CNAME
   - Name: www
   - Value: your-site.vercel.app

### 2. SEO Optimization

After deployment:
- Submit sitemap to Google Search Console
- Submit to Bing Webmaster Tools
- Add to Google Analytics (optional)
- Share on social media

### 3. SSL Certificate

Most platforms (Vercel, Netlify, etc.) automatically provide SSL certificates. If not:
- Use [Let's Encrypt](https://letsencrypt.org/)
- Or platform's SSL settings

### 4. Monitoring

Set up monitoring:
- **Vercel**: Built-in analytics
- **Google Analytics**: Track visitors
- **Sentry**: Error tracking (optional)

---

## 🐛 Troubleshooting

### Build Fails

**Issue**: Build errors during deployment

**Solutions**:
1. Test build locally: `npm run build`
2. Check Node version matches production
3. Clear cache and reinstall: `rm -rf node_modules package-lock.json && npm install`

### Environment Variables Not Working

**Issue**: Telegram integration fails in production

**Solutions**:
1. Verify variables are set in platform settings
2. Variable names must match exactly
3. Redeploy after adding variables
4. Use `import.meta.env.VARIABLE_NAME` (not `process.env`)

### Routing Issues (404 on Refresh)

**Issue**: Page not found when refreshing on routes

**Solutions**:

**Vercel**: Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**Netlify**: Create `public/_redirects`:
```
/*    /index.html   200
```

### Slow Loading

**Solutions**:
1. Enable compression (usually automatic)
2. Optimize images
3. Use lazy loading for images
4. Check bundle size

---

## 📊 Performance Benchmarks

After deployment, your site should achieve:
- **Lighthouse Score**: 90+ (Performance)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Speed Index**: < 3.0s

---

## 🔄 Continuous Deployment Workflow

**Recommended workflow:**

1. **Development**
   ```bash
   git checkout -b feature/new-feature
   # Make changes
   git commit -m "Add new feature"
   git push origin feature/new-feature
   ```

2. **Preview** (Vercel/Netlify creates preview)
   - Test the preview deployment
   - Get feedback

3. **Merge to Main**
   ```bash
   git checkout main
   git merge feature/new-feature
   git push origin main
   ```

4. **Automatic Production Deploy**
   - Deployment happens automatically
   - Check production site

---

## 📞 Support

Deployment issues? Check:
1. Platform status pages
2. Platform documentation
3. Community forums
4. GitHub Issues

---

## ✅ Deployment Checklist

Before going live:

- [ ] All personal information updated
- [ ] Telegram bot configured and tested
- [ ] Resume PDF added
- [ ] All placeholder images replaced
- [ ] SEO meta tags updated
- [ ] Environment variables set
- [ ] Build succeeds locally
- [ ] Contact form tested
- [ ] Mobile responsiveness checked
- [ ] Cross-browser testing done
- [ ] Performance optimization done
- [ ] Analytics setup (optional)

---

**Congratulations! 🎉 Your portfolio is now live!**

Share it on:
- LinkedIn
- Twitter
- GitHub profile
- Dev.to
- Hashnode

Good luck with your job search! 🚀

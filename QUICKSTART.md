# ⚡ Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🚀 Super Quick Setup

### 1. Install & Run (2 minutes)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:3000` - Your portfolio is live! 🎉

### 2. Personalize (3 minutes)

**Minimum changes to make it yours:**

1. **Open `src/components/Hero/Hero.jsx`**
   - Line 35: Change `"Your Name"` to your actual name
   - Lines 48-55: Update the typing animation with your roles
   - Lines 17-20: Update social media links

2. **Open `src/components/Contact/Contact.jsx`**
   - Lines 13-14: Add your Telegram bot credentials (see below)
   - Lines 19-31: Update contact information

3. **Add your resume**
   - Drop your PDF in `/public/resume.pdf`

That's it! You have a working portfolio! 🚀

---

## 📱 Telegram Setup (5 minutes)

**Why?** Get instant notifications when someone contacts you!

### Quick Steps:

1. **Create Bot:**
   - Open Telegram, search `@BotFather`
   - Send `/newbot`
   - Follow instructions
   - Copy the **token** you receive

2. **Get Chat ID:**
   - Search `@userinfobot` in Telegram
   - Start the bot
   - Copy your **Chat ID**

3. **Add to Code:**
   - Open `src/components/Contact/Contact.jsx`
   - Replace line 13: `TELEGRAM_BOT_TOKEN = 'your_token_here'`
   - Replace line 14: `TELEGRAM_CHAT_ID = 'your_chat_id_here'`

4. **Test:**
   - Fill out contact form on your site
   - Check Telegram - you should get a message!

📖 **Detailed guide:** See `TELEGRAM_SETUP.md`

---

## 🎨 Customize More (Optional)

### Content

**About Section** (`src/components/About/About.jsx`):
- Update bio text
- Change highlights

**Experience** (`src/components/Experience/Experience.jsx`):
- Add your work history

**Projects** (`src/components/Projects/Projects.jsx`):
- Add your projects with live links

**Skills** (`src/components/Skills/Skills.jsx`):
- Update your tech stack

📖 **Full guide:** See `CUSTOMIZATION.md`

### Design

**Colors** (`tailwind.config.js`):
```javascript
primary: {
  500: '#your-color-here',
}
```

**Fonts** (`tailwind.config.js` + `index.html`):
```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

---

## 🌐 Deploy (2 minutes)

### Option 1: Vercel (Easiest)

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repo
5. Click "Deploy"

**Done!** Your site is live in ~30 seconds! 🎉

### Option 2: Netlify

1. Build locally:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Drag & drop the `dist` folder

**Done!** Site is live!

📖 **More options:** See `DEPLOYMENT.md`

---

## 📋 Common Tasks

### Update Content
```bash
# Edit files in src/components/
npm run dev  # See changes live
```

### Add Image
```bash
# 1. Add to /public folder
# 2. Reference in code:
<img src="/your-image.jpg" alt="Description" />
```

### Build for Production
```bash
npm run build
# Output in /dist folder
```

### Test Production Build
```bash
npm run preview
```

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change port in vite.config.js
```

### Contact Form Not Working
1. Check Telegram credentials
2. Make sure you started chat with your bot
3. Check browser console for errors

### Slow Development Server
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Documentation

- **README.md** - Complete overview
- **CUSTOMIZATION.md** - Detailed customization guide
- **TELEGRAM_SETUP.md** - Telegram bot setup
- **DEPLOYMENT.md** - Deployment guides for all platforms

---

## ✅ Quick Checklist

Before deploying:

- [ ] Changed "Your Name" to your actual name
- [ ] Updated social media links
- [ ] Added Telegram bot credentials
- [ ] Updated contact information
- [ ] Added resume PDF
- [ ] Tested contact form
- [ ] Added at least 3 projects
- [ ] Updated about section

Optional but recommended:

- [ ] Added profile picture
- [ ] Updated all experience
- [ ] Updated all skills
- [ ] Changed color scheme
- [ ] Updated meta tags for SEO
- [ ] Tested on mobile

---

## 🎯 Next Steps

1. **Customize content** (see `CUSTOMIZATION.md`)
2. **Set up Telegram bot** (see `TELEGRAM_SETUP.md`)
3. **Deploy to Vercel/Netlify** (see `DEPLOYMENT.md`)
4. **Share on LinkedIn** and other platforms!

---

## 💡 Pro Tips

1. **Use environment variables** for Telegram credentials in production
2. **Optimize images** before adding (use WebP format)
3. **Test on mobile** - most visitors will be on mobile
4. **Keep it updated** - regularly update with new projects
5. **Add Google Analytics** to track visitors (optional)

---

## 🆘 Need Help?

1. Check the documentation files
2. Look for errors in browser console (F12)
3. Check the `package.json` for all available commands
4. Ensure Node.js version is 18+

---

**You're all set!** 🚀

Build something amazing and share it with the world!

Good luck with your job search! 💪

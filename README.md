# 🚀 Modern Developer Portfolio

A stunning, fully responsive portfolio website built with React, featuring futuristic animations, glassmorphism effects, and Telegram bot integration for contact forms.

## live link : (https://www.bytevanta.in/)

## ✨ Features

- **Modern Design**: Futuristic dark theme with glassmorphism and gradient effects
- **Smooth Animations**: Powered by Framer Motion and GSAP for premium animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Interactive Sections**: 
  - Animated Hero with typing effect
  - About section with profile highlights
  - Experience timeline with scroll animations
  - Skills showcase with animated cards
  - Projects gallery with hover effects
  - Education timeline
  - Contact form with Telegram bot integration
- **Performance Optimized**: Fast loading and smooth scrolling
- **SEO Ready**: Optimized meta tags and structure
- **Particle Background**: Animated particle system with connections
- **Contact Integration**: Telegram Bot API for instant notifications

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Animations**: 
  - Framer Motion (component animations)
  - GSAP (scroll-triggered animations)
- **Icons**: Lucide React
- **Typing Effect**: React Type Animation
- **Notifications**: React Toastify
- **Contact Integration**: Telegram Bot API

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About/
│   │   │   └── About.jsx
│   │   ├── Contact/
│   │   │   └── Contact.jsx
│   │   ├── Education/
│   │   │   └── Education.jsx
│   │   ├── Experience/
│   │   │   └── Experience.jsx
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── FloatingCodeCard.jsx
│   │   ├── Projects/
│   │   │   └── Projects.jsx
│   │   ├── Skills/
│   │   │   └── Skills.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ParticleBackground.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Telegram Bot** (See Telegram Setup section below)

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open browser**
   Navigate to `http://localhost:3000`

## 📱 Telegram Bot Setup

The contact form uses Telegram Bot API to send messages directly to your Telegram account.

### Step 1: Create a Telegram Bot

1. Open Telegram and search for [@BotFather](https://t.me/BotFather)
2. Send `/newbot` command
3. Follow the instructions to create your bot
4. You'll receive a **BOT TOKEN** - save this!

### Step 2: Get Your Chat ID

1. Search for [@userinfobot](https://t.me/userinfobot) on Telegram
2. Start the bot
3. It will send you your **Chat ID** - save this!

### Step 3: Configure the Application

Open `src/components/Contact/Contact.jsx` and replace the placeholder values:

```javascript
// Replace these with your actual values
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE'  // From BotFather
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE'      // From userinfobot
```

### Step 4: Test the Integration

1. Fill out the contact form on your website
2. Submit the form
3. Check your Telegram - you should receive a message with the form details!

## 🎨 Customization

### Personal Information

Update your personal information in the following files:

1. **Hero Section** (`src/components/Hero/Hero.jsx`):
   - Name
   - Titles/Roles
   - Social media links
   - Bio

2. **About Section** (`src/components/About/About.jsx`):
   - Profile image/emoji
   - Bio text
   - Highlights

3. **Experience Section** (`src/components/Experience/Experience.jsx`):
   - Work history
   - Job descriptions
   - Technologies used

4. **Projects Section** (`src/components/Projects/Projects.jsx`):
   - Project details
   - Live links
   - GitHub repositories

5. **Education Section** (`src/components/Education/Education.jsx`):
   - Degrees
   - Certifications
   - Achievements

6. **Contact Section** (`src/components/Contact/Contact.jsx`):
   - Email address
   - Phone number
   - Location

### Styling

All colors and theme settings are in `tailwind.config.js`. You can customize:
- Primary colors
- Gradients
- Animations
- Fonts

### Adding Resume Download

1. Place your resume PDF in the `public` folder
2. Update the link in `src/components/Hero/Hero.jsx`:
   ```jsx
   <a href="/your-resume.pdf" download>
     Download Resume
   </a>
   ```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy
5. Your site will be live in seconds!

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)
3. Or connect your GitHub repository for automatic deployments

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🎯 Performance Optimization

- **Code Splitting**: Automatic chunking for better load times
- **Lazy Loading**: Components load as needed
- **Image Optimization**: Use WebP format for images
- **CSS Purging**: Tailwind removes unused styles in production
- **Minification**: All assets are minified for production

## 📝 SEO Optimization

The website includes:
- Meta tags for search engines
- Open Graph tags for social media
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

Update meta tags in `index.html` for better SEO.

## 🐛 Troubleshooting

### Telegram messages not sending

- Verify your BOT TOKEN and CHAT ID are correct
- Make sure you've started a chat with your bot (send any message to it)
- Check browser console for errors

### Animations not working

- Clear browser cache
- Ensure all dependencies are installed
- Check for JavaScript errors in console

### Build errors

- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Make sure Node.js version is 18+

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 💬 Contact

If you have any questions or suggestions, feel free to reach out:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

Made with ❤️ using React and Tailwind CSS

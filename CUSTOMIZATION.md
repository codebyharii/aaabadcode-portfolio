# 🎨 Customization Guide

This guide will help you personalize the portfolio to match your brand and showcase your unique skills.

## 📝 Content Customization

### 1. Personal Information

#### Hero Section (`src/components/Hero/Hero.jsx`)

**Update your name and titles:**
```javascript
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
  Hi, I'm{' '}
  <span className="gradient-text">
    John Smith  {/* ← Change this */}
  </span>
</h1>
```

**Update typing animation roles:**
```javascript
<TypeAnimation
  sequence={[
    'Full Stack Developer',     // ← Your role 1
    2000,
    'Backend Engineer',         // ← Your role 2
    2000,
    'ML Enthusiast',           // ← Your role 3
    2000,
    'Problem Solver',          // ← Your role 4
    2000,
  ]}
  // ...
/>
```

**Update bio:**
```javascript
<p className="text-lg text-gray-400 mb-8">
  Your personal bio here - what makes you unique?
</p>
```

**Update social links:**
```javascript
const socialLinks = [
  { icon: Github, href: 'https://github.com/YOUR_USERNAME', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/YOUR_USERNAME', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/YOUR_USERNAME', label: 'Twitter' },
  { icon: Mail, href: 'mailto:YOUR_EMAIL@example.com', label: 'Email' },
]
```

#### Floating Code Card (`src/components/Hero/FloatingCodeCard.jsx`)

**Customize the code display:**
```javascript
const codeLines = [
  { text: 'const developer = {', indent: 0 },
  { text: 'name: "Your Name",', indent: 1 },  // ← Your name
  { text: 'skills: [', indent: 1 },
  { text: '"React", "Node.js",', indent: 2 },  // ← Your skills
  { text: '"Python", "ML"', indent: 2 },
  { text: '],', indent: 1 },
  { text: 'passion: "Your passion",', indent: 1 },  // ← Your passion
  { text: 'available: true', indent: 1 },
  { text: '};', indent: 0 },
]
```

### 2. About Section (`src/components/About/About.jsx`)

**Update profile image:**
```javascript
{/* Replace emoji with your image */}
<div className="text-6xl">👨‍💻</div>
{/* With: */}
<img 
  src="/your-photo.jpg" 
  alt="Your Name" 
  className="w-full h-full object-cover rounded-xl"
/>
```

**Update bio:**
```javascript
<h3 className="text-2xl md:text-3xl font-bold mb-6">
  I'm a <span className="gradient-text">Full Stack Developer</span> based in Your City
</h3>

<div className="space-y-4 text-gray-400 mb-8">
  <p>Your first paragraph about yourself...</p>
  <p>Your second paragraph...</p>
  <p>Your third paragraph...</p>
</div>
```

**Update highlights:**
```javascript
const highlights = [
  {
    icon: Code,
    title: '5+ Years',           // ← Your experience
    description: 'Coding Experience',
    color: 'from-blue-500 to-cyan-500',
  },
  // Update all four highlights...
]
```

### 3. Experience Section (`src/components/Experience/Experience.jsx`)

**Add your work experience:**
```javascript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'City, State/Country',
    period: '2023 - Present',
    description: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
      'Achievement or responsibility 3',
      'Achievement or responsibility 4',
    ],
    technologies: ['Tech1', 'Tech2', 'Tech3', 'Tech4', 'Tech5'],
  },
  // Add more experiences...
]
```

### 4. Skills Section (`src/components/Skills/Skills.jsx`)

**Update your skills:**
```javascript
const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    skills: ['Your', 'Frontend', 'Skills', 'Here'],
  },
  {
    icon: Server,
    title: 'Backend',
    color: 'from-green-500 to-emerald-500',
    skills: ['Your', 'Backend', 'Skills', 'Here'],
  },
  // Update all categories...
]
```

**Update learning section:**
```javascript
{['Tech1', 'Tech2', 'Tech3', 'Tech4', 'Tech5', 'Tech6'].map((tech) => (
  // Update with technologies you're currently learning
))}
```

### 5. Projects Section (`src/components/Projects/Projects.jsx`)

**Add your projects:**
```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Detailed description of what this project does, technologies used, and its impact.',
    technologies: ['React', 'Node.js', 'MongoDB', 'etc'],
    liveLink: 'https://your-project.com',
    githubLink: 'https://github.com/you/project',
    gradient: 'from-blue-500 to-cyan-500',
  },
  // Add 4-6 projects for best display
]
```

**Gradient options:**
```javascript
'from-blue-500 to-cyan-500'      // Blue
'from-purple-500 to-pink-500'    // Purple/Pink
'from-green-500 to-emerald-500'  // Green
'from-orange-500 to-red-500'     // Orange/Red
'from-indigo-500 to-purple-500'  // Indigo
'from-pink-500 to-rose-500'      // Pink/Rose
```

### 6. Education Section (`src/components/Education/Education.jsx`)

**Update your education:**
```javascript
const education = [
  {
    degree: 'Your Degree Name',
    institution: 'University Name',
    location: 'City, State/Country',
    period: '2020 - 2022',
    description: 'What you studied, specialized in, or your thesis topic.',
    achievements: [
      'GPA or honors',
      'Awards or recognition',
      'Research or publications',
    ],
    icon: GraduationCap,
    gradient: 'from-blue-500 to-cyan-500',
  },
]
```

**Update certifications:**
```javascript
const certifications = [
  {
    title: 'Certification Name',
    issuer: 'Issuing Organization',
    year: '2023',
  },
  // Add all your certifications
]
```

### 7. Contact Section (`src/components/Contact/Contact.jsx`)

**Update contact information:**
```javascript
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'your.email@example.com',      // ← Your email
    link: 'mailto:your.email@example.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',           // ← Your phone
    link: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Your City, Country',          // ← Your location
    link: null,
  },
]
```

**Update availability tags:**
```javascript
{['Freelance Projects', 'Full-time Roles', 'Consulting', 'Collaborations'].map((item) => (
  // Update with what you're available for
))}
```

### 8. Footer (`src/components/Footer.jsx`)

**Update footer text:**
```javascript
<p className="text-gray-400 text-sm">
  Your tagline or motto here
</p>
```

**Update copyright:**
```javascript
<p className="text-gray-400 text-sm text-center md:text-left">
  © {currentYear} Your Name. All rights reserved.
</p>
```

---

## 🎨 Visual Customization

### Color Scheme

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... your custom colors
    900: '#0c4a6e',
  },
}
```

**Popular color palettes:**

**Cyan/Blue (Current):**
```javascript
primary: {
  500: '#0ea5e9',  // Main
  600: '#0284c7',
  700: '#0369a1',
}
```

**Purple:**
```javascript
primary: {
  500: '#8b5cf6',
  600: '#7c3aed',
  700: '#6d28d9',
}
```

**Green:**
```javascript
primary: {
  500: '#10b981',
  600: '#059669',
  700: '#047857',
}
```

**Orange:**
```javascript
primary: {
  500: '#f97316',
  600: '#ea580c',
  700: '#c2410c',
}
```

### Fonts

**Change primary font in `tailwind.config.js`:**
```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
  mono: ['Your Mono Font', 'monospace'],
},
```

**Update Google Fonts in `index.html`:**
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**Popular font combinations:**
- **Modern:** Inter + JetBrains Mono
- **Elegant:** Playfair Display + Source Sans Pro
- **Tech:** Fira Code + Roboto
- **Creative:** Montserrat + Lato

### Animations

**Adjust animation speeds in `tailwind.config.js`:**
```javascript
animation: {
  'gradient': 'gradient 8s linear infinite',  // ← Change duration
  'float': 'float 6s ease-in-out infinite',
  'glow': 'glow 2s ease-in-out infinite alternate',
}
```

**Disable animations for reduced motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Background

**Change background gradient in `src/index.css`:**
```css
.animated-bg {
  background: linear-gradient(45deg, #yourColor1 0%, #yourColor2 50%, #yourColor3 100%);
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}
```

**Particle color in `src/components/ParticleBackground.jsx`:**
```javascript
ctx.fillStyle = `rgba(14, 165, 233, ${this.opacity})`  // ← Change RGB values
```

---

## 📁 Adding Your Resume

1. **Add PDF to public folder:**
   ```
   /public/your-resume.pdf
   ```

2. **Update download link in Hero.jsx:**
   ```javascript
   <a href="/your-resume.pdf" download="YourName-Resume.pdf">
     Download Resume
   </a>
   ```

---

## 🖼️ Adding Images

### Profile Picture

1. **Add image to public folder:**
   ```
   /public/profile.jpg
   ```

2. **Update About.jsx:**
   ```javascript
   <img 
     src="/profile.jpg" 
     alt="Your Name" 
     className="w-full h-full object-cover rounded-xl"
   />
   ```

### Project Screenshots

1. **Add to public folder:**
   ```
   /public/projects/project1.jpg
   /public/projects/project2.jpg
   ```

2. **Use in Projects.jsx:**
   ```javascript
   <img src="/projects/project1.jpg" alt="Project 1" />
   ```

---

## 🔧 Advanced Customization

### Add New Section

1. **Create component:**
   ```bash
   mkdir src/components/NewSection
   touch src/components/NewSection/NewSection.jsx
   ```

2. **Import in App.jsx:**
   ```javascript
   import NewSection from './components/NewSection/NewSection'
   
   // Add to JSX:
   <NewSection />
   ```

3. **Add to navigation in Navbar.jsx:**
   ```javascript
   { name: 'New Section', href: '#new-section' }
   ```

### Add Blog/Articles Section

Create `src/components/Blog/Blog.jsx`:
```javascript
const Blog = () => {
  const articles = [
    {
      title: 'Article Title',
      excerpt: 'Brief description...',
      date: '2024-01-15',
      link: 'https://your-blog.com/article',
      tags: ['React', 'JavaScript'],
    },
  ]
  
  return (
    <section id="blog" className="py-20">
      {/* Article cards */}
    </section>
  )
}
```

### Add Testimonials Section

Create `src/components/Testimonials/Testimonials.jsx`:
```javascript
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Client Name',
      role: 'Position at Company',
      image: '/testimonials/client1.jpg',
      text: 'What they said about you...',
      rating: 5,
    },
  ]
  
  return (
    <section id="testimonials" className="py-20">
      {/* Testimonial cards */}
    </section>
  )
}
```

---

## 📱 Favicon

Replace favicon in `public/`:

1. **Generate favicon:**
   - Use [Favicon Generator](https://realfavicongenerator.net/)
   - Upload your logo
   - Download package

2. **Replace files in public folder**

3. **Update index.html:**
   ```html
   <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
   <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
   ```

---

## 🌐 SEO Customization

Update `index.html`:

```html
<meta name="description" content="Your custom description here" />
<meta name="keywords" content="your, keywords, here" />
<meta name="author" content="Your Name" />

<!-- Open Graph -->
<meta property="og:title" content="Your Name - Developer Portfolio" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="https://yoursite.com/preview.jpg" />
<meta property="og:url" content="https://yoursite.com" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Your Name - Developer Portfolio" />
<meta name="twitter:description" content="Your description" />
<meta name="twitter:image" content="https://yoursite.com/preview.jpg" />
```

---

## ✅ Customization Checklist

- [ ] Updated all personal information
- [ ] Changed social media links
- [ ] Added work experience
- [ ] Updated skills
- [ ] Added projects with real links
- [ ] Updated education
- [ ] Added certifications
- [ ] Updated contact information
- [ ] Added resume PDF
- [ ] Changed color scheme (optional)
- [ ] Updated fonts (optional)
- [ ] Added profile picture
- [ ] Updated meta tags
- [ ] Tested contact form
- [ ] Reviewed all text for typos
- [ ] Tested on mobile device

---

Need help with customization? Check the README or open an issue!

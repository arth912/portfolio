# Arth Rathod - Portfolio Website

A modern, responsive portfolio website for Arth Rathod, Full Stack Developer with 3+ years of experience in MERN stack and cloud technologies.

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional UI
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Subtle hover effects and section transitions
- **SEO Optimized**: Semantic HTML and meta tags for better search visibility
- **Performance**: Fast loading with optimized assets

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **JavaScript (ES6+)** - Programming language

## 📋 Sections

1. **Hero** - Name, role, professional summary with CTAs
2. **About** - Professional background and key highlights
3. **Skills** - Categorized technical skills (Languages, Backend, Frontend, Databases, DevOps)
4. **Experience** - Professional experience with achievements at AutoDAP
5. **Projects** - Featured projects (Buyers.com, Achosenson, TinyBee.Toys, Payment Module)
6. **Education** - B.E. in Computer Engineering
7. **Certifications** - Python, Web Development, Databases, PHP
8. **Contact** - Contact information and social links

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd arth-rathod-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:3000`

## 📦 Build for Production

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Netlify

1. **Using Netlify CLI:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

2. **Using Netlify Dashboard:**
   - Push your code to GitHub
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Click "Deploy site"

### Deploy to Vercel

1. **Using Vercel CLI:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

2. **Using Vercel Dashboard:**
   - Push your code to GitHub
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/repository-name"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Customize primary colors
      }
    }
  }
}
```

### Content

Update the content in each component file:
- `src/components/Hero.jsx` - Update name, title, summary
- `src/components/About.jsx` - Update professional background
- `src/components/Skills.jsx` - Update technical skills
- `src/components/Experience.jsx` - Update work experience
- `src/components/Projects.jsx` - Update projects
- `src/components/Education.jsx` - Update education details
- `src/components/Certifications.jsx` - Update certifications
- `src/components/Contact.jsx` - Update contact information

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

- **Email**: arthrathod007@gmail.com
- **Phone**: +91-9687608630
- **LinkedIn**: [arth-rathod-6bb0a51b5](https://linkedin.com/in/arth-rathod-6bb0a51b5)
- **GitHub**: [arth912](https://github.com/arth912)
- **Portfolio**: [arthrathod.netlify.app](https://arthrathod.netlify.app)

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

Built with ❤️ by Arth Rathod

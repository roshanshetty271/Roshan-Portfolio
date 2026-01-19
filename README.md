# Roshan Shetty - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- **Warm Copper Color Scheme** - Distinctive design that stands out from typical AI/tech portfolios
- **Dark/Light Mode Toggle** - Seamless theme switching with system preference detection
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - Subtle, professional animations using Framer Motion
- **SEO Optimized** - Meta tags, Open Graph, and structured data
- **Accessible** - WCAG compliant components

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Cormorant Garamond (display), Source Sans 3 (body), JetBrains Mono (code)
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
roshan-portfolio/
├── app/
│   ├── globals.css      # Global styles, CSS variables, fonts
│   ├── layout.tsx       # Root layout with theme provider
│   └── page.tsx         # Main page assembling all sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navigation header with theme toggle
│   │   ├── Footer.tsx       # Site footer
│   │   └── ThemeProvider.tsx # Dark/light mode context
│   ├── sections/
│   │   ├── Hero.tsx         # Hero/landing section
│   │   ├── About.tsx        # About me section
│   │   ├── Experience.tsx   # Work experience timeline
│   │   ├── Projects.tsx     # Featured and other projects
│   │   ├── Skills.tsx       # Technical skills grid
│   │   ├── Testimonials.tsx # Recommendations carousel
│   │   ├── Certifications.tsx # SAP certs and awards
│   │   └── Contact.tsx      # Contact form and info
│   └── ui/
│       ├── SectionHeading.tsx # Reusable section header
│       └── Badge.tsx          # Badge/tag component
├── data/
│   └── portfolio.ts     # All portfolio data (edit this!)
├── lib/
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## Customization

### Updating Content

All portfolio content is in `data/portfolio.ts`. Edit this file to update:
- Personal info and about text
- Experience entries
- Projects
- Skills
- Certifications
- Testimonials

### Changing Colors

Colors are defined in `tailwind.config.ts` under `theme.extend.colors`. The main accent color is `copper`.

### Adding a Profile Photo

1. Add your photo to the `public/` folder
2. Update the About section in `components/sections/About.tsx` to use an `<Image>` component instead of the placeholder

### Contact Form

The contact form is currently a static form. To make it functional:
- Use a service like Formspree, EmailJS, or Resend
- Or create an API route in `app/api/contact/route.ts`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy!

### Netlify

1. Push your code to GitHub
2. Import in [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## TODO / Future Improvements

- [ ] Add actual profile photo
- [ ] Add project screenshots
- [ ] Implement contact form backend
- [ ] Add resume PDF download
- [ ] Add blog section (optional)
- [ ] Add project case study pages
- [ ] Add loading states
- [ ] Add error boundaries

## License

MIT License - Feel free to use this as a template for your own portfolio!

---

Built with ❤️ by Roshan Shetty

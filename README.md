# Treasure Coast Scavengers Website

Official website for Treasure Coast Scavengers - A community treasure hunt organization that brings people together through adventure, discovery, and connection.

## 🎨 Design System

### Color Palette

The website uses a carefully curated color palette that reflects the coastal, adventurous spirit of the Treasure Coast:

#### Primary Colors
- **Deep Navy Blue**: `#0B2341` - Main background color, represents the deep ocean and night sky
- **Navy Blue Variant**: `#0E3A4C` - Used in gradients for depth and texture

#### Accent Colors
- **Teal/Cyan**: `#10B6C6` - Primary accent color, represents the clear coastal waters
  - Variant: `#0EA5B8` - Used for hover states and gradients
- **Coral/Orange-Red**: `#FF6A4A` - Represents sunset, adventure, and energy
- **Gold/Yellow**: `#FDBA2D` - Represents treasure, discovery, and warmth

#### Neutral Colors
- **Gray**: `#6B7280` - Used for secondary text and subtle elements

### Color Usage
- **Background**: Deep navy blue (`#0B2341`) creates a cinematic, immersive experience
- **Primary Buttons**: Teal (`#10B6C6`) with gradient effects
- **Secondary Buttons**: Coral (`#FF6A4A`) to gold (`#FDBA2D`) gradients
- **Card Borders**: White with low opacity (`rgba(255, 255, 255, 0.15)`) for glass effect
- **Hover States**: Enhanced gradients with increased opacity and subtle lift effects

## 🏗️ Project Structure

```
TCS_WebsiteCode/
├── app/
│   ├── (marketing)/
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── donate/         # Donate page
│   │   └── events/         # Events page
│   ├── api/                # API routes
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── Footer.tsx          # Site footer
│   ├── Logo.tsx            # Logo component
│   ├── ResponsiveNav.tsx   # Navigation bar
│   └── ...                 # Other components
└── public/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Inovexis/tcscavengers.git
cd tcscavengers
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Tech Stack

- **Framework**: Next.js 14.1.0 (App Router)
- **Language**: TypeScript
- **Styling**: CSS-in-JS (inline styles), Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Maps**: Mapbox GL
- **Payments**: Stripe
- **CMS**: Sanity (optional)

## 🎯 Features

### Home Page
- **Cinematic Hero Section**: Immersive full-screen background with animated title
- **Mission Statement**: Clear value proposition with glass card design
- **What Drives Us**: Four core values displayed in a responsive 2x2 grid
  - Love in Action
  - Connection Through Community
  - Joy in the Journey
  - Local Roots, Lasting Impact
- **Our Adventures**: Three adventure preview cards
  - Downtown Mysteries
  - Beach Adventures
  - Special Moments
- **Statistics Bar**: Dynamic counters for treasures, adventurers, and events
- **Call-to-Action**: Prominent buttons for joining hunts and supporting the mission

### Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Breakpoints**:
  - Mobile: < 800px (single column)
  - Tablet: 800px - 1049px (2 columns with centered third card)
  - Desktop: 1050px+ (3 columns)
- **Smooth Transitions**: Cards prevent title wrapping at breakpoints

### Interactive Elements
- **Glass Card Effects**: Frosted glass appearance with subtle borders
- **Hover Animations**: Enhanced gradients, subtle lift, and shadow effects
- **Smooth Transitions**: 0.3s ease transitions for all interactive elements
- **Custom Cursors**: Default arrow cursor for non-interactive text

## 🎨 Design Principles

1. **Glass Morphism**: Cards use frosted glass effects with transparency
2. **Gradient Accents**: Teal, coral, and gold gradients create visual interest
3. **Consistent Spacing**: Standardized padding (5rem top, 6rem bottom) for sections
4. **Typography**: Inter font family for clean, modern readability
5. **Animation**: Subtle, purposeful animations that enhance UX without distraction

## 📱 Pages

- **Home** (`/`): Main landing page with all sections
- **About** (`/about`): Organization values and team member bios
- **Contact** (`/contact`): Contact form and information
- **Donate** (`/donate`): Donation page with Stripe integration
- **Events** (`/events`): Upcoming and past treasure hunt events

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Style
- TypeScript for type safety
- Inline styles for component-specific styling
- Framer Motion for animations
- Consistent component structure

## 🌐 Deployment

The website is currently deployed on **Netlify** and can be accessed at your live domain.

### Deployment Process
1. Push changes to GitHub
2. Netlify automatically builds and deploys
3. Preview deployments available for testing

## 📝 Notes

- All colors, spacing, and design elements are carefully curated and should remain consistent
- Cursor styles are set to `default` for non-interactive text elements
- Cards use consistent hover effects across all sections
- Responsive breakpoints are optimized to prevent text wrapping

## 📄 License

Private project - All rights reserved

## 👥 Contributors

Treasure Coast Scavengers Team

---

**Last Updated**: October 25, 2025

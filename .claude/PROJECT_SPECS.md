# PROJECT_SPECS.md

## Project Overview

Thaqi Renovation is a portfolio/showcase website for a renovation business based in **Switzerland**. The site targets potential customers looking to hire renovation services.

**Company Info:**
- **Name**: Thaqi Renovation
- **Location**: Suisse (Switzerland)
- **Language**: French only

**Core Features:**
- Service listings with before/after galleries
- Project showcase with interactive image comparisons
- Contact via email link (no form)

---

## Branding & Assets

### Logo
- **Path**: `public/assets/images/logos/main.jpg`

### Hero Images
- **Path**: `public/assets/images/hero/`
- **Files**: `maison-1.jpg`, `maison-2.jpg`

### Contact Information (placeholders - update before launch)
```
Phone: +41 XX XXX XX XX
Email: contact@thaqi-renovation.ch
Address: [Adresse], [Code Postal] [Ville], Suisse
```

---

## Design Style

### Color Scheme
- **Base**: White (~70% of screen)
- **Primary**: `#1c7ec2` (blue) - buttons, accent text, links, titles (~25%)
- **Secondary**: `#ab1d23` (red) - highlights, destructive actions (~5%)

### Aesthetic
- Bold/impactful - strong typography, dramatic visuals
- Card-based grids for services and projects

### Animations
- **Style**: Subtle animations
- Fade-ins on scroll
- Gentle hover effects on cards and buttons
- No parallax or heavy scroll animations

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Linting**: ESLint 9 with Next.js core-web-vitals and TypeScript rules

---

## Hosting & Deployment

- **Hosting**: Infomaniak (static website hosting)
- **Build**: Static export (`next build` generates static HTML/CSS/JS)
- **Domain**: thaqirenovation.ch

---

## SEO Optimization

The website must be optimized for search engines to attract local customers searching for renovation services in Switzerland.

### Requirements
- **Meta tags**: Title, description, keywords on all pages
- **Open Graph**: Social sharing previews (WhatsApp, Facebook, etc.)
- **Favicon**: Complete set (ico, png, apple-touch-icon, android-chrome)
- **Semantic HTML**: Proper heading hierarchy (h1, h2, h3)
- **Alt texts**: Descriptive alt attributes on all images

### Content Strategy
- **Short descriptions**: Concise text for service cards on homepage
- **Long descriptions**: Detailed, keyword-rich content on service pages including:
  - Explanation of the service
  - List of specific offerings/options
  - Local keywords (Genève, Lausanne, Suisse romande, etc.)
  - Common search terms (e.g., "rénovation façade Genève", "refaire salle de bain")

### Technical SEO
- **Static generation**: All pages pre-rendered for fast loading
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Proper crawling directives
- **Performance**: Optimized images, minimal JavaScript

---

## Renovation Types

All renovation images are stored in `public/assets/images/renovation/`. Each folder represents a renovation type.

### Image Naming Convention
- `avant-{n}.jpg` - Before photos (n = project number)
- `apres-{n}.jpg` - After photos
- `apres-{n}{a|b}.jpg` - Multiple after angles of same project
- `final-{n}.jpg` - Final/showcase photos
- `final-{n}{a|b|c}.jpg` - Multiple final angles of same project (display in carousel)

### Renovation Categories

| Slug | Title (FR) | Description | Has Images |
|------|------------|-------------|------------|
| `amenagement-jardin` | Amenagement Jardin | Transformation et creation d'espaces exterieurs : terrasses, allees, clotures et amenagements paysagers. | Yes |
| `cheminee-insert-poele` | Cheminee, Insert & Poele | Installation et renovation de cheminees, inserts et poeles a bois pour un chauffage performant et esthetique. | Yes |
| `cuisine` | Cuisine | Renovation complete ou partielle de cuisines : meubles, plans de travail, electromenager et agencement. | Yes |
| `drainage` | Drainage | Systemes de drainage pour evacuation des eaux pluviales et protection des fondations. | No |
| `electricite` | Electricite | Mise aux normes electriques, installation de tableaux, prises, eclairage et domotique. | No |
| `facade` | Facade | Ravalement, isolation exterieure, enduits et peinture de facades pour embellir et proteger votre maison. | Yes |
| `faux-plafond` | Faux Plafond | Pose de faux plafonds suspendus ou tendus pour isolation phonique, thermique et esthetique. | No |
| `fenetre-velux` | Fenetre & Velux | Remplacement et pose de fenetres, baies vitrees et velux pour luminosite et isolation. | Yes |
| `parquet-carrelage` | Parquet & Carrelage | Pose et renovation de parquet massif, stratifie et carrelage pour sols interieurs. | Yes |
| `peinture-tappisserie` | Peinture & Tapisserie | Travaux de peinture interieure et pose de papier peint pour personnaliser vos espaces. | No |
| `plomberie-chauffage` | Plomberie & Chauffage | Installation et reparation de plomberie, chauffage central, chaudieres et radiateurs. | No |
| `porte` | Porte | Pose et remplacement de portes interieures, portes d'entree et portes de garage. | Yes |
| `salle-de-bain` | Salle de Bain | Renovation complete de salles de bain : douche, baignoire, vasque, carrelage et plomberie. | Yes |
| `toiture-isolation` | Toiture & Isolation | Refection de toiture, remplacement de tuiles et isolation thermique des combles. | Yes |
| `veranda` | Veranda | Construction et amenagement de verandas pour agrandir votre espace de vie. | No |

---

## Navigation & Layout

### Header
- **Style**: Sticky (fixed at top when scrolling)
- **Logo**: Left side, links to home
- **Navigation Links** (right side):
  1. Accueil (`/`)
  2. Nos Services (`/#services` - scrolls to renovation grid)
  3. A Propos (`/a-propos`)
  4. Contact (`/contact`)
- **CTA Button**: "Contactez-nous" (primary color, links to contact page)

### Footer
- **Style**: Medium footer
- **Content**:
  - Company logo and name
  - Navigation links (same as header)
  - Contact information (phone, email, address)
  - Copyright notice
- **No social media links**

---

## Page Structure

### Landing Page (`/`)

#### Hero Section
- **Style**: Full-width background image with dark overlay
- **Image**: Use `maison-1.jpg` or `maison-2.jpg` from hero folder
- **Content**: Company name, brief tagline/description, CTA button
- **CTA**: "Contactez-nous" button

#### Renovation Grid Section (`#services`)
- **Layout**: Card-based grid (responsive: 1 col mobile, 2 cols tablet, 3-4 cols desktop)
- **Card Style**: Image with overlay text
  - Background: Preview image (prefer `final-*` or `apres-*` image)
  - Overlay: Semi-transparent dark gradient
  - Text: Title + short description on overlay
  - Hover: Subtle scale/brightness effect
- **All categories displayed** (including those without images)
- **Click behavior**: Links to `/renovations/[slug]`

---

### Renovation Detail Page (`/renovations/[slug]`)

- **Header**: Back button + renovation title
- **Description**: Detailed description of the service

#### For categories WITH images:
- **Before/After Slider**: Interactive drag-to-compare slider for avant/apres pairs
  - Group matching pairs (avant-1 with apres-1, avant-2 with apres-2, etc.)
- **Final Gallery**:
  - Display all `final-*` images
  - If multiple angles exist (final-1a, final-1b, final-1c), group in a carousel
  - Single final images displayed as standalone

#### For categories WITHOUT images:
- Show description only
- No gallery section (no placeholder message)

---

### A Propos Page (`/a-propos`)
- **Content**: Company story and values
- **Sections**:
  - Company history/story
  - Mission statement
  - Core values
- **Style**: Clean typography, optional hero image

---

### Contact Page (`/contact`)
- **No contact form** - just display contact information
- **Email link**: `mailto:` link for direct email
- **Phone**: Clickable `tel:` link
- **Address**: Full address displayed
- **Optional**: Embedded map

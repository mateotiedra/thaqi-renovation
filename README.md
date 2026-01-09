# Thaqi Renovation

Portfolio website for a renovation business based in Switzerland. The site showcases renovation services and completed projects to attract potential customers.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command         | Description                    |
|-----------------|--------------------------------|
| `npm run dev`   | Start development server       |
| `npm run build` | Create production build        |
| `npm start`     | Start production server        |
| `npm run lint`  | Run ESLint checks              |

## Project Structure

```
app/
├── layout.tsx              # Root layout
├── page.tsx                # Home page
├── a-propos/               # About page
├── contact/                # Contact page
└── renovations/[slug]/     # Dynamic renovation detail pages

components/
├── layout/                 # Header, Footer
├── sections/               # Hero, Services grid
├── ui/                     # Reusable UI components (shadcn)
└── seo/                    # SEO components (JSON-LD)

public/assets/images/
├── hero/                   # Hero section images
├── logos/                  # Company logo
└── renovation/             # Before/after project images
```

## Features

- Service listings with before/after image comparisons
- Project showcase galleries
- Responsive design
- SEO optimized with meta tags and JSON-LD

## Deployment

The site is deployed as a static export to Infomaniak hosting.

```bash
npm run build
```

## License

Private project.

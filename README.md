# Flare Statistics Animation

A beautiful, animated Flare Statistics component built with Next.js, featuring a slow-rotating SVG animation with a dark purple background.

## Features

- ✨ Smooth 300-second rotation animation
- 🎨 Dark purple theme matching Solstice Finance design
- 📱 Fully responsive (scales 140% on mobile, 100% on desktop)
- 🚫 No scrolling - fixed viewport layout
- 🐳 Docker support for easy development

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Docker** - Containerized development

## Getting Started

### Prerequisites

- Docker and Docker Compose installed
- Node.js 20+ (if running without Docker)

### Running with Docker (Recommended)

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Vibecoding
```

2. Start the development server:
```bash
docker-compose up --build
```

3. Open your browser:
```
http://localhost:3000
```

### Running without Docker

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser:
```
http://localhost:3000
```

## Project Structure

```
Vibecoding/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── FlareStatistics.tsx
│   └── FlareStatistics.css
├── public/               # Static assets
│   └── rewards_tvl_flares_animation_graphic.svg
├── docker-compose.yml    # Docker Compose configuration
├── Dockerfile           # Docker configuration
└── package.json        # Dependencies
```

## Component Features

The `FlareStatistics` component displays an animated SVG graphic that:
- Rotates slowly (300 seconds per full rotation)
- Starts at 118.846 degrees rotation
- Scales responsively based on screen size
- Respects `prefers-reduced-motion` for accessibility

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Docker Commands

- `docker-compose up --build` - Build and start container
- `docker-compose down` - Stop container
- `docker-compose restart` - Restart container
- `docker-compose logs -f nextjs` - View logs

## Design Notes

- Background color: `oklch(23.14% .0404 296.24)` - Dark purple
- Animation duration: 300 seconds per rotation
- Initial rotation: 118.846 degrees
- Responsive scaling: 140% mobile, 100% desktop (≥1280px)

## License

This project is private and proprietary.

## Checkpoint

This version represents a working checkpoint with:
- ✅ Centered animation
- ✅ No scrolling issues
- ✅ Dark purple background
- ✅ Fully responsive
- ✅ Docker support


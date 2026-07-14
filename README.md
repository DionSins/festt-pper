# Festaepper - Mediterranean Carpet Rental Service

A modern website for renting beautiful Mediterranean carpets for events and parties.

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DionSins/festt-pper.git
cd festt-pper
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
festt-pper/
├── app/
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── CarpetCatalog.tsx  # Carpet listing with photos
│   ├── Pricing.tsx        # Pricing & packages
│   └── ContactForm.tsx    # Contact/inquiry form
├── data/
│   └── carpets.ts         # Carpet inventory data
├── public/                # Static assets
└── package.json
```

## Features

- 🏠 Homepage showcasing Mediterranean carpets
- 🧵 Carpet catalog with individual pricing (small/medium/large)
- 💰 Package deals (10, 15, 20 carpets)
- 📸 Beautiful stock photos from Unsplash
- 📋 Contact inquiry form
- 🎨 Professional, responsive design
- 📱 Mobile-friendly layout

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and select this repository
4. Deploy!

Your site will be live at a Vercel URL, and you can connect your custom domain (festaepper.dk).

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type-safe JavaScript
- **CSS** - Styling
- **Vercel** - Hosting & deployment

## License

MIT

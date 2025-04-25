# Ultimate Vite Starter

A complete React + Vite + TypeScript + Tailwind CSS starter template with shadcn/ui components pre-configured.

## Features

- ⚡️ [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/) for styling
- 📝 [TypeScript](https://www.typescriptlang.org/) for type safety
- 🧩 [shadcn/ui](https://ui.shadcn.com/) components pre-configured
- 📦 Organized folder structure
- 🧪 Testing setup with Vitest
- 📱 Fully responsive design
- 🔍 ESLint configured

## Folder Structure

```
/src
  /assets         # Static assets
  /components     
    /ui           # shadcn/ui components
    /common       # Common components
  /hooks          # Custom React hooks
  /lib            # Utility libraries
  /pages          # Page components
  /styles         # Global styles
  /test           # Test utilities
  /utils          # Helper functions
```

## Quick Start

Create a new project with this template using:

```bash
pnpm dlx ultimate-vite-starter my-app
```

Then navigate to your project:

```bash
cd my-app
pnpm dev
```

## Adding shadcn/ui Components

The template comes with shadcn/ui pre-configured. Add new components with:

```bash
pnpm component add button
```

Or any other available component:

```bash
pnpm component add card
pnpm component add dialog
# etc.
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm test` - Run tests
- `pnpm test:ui` - Run tests with UI
- `pnpm coverage` - Generate test coverage report
- `pnpm component` - Add shadcn/ui components

## License

MIT
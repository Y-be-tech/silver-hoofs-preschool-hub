# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/73039180-bae0-4342-a305-cb225e004f15

## Local Development (Windows / macOS / Linux)

Prerequisites:

- Node.js 18+ (recommend latest LTS) and npm 9+
- Git

Optional: Bun is not required. This project will run perfectly with plain npm.

Quick start:

```powershell
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the dev server (port 8080)
npm run dev

# Or equivalently
npm start

# Build for production (output goes to ./dist)
npm run build

# Preview the production build locally
npm run preview
```

Dev server will be available at: http://localhost:8080/

If you need to change the port, edit `server.port` in `vite.config.ts` or run:

```powershell
npm run dev -- --port 3000
```

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/73039180-bae0-4342-a305-cb225e004f15) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

The steps above already cover cloning and running. Use any IDE (VS Code recommended). ESLint and TypeScript will guide you as you code:

```powershell
# Lint the project
npm run lint

# Type check (implicit during build, or run tsc directly)
npx tsc --noEmit
```

### Common Issues

- Port already in use: run `npm run dev -- --port 5173` (or any free port) or stop the other process.
- Large bundle warning: consider code splitting (dynamic `import()`); see Vite build output suggestions.
- Fast refresh warnings: These are non-blocking and relate to exporting non-component values in UI files; safe to ignore.
- WhatsApp buttons not opening: Ensure you created a `.env` file with `VITE_WHATSAPP_NUMBER` (digits only, international format). Example: `VITE_WHATSAPP_NUMBER=919876543210`

### WhatsApp Chat Integration

You can trigger direct WhatsApp chats from CTA buttons. Configure your number:

```powershell
Copy .env.example .env
# Edit .env and add your number
notepad .env
```

Component: `src/components/WhatsAppButton.tsx`

Usage example:

```tsx
<WhatsAppButton message="Hi! I'd like to know more about admissions." />
```

Environment variable: `VITE_WHATSAPP_NUMBER` (must be digits only, no + or spaces). The component falls back to a placeholder if missing.

### Production Build & Deploy

After `npm run build`, deploy the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.).

---

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/73039180-bae0-4342-a305-cb225e004f15) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

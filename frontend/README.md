# Succeed — Company Website

Corporate landing site for **Succeed Education Support Services L.L.C.**,
the company behind [Universities.org](https://universities.org). This is a
"who we are" site, not a services site — Universities.org is where students
actually apply and get counseled.

## Step 1 — Open in VS Code

1. Unzip the project folder.
2. Open VS Code → `File > Open Folder…` → select the `succeed-website` folder.
3. Open the built-in terminal: `` Ctrl+` `` (Windows/Linux) or `` Cmd+` `` (Mac).

## Step 2 — Install Node.js (if you don't have it)

You need **Node.js 18+**. Check with:

```bash
node -v
```

If that fails, install it from https://nodejs.org (LTS version).

## Step 3 — Install dependencies

In the VS Code terminal, inside the project folder:

```bash
npm install
```

## Step 4 — Run it locally

```bash
npm run dev
```

VS Code will show a local URL (usually `http://localhost:5173`). Open it in
your browser — the site will hot-reload as you edit files.

## Step 5 — Where to edit things

| What you want to change | File |
|---|---|
| Company name, email, phone, flagship URL | `src/siteConfig.js` — **one file, updates everywhere** |
| Homepage copy/sections | `src/pages/Home.jsx` |
| About page | `src/pages/About.jsx` |
| Contact page / form fields | `src/pages/Contact.jsx`, `src/components/ContactForm.jsx` |
| Terms & Conditions | `src/pages/Terms.jsx` |
| Privacy Policy | `src/pages/Privacy.jsx` |
| Nav links / mobile menu | `src/components/Navbar.jsx` |
| Footer | `src/components/Footer.jsx` |
| Logo / wordmark styling | `src/components/Logo.jsx` |
| Colors, fonts | `tailwind.config.js` |

## Step 6 — Important: the contact form needs a backend

Right now the contact form validates input, then opens the visitor's email
app pre-filled with their message (a working fallback with zero backend).
For real form submissions landing in your inbox automatically, connect it to
one of these (all have free tiers, ~10 minutes each):

- **[Formspree](https://formspree.io)** — easiest, just point the form's
  action at your Formspree endpoint.
- **[EmailJS](https://www.emailjs.com)** — sends straight from the browser,
  no backend server needed.
- Your own small API route if you eventually add a backend.

The spot to change is `handleSubmit` in `src/components/ContactForm.jsx`.

## Step 7 — Images

The site currently pulls a few images directly from `universities.org`
(same company, so this is your own asset reuse). For production, it's safer
to download those images and serve them yourself:

1. Save the images into `src/assets/`.
2. Import them in the page files, e.g.
   `import hero from '../assets/hero.jpg'` then `<img src={hero} />`.
3. Replace the `https://universities.org/...` URLs in `Home.jsx` and
   `About.jsx` with your imported images.

## Step 8 — Build for production / deploy

```bash
npm run build
```

This creates a `dist/` folder — deploy that to Vercel, Netlify, Cloudflare
Pages, or any static host. All of them offer free tiers and a
`vercel`/`netlify` CLI that deploys in one command.

## Step 9 — Point your domain

Once deployed, add `succeedeu.com` (or whichever domain you're using) as a
custom domain in your hosting provider's dashboard, and update its DNS
records as instructed there.

---

**Company details used throughout the site** (edit in `src/siteConfig.js`):

- Legal name: Succeed Education Support Services L.L.C.
- Brand shown to visitors: Succeed
- Email: infor@succeedeu.com
- Phone: +971 52 292 3333
- Flagship platform: Universities.org

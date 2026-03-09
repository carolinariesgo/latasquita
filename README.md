# La Tasquita — Website

Official website for La Tasquita, a Spanish bar/restaurant with 3 locations in Madrid.

**Live site:** https://tasquita-seven.vercel.app

---

## What this site includes

- Home page with the 3 locations (Manuel Becerra, Salamanca, Diego de León)
- Individual page for each location with contact info, description, and features
- Sections: Historia, Valores, Clientes (reviews), Celebra con nosotros (events)
- Spanish / English language toggle (🇪🇸 / 🇬🇧)
- Links to WhatsApp reservations and Instagram for each location
- Fully responsive — works on mobile and desktop
- Auto-deploys to Vercel when changes are pushed to GitHub

---

## Tech stack

- **React** + **TypeScript** — the UI framework
- **Vite** — build tool (fast development server)
- **Tailwind CSS** — styling
- **React Router** — navigation between pages
- **Vercel** — hosting and deployment
- **GitHub** — code storage (`carolinariesgo/latasquita`)

---

## Project structure

```
tasquita/
├── public/
│   ├── logo.webp           # La Tasquita logo
│   └── tiles.webp          # Decorative tile pattern used as dividers
├── src/
│   ├── App.tsx             # Main home page (all sections)
│   ├── LocationPage.tsx    # Individual location pages
│   ├── LanguageContext.tsx # ES/EN language toggle logic
│   ├── translations.ts     # All Spanish and English text strings
│   ├── main.tsx            # App entry point + routing
│   └── index.css           # Global styles and fonts
```

---

## How to make changes

### Common changes that don't require code knowledge

| What you want to change | Where to find it |
|---|---|
| Phone numbers | `src/App.tsx` and `src/LocationPage.tsx` — search for `tel:+34` |
| WhatsApp links | `src/App.tsx` — search for `wa.me` |
| Instagram handles | `src/App.tsx` — search for `instagram.com` |
| Reserve/booking URLs | `src/App.tsx` — `reserveUrl` in the `locations` array |
| Google Maps links | `src/App.tsx` — `maps` in the `locations` array |
| Location addresses | `src/App.tsx` — `address` in the `locations` array |
| All Spanish text | `src/translations.ts` — under the `es:` section |
| All English text | `src/translations.ts` — under the `en:` section |
| Location descriptions | `src/LocationPage.tsx` — `description_es` and `description_en` |
| Location features list | `src/LocationPage.tsx` — `features_es` and `features_en` |
| Customer reviews | `src/App.tsx` — the `reviews` array at the top |

---

## How to run the site locally

You need **Node.js** installed (https://nodejs.org).

```bash
# 1. Clone the repo
git clone https://github.com/carolinariesgo/latasquita.git
cd latasquita

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
```

Then open http://localhost:5173 in your browser.

---

## How to deploy changes

The site is connected to GitHub. Any change pushed to the `main` branch automatically deploys to Vercel within ~1 minute.

```bash
# After making your changes:
git add .
git commit -m "Description of what you changed"
git push
```

---

## Accounts needed for full access

| Service | Purpose | URL |
|---|---|---|
| GitHub | Code storage | github.com/carolinariesgo/latasquita |
| Vercel | Hosting & deployment | vercel.com |

---

## Built by

Carolina Riesgo — carolina.riesgo@outlook.com

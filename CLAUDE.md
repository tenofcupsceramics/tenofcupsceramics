# Ten of Cups Ceramics — Claude Instructions

## About this project

This is the website for **Ten of Cups Ceramics**, a one-person ceramics studio owned by **Meryll**.
It is an Express.js web store with EJS templates and Tailwind CSS for styling.

The site was set up by Meryll's friend Desmond. Meryll is **not a developer** — she runs the studio.
When Meryll works with you directly, be patient, use plain language, avoid jargon, and explain
what you're doing and why. She just needs to manage her shop, not understand the code.

---

## Tech stack

- **Node.js** + **Express 5** — the web server
- **EJS** — HTML templates (the `.ejs` files in `views/`)
- **Tailwind CSS v4** — all styling (utility classes written directly in the `.ejs` files)
- **No database** — all shop items are hard-coded in `data/items.js`
- **Stripe** — payment integration is planned but not yet built

---

## Always use Tailwind

All styling must be done with **Tailwind CSS utility classes** in the EJS templates.
Do not write custom CSS in `public/css/style.css` — that file is generated from `src/input.css`
by the Tailwind CLI and will be overwritten on the next build.

If you need a custom color or font, add it to `src/input.css` inside the `@theme` block,
then use it as a Tailwind class.

## Always design mobile-first

Pages must work well on **phones as well as desktops**. Use responsive prefixes
(`sm:`, `md:`, `lg:`) to adjust layouts at larger screen sizes.

---

## Running the site

```bash
npm start        # builds CSS then starts the server
npm run dev      # watches CSS changes + auto-restarts server
```

The site runs at **http://localhost:3000**.

---

## How Meryll manages her shop

Meryll does not write code. The things she is most likely to need help with are:

### Adding a new item for sale

All items are in `data/items.js`. Each item looks like this:

```js
{
  id: 7,                             // pick the next number in the list
  name: "Yunomi Cup",                // the name shown on the site
  slug: "yunomi-cup",                // used in the URL — lowercase, hyphens, no spaces
  price: 5200,                       // price in CENTS — $52.00 = 5200
  description: "A tall, slightly tapered...",
  details: ["Hand-thrown stoneware", "Holds ~8oz", "Dishwasher safe"],
  image: "/images/yunomi-cup.jpg",   // file must exist in public/images/
  category: "mugs",                  // mugs | bowls | plates | vases (or add a new one)
  inStock: true,
}
```

### Uploading a product photo

1. Copy the image file into the `public/images/` folder
2. Name it something clear, e.g. `yunomi-cup.jpg`
3. Set `image: "/images/yunomi-cup.jpg"` on the item in `data/items.js`
4. Recommended size: **800×800px**, square crop

### Marking something as sold out

In `data/items.js`, find the item and change `inStock: true` to `inStock: false`.
The site will show a "Sold Out" badge automatically.

### Changing a price

In `data/items.js`, update the `price` field. Remember: prices are in **cents**.
$48.00 → `4800`. $120.00 → `12000`.

### Removing an item

Delete its entire `{ ... }` block from `data/items.js`.

---

## Planned future work

- **Stripe payment integration** — the "Buy Now" buttons are placeholders ready to be wired up
- **Product images** — currently using a placeholder; Meryll will provide real photos
- **Contact form** — currently renders but does not send email yet; needs a mail handler

---

## Repo

GitHub: https://github.com/tenofcupsceramics/tenofcupsceramics

# Ten of Cups Ceramics

A simple Express web store for hand-thrown ceramics. No database — all items are hard-coded. Stripe payment integration to come.

## Getting started

```bash
npm install
npm start
```

The site runs at `http://localhost:3000`.

For development with auto-restart on file changes:

```bash
npm run dev
```

## Project structure

```
tenofcupsceramics/
├── app.js              # Express entry point
├── data/
│   └── items.js        # All shop items defined here
├── routes/
│   ├── pages.js        # Home, About, Contact routes
│   └── shop.js         # Shop listing and item detail routes
├── views/
│   ├── partials/
│   │   ├── header.ejs  # Shared site header and nav
│   │   └── footer.ejs  # Shared site footer
│   ├── index.ejs       # Home page
│   ├── shop.ejs        # Shop listing page
│   ├── item.ejs        # Individual item detail page
│   ├── about.ejs       # About page
│   ├── contact.ejs     # Contact page
│   └── 404.ejs         # 404 page
└── public/
    ├── css/
    │   └── style.css   # All site styles
    └── images/         # Product images go here
```

## Adding and editing items

All items live in `data/items.js`. Each item is an object in the exported array:

```js
{
  id: 1,                          // Unique number — don't duplicate
  name: "Speckled Mug",           // Display name
  slug: "speckled-mug",           // URL path: /shop/speckled-mug
  price: 4800,                    // Price in cents (4800 = $48.00)
  description: "...",             // Shown on the item detail page
  details: [                      // Bullet points on the detail page
    "Hand-thrown stoneware",
    "Holds ~12oz",
    "Dishwasher safe",
  ],
  image: "/images/speckled-mug.jpg",  // Path to image in public/images/
  category: "mugs",               // Used for shop filter tabs
  inStock: true,                  // false shows a "Sold Out" badge
}
```

### To add a new item

1. Add a new object to the array in `data/items.js`
2. Give it a unique `id` and a unique `slug` (lowercase, hyphen-separated)
3. Add the product image to `public/images/` and set the `image` field accordingly

### To mark an item as sold out

Set `inStock: false`. It will show a "Sold Out" badge on the shop page and a disabled button on the detail page.

### To remove an item

Delete its object from the array in `data/items.js`.

### Categories

The category filter tabs on the shop page are generated automatically from whatever `category` values exist in the items array. To add a new category, just use a new value in the `category` field of an item.

## Adding product images

1. Place image files in `public/images/` — `.jpg`, `.png`, and `.webp` all work
2. Update the `image` field in `data/items.js` to match: `"/images/your-filename.jpg"`

Recommended image size: **800×800px** square crops work best with the grid layout.

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/shop` | All items |
| `/shop?category=mugs` | Filtered by category |
| `/shop/:slug` | Individual item detail |
| `/about` | About |
| `/contact` | Contact form |

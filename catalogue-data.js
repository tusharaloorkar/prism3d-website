/* ════════════════════════════════════════
   CATALOGUE DATA
   Shared by index.html (embedded flipbook) and catalogue/index.html
   (standalone page). Edit products here — both pages update together.

   Add/remove/reorder products in PRODUCTS below; pages generate
   automatically, in this order.

   PHOTOS: drop files into catalogue/images/ named to match a product's
   position in the list below — 1.jpg for the 1st product, 2.jpg for the
   2nd, and so on. jpg, jpeg, png, and webp all work; if a numbered file
   isn't found, that page just shows a placeholder box instead.
   Reordering products means renumbering their photos to match.
════════════════════════════════════════ */
const WA_NUMBER = '918484080651';

const PRODUCTS = [
  { cat: 'Bobbleheads',  title: 'Custom Bobblehead',      desc: 'A hand-finished bobblehead sculpted in your likeness, printed layer by layer and painted by hand.', price: '₹899',  accent: '#0ea5e9' },
  { cat: 'Keychains',    title: 'Mini Planet Keychain',   desc: 'A pocket-sized solar system charm for your keys or bag, in durable, vividly coloured PLA+.',        price: '₹149',  accent: '#38bdf8' },
  { cat: 'Home Décor',   title: 'Faceted Bloom Vase',     desc: 'A geometric vase with a faceted silhouette — perfect for dried stems or as a standalone piece.',    price: '₹649',  accent: '#ec4899' },
  { cat: 'Trophies',     title: 'Achievement Trophy',     desc: 'A custom mini trophy for the win that deserves a shelf spot. Engrave any name or date.',            price: '₹399',  accent: '#fbbf24' },
  { cat: 'Toys',         title: 'Articulated Dragon',     desc: 'A flexible, print-in-place dragon that bends and poses right out of the printer, no assembly.',    price: '₹549',  accent: '#f9a8d4' },
  { cat: 'Home Décor',   title: 'Star Nightlight',        desc: 'A soft-glow star lamp for the bedside table — USB powered, warm white LED included.',              price: '₹799',  accent: '#0ea5e9' },
  { cat: 'Figurines',    title: 'Pet Portrait Figurine',  desc: "Turn your pet's photo into a miniature desk figurine, every detail hand-checked before shipping.", price: '₹1099', accent: '#38bdf8' },
  { cat: 'Accessories',  title: 'Custom Nameplate',       desc: 'A desk or door nameplate in your choice of font and colour combination.',                         price: '₹349',  accent: '#ec4899' },
];
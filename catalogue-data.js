/* ════════════════════════════════════════
   CATALOGUE DATA
   Shared by index.html (embedded grid) and catalogue/index.html
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
  { cat: 'Idol',        title: 'Chibi Hanuman Ji',                         desc: 'Bring devotion home with this beautifully crafted Bal Hanuman statue.',                                                     price: '₹150', accent: '#fbbf24' },
  { cat: 'Keychain',    title: 'Smiley Daisy Fidget Clicker Keychain',     desc: 'Bright, cheerful, and fun to use, this daisy keychain combines playful design with satisfying tactile clicks throughout the day.', price: '₹125', accent: '#f9a8d4' },
  { cat: 'Décor',       title: 'Custom Name Letter Display',               desc: 'Turn your name into décor with a personalized display piece that makes desks, shelves, and gifting occasions feel a little more special.', price: '₹135', accent: '#ec4899' },
  { cat: 'Idol',        title: 'Divine Krishna Idol',                      desc: 'Gracefully crafted Krishna statue, ideal for décor and gifting.',                                                            price: '₹200', accent: '#fbbf24' },
  { cat: 'Accessory',   title: 'Ergonomic Cable Winder',                   desc: 'Say goodbye to tangled charging cables — this compact winder keeps cords neatly organized and ready to use wherever you go.', price: '₹115', accent: '#0ea5e9' },
  { cat: 'Planter',     title: 'Hearty Pot — Cute Heart Hands Planter',    desc: 'Featuring adorable hands forming a heart around your plant, this planter adds warmth, personality, and a touch of whimsy to your greenery.', price: '₹390', accent: '#38bdf8' },
  { cat: 'Desk Décor',  title: 'Elegant Desktop Clock',                    desc: 'Designed to complement modern workspaces, this desktop clock keeps time beautifully while serving as a stylish desk accessory.', price: '₹249', accent: '#0ea5e9' },
  { cat: 'Lamp',        title: 'Cute Dog Lamp',                            desc: 'Part décor piece, part night light, the Cute Dog Lamp fills your room with a warm glow and a playful companion for your desk or bedside table.', price: '₹120', accent: '#f9a8d4' },
  { cat: 'Keychain',    title: 'Flexy Octopus Keychain — Fidget Toy',      desc: 'With flexible tentacles and a playful personality, this octopus keychain doubles as both a charming accessory and a fun fidget toy.', price: '₹100', accent: '#38bdf8' },
  { cat: 'Sculpture',   title: 'Seated Buddha Meditation Sculpture',       desc: 'Create a calm and peaceful atmosphere with this seated Buddha sculpture, thoughtfully designed to inspire mindfulness and reflection.', price: '₹115', accent: '#fbbf24' },
  { cat: 'Keychain',    title: 'Articulated Dog Keychain',                 desc: 'This movable dog keychain brings personality to your everyday carry with flexible joints and an irresistibly playful design.', price: '₹115', accent: '#ec4899' },
  { cat: 'Sculpture',   title: 'No Evil Trio — Decorative Art Sculpture',  desc: "A modern take on the timeless 'See No Evil, Hear No Evil, Speak No Evil' message, adding meaning, character, and conversation to any space.", price: '₹285', accent: '#0ea5e9' },
  { cat: 'Desk Décor',  title: 'Spinning Desk Organizer',                  desc: 'Keep your workspace tidy and your essentials within reach with a rotating organizer designed for both convenience and style.', price: '₹640', accent: '#38bdf8' },
  { cat: 'Keychain',    title: 'Custom Name Keychain',                     desc: 'Add a personal touch to your keys, bags, or gifts with a custom keychain made uniquely for you.',                              price: '₹60',  accent: '#f9a8d4' },
  { cat: 'Décor',       title: 'LED Tealight Table Décor',                 desc: 'Create a warm and inviting atmosphere with this LED tealight décor piece, designed to bring cozy ambient lighting to any setting.', price: '₹105', accent: '#ec4899' },
  { cat: 'Desk Décor',  title: 'Honeycomb Pencil Holder',                  desc: "Inspired by nature's perfect geometry, this honeycomb pencil holder keeps your stationery organized while adding texture and style to your workspace.", price: '₹170', accent: '#fbbf24' },
  { cat: 'Figurine',    title: 'Knitted Cat With Heart',                   desc: 'The Knitted Kitty with Heart captures the cozy charm of a handmade plush while offering the durability of a decorative keepsake.', price: '₹110', accent: '#0ea5e9' },
  { cat: 'Keychain',    title: 'Personalized Articulated Name Keychain',   desc: 'Show off your name in a fun and unique way with a personalized keychain that features movable articulated lettering.',        price: '₹65',  accent: '#38bdf8' },
  { cat: 'Vase',        title: 'Leaf Vase',                                desc: 'Inspired by the gentle curves of unfolding leaves, this vase adds a soft organic feel to living rooms, bedrooms, and workspaces alike.', price: '₹505', accent: '#f9a8d4' },
  { cat: 'Vase',        title: 'Aesthetic Flower Vase',                    desc: 'With its flowing silhouette and contemporary style, this vase effortlessly elevates fresh blooms, dried flowers, or minimalist interiors.', price: '₹260', accent: '#ec4899' },
  { cat: 'Home',        title: 'Artistic Towel Mount (Pack of 4)',         desc: 'Who says towel holders have to be boring? This artistic mount combines practicality with modern design, turning an everyday necessity into a decorative feature.', price: '₹180', accent: '#fbbf24' },
  { cat: 'Fidget Toy',  title: 'Baby Mushroom Clicker — Fidget Toy',       desc: 'Small enough for your pocket yet surprisingly satisfying, this mushroom clicker is perfect for relieving stress one click at a time.', price: '₹120', accent: '#0ea5e9' },
  { cat: 'Keychain',    title: 'Tic Tac Toe Keychain',                     desc: "Enjoy a quick game wherever you are with this pocket-sized Tic Tac Toe keychain that's equal parts accessory and entertainment.", price: '₹100', accent: '#38bdf8' },
  { cat: 'Vase',        title: 'Trunk Vase',                               desc: 'Bring a touch of the forest into your home with the Trunk Vase, a nature-inspired design that transforms ordinary flower arrangements into eye-catching displays.', price: '₹150', accent: '#f9a8d4' },
  { cat: 'Fidget Toy',  title: 'Hexagon Twist Fidget Toy',                 desc: 'Twist, fold, and transform this geometric puzzle into endless configurations while enjoying a satisfying hands-on fidget experience.', price: '₹150', accent: '#ec4899' },
  { cat: 'Fidget Toy',  title: 'Gyro Fidget Spinner',                      desc: 'Designed for smooth, satisfying spins, this fidget spinner is perfect for moments when you need to stay focused, relax, or simply keep your hands occupied.', price: '₹150', accent: '#fbbf24' },
  { cat: 'Fidget Toy',  title: 'Multi Gears Fidget Spinner',               desc: "Watch interconnected gears move in harmony as you spin this unique fidget toy, creating a mesmerizing experience that's difficult to put down.", price: '₹240', accent: '#0ea5e9' },
  { cat: 'Toy',         title: 'Cute Wobbly Penguin',                      desc: 'A gentle nudge is all it takes to bring this adorable penguin to life, making it a delightful companion for desks, shelves, and study tables.', price: '₹240', accent: '#38bdf8' },
];

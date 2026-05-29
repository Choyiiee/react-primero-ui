// Import your assets from the root of the assets folder
import berryCheeseImg from '../assets/berrycheese.jpg';
import irishCreamImg from '../assets/irishcream.jpg';
import javaJellyImg from '../assets/javajelly.jpg';
import latteImg from '../assets/latte.jpg';
import spanishLatteImg from '../assets/spanishlatte.jpg';

export const menuItems = [
  {
    id: 1,
    name: "Spanish Latte",
    category: "coffee",
    price: "₱165",
    description: "Our signature espresso balanced with sweet condensed milk and textured velvety steamed milk.",
    image: spanishLatteImg,
    tags: ["Signature", "Best Seller"]
  },
  {
    id: 2,
    name: "Classic Caffè Latte",
    category: "coffee",
    price: "₱145",
    description: "Rich, full-bodied espresso combined with perfectly micro-foamed milk.",
    image: latteImg,
    tags: ["Classic"]
  },
  {
    id: 3,
    name: "Irish Cream Cold Brew",
    category: "specialty",
    price: "₱175",
    description: "Slow-steeped cold brew coffee sweetened with Irish cream syrup, topped with a fluffy layer of vanilla sweet cream cold foam.",
    image: irishCreamImg,
    tags: ["Cold Foam", "Must Try"]
  },
  {
    id: 4,
    name: "Java Jelly Frappé",
    category: "specialty",
    price: "₱180",
    description: "A decadent blend of rich coffee, chocolate chips, and signature coffee jelly cubes, topped with whipped cream.",
    image: javaJellyImg,
    tags: ["Ice Blended"]
  },
  {
    id: 5,
    name: "Blueberry Cheesecake Slices",
    category: "pastries",
    price: "₱195",
    description: "A rich, creamy baked cheesecake topped with a sweet, tangy whole blueberry compote over a graham cracker crust.",
    image: berryCheeseImg,
    tags: ["Freshly Baked"]
  }
];

export const categories = [
  { id: 'all', label: 'Full Collection' },
  { id: 'coffee', label: 'Espresso Bar' },
  { id: 'specialty', label: 'Specialty Cold Brews' },
  { id: 'pastries', label: 'Artisanal Pastries' }
];
import latteImg from '../assets/latte.jpg';
import berryCheese from '../assets/berrycheese.jpg';
import irishCream from '../assets/irishcream.jpg';
import javaJelly from '../assets/javajelly.jpg';

export const menuItems = [
  { name: 'Spanish Latté', type: 'Ice/Hot', category: 'Latté', image: latteImg },
  { name: 'Berry Cheesecake', type: 'Ice', category: 'Frappes', image: berryCheese },
  { name: 'Irish Cream', type: 'Ice', category: 'Frappes', image: irishCream },
  { name: 'Triple Java Jelly', type: 'Ice', category: 'Frappes', image: javaJelly },
  { name: 'CEO Latté', type: 'Hot', category: 'Latté', image: latteImg }
];

export const duplicatedMenu = [...menuItems, ...menuItems, ...menuItems];
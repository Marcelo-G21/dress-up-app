// src/components/CategoryTabs.jsx
import topIcon from '../assets/icons/top.webp';
import bottomIcon from '../assets/icons/bottom.webp';
import shoesIcon from '../assets/icons/shoes.webp';
import outerwearIcon from '../assets/icons/outerwear.webp'; // ajusta la ruta si es diferente


const categories = [
  { key: 'outerwear', label: 'Outer', icon: outerwearIcon } ,
  { key: 'top', label: 'Top', icon: topIcon },
  { key: 'bottom', label: 'Bottom', icon: bottomIcon },
  { key: 'shoes', label: 'Shoes', icon: shoesIcon }
  // ← nueva pestaña
];


export default function CategoryTabs({ activeCategory, setActiveCategory }) {
  return (
    <div className="flex justify-center mt-4 space-x-6">
      {categories.map(({ key, icon }) => (
        <button
          key={key}
          onClick={() => setActiveCategory(key)}
          className={`p-2 rounded-full ${
            activeCategory === key ? 'bg-white bg-opacity-70' : 'opacity-50'
          }`}
        >
          <img src={icon} alt={key} className="w-8 h-8" />
        </button>
      ))}
    </div>
  );
}

import top1 from '../assets/clothes/top1.png';
import top2 from '../assets/clothes/top2.png';

import bottom1 from '../assets/clothes/bottom1.png';
import bottom2 from '../assets/clothes/bottom2.png';

import shoes1 from '../assets/clothes/shoes1.png';
import shoes2 from '../assets/clothes/shoes2.png';

import outerwear1 from '../assets/clothes/outerwear1.png';
import outerwear2 from '../assets/clothes/outerwear2.png';

const clothingOptions = {
  top: [top1, top2],
  bottom: [bottom1, bottom2],
  shoes: [shoes1, shoes2],
  outerwear: [outerwear1, outerwear2]
};


export { clothingOptions };

// Mapa de zoom por categoría
const zoomStyles = {
  top: 'transform scale-280 translate-y-8',
  bottom: 'transform scale-280 translate-y-2',
  shoes: 'transform scale-200 -translate-y-8',
  outerwear: 'transform scale-240 translate-y-6'
};



export default function ClothingOptions({ category, selectedClothing, setSelectedClothing }) {
  return (
    <div className="mt-4 flex justify-center space-x-4 overflow-x-auto px-2">
      {clothingOptions[category].map((item, index) => (
        <button
          key={index}
          onClick={() =>
            setSelectedClothing((prev) => ({
              ...prev,
              [category]: item
            }))
          }
          className={`w-16 h-16 aspect-square rounded-md border-2  ${
            selectedClothing[category] === item
              ? 'border-white'
              : 'border-transparent'
          }`}
        >
          <div className="w-full h-full overflow-hidden flex items-center justify-center">
          <img
            src={item}
            alt={`${category}-${index}`}
            className={`w-full h-full object-contain transition-transform duration-200 ${zoomStyles[category]}`}

          />
          </div>
        </button>
      ))}
    </div>
  );
}
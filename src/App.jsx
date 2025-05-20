import { useState } from 'react';
import base from './assets/base.png';
import background from './assets/backgrounds/bg1.jpg'; // tu fondo fijo

import CharacterDisplay from './components/CharacterDisplay';
import CategoryTabs from './components/CategoryTabs';
import ClothingOptions from './components/ClothingOptions';
import { clothingOptions } from './components/ClothingOptions';


export default function App() {
  const [activeCategory, setActiveCategory] = useState('top');
  const [selectedClothing, setSelectedClothing] = useState({
    top: clothingOptions.top[0],
    bottom: clothingOptions.bottom[0],
    shoes: clothingOptions.shoes[0],
    outerwear: clothingOptions.outerwear[0]
  });

  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative flex flex-col items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Personaje y ropa seleccionada */}
      <div className="flex justify-center items-center px-4">
        <CharacterDisplay
          characterImage={base}
          selectedClothing={selectedClothing}
        />
      </div>

      {/* Tabs para cambiar categoría (Top / Bottom / Shoes) */}
      <CategoryTabs
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Opciones de ropa de la categoría actual */}
      <ClothingOptions
        category={activeCategory}
        selectedClothing={selectedClothing}
        setSelectedClothing={setSelectedClothing}
      />
    </div>
  );
}

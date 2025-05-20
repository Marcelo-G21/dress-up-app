// src/components/CharacterDisplay.jsx
export default function CharacterDisplay({ characterImage, selectedClothing }) {
  return (
    <div className="relative h-[70vh] aspect-[3/4] mx-auto mt-4">
      <img
        src={characterImage}
        alt="Character"
        className="absolute top-0 left-0 w-full h-full object-contain z-10"
      />


{selectedClothing.bottom && (
        <img
          src={selectedClothing.bottom}
          alt="Bottom"
          className="absolute top-0 left-0 w-full h-full object-contain z-20"
        />
      )}
      
      {selectedClothing.top && (
        <img
          src={selectedClothing.top}
          alt="Top"
          className="absolute top-0 left-0 w-full h-full object-contain z-20"
        />
      )}

{selectedClothing.outerwear && (
  <img
    src={selectedClothing.outerwear}
    alt="Outerwear"
    className="absolute top-0 left-0 w-full h-full object-contain z-30"
  />
)}




      {selectedClothing.shoes && (
        <img
          src={selectedClothing.shoes}
          alt="Shoes"
          className="absolute top-0 left-0 w-full h-full object-contain z-15"
        />
      )}
    </div>
  );
}


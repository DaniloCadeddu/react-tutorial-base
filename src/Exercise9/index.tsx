/* 
Esercizio 9: Implementare una figura geometrica (possibilmente grande e visibile) che sparisce al solo click fuori dalla figura stessa.
*/

import { useEffect, useRef, useState } from "react";

export const ExerciseNine = () => {
  const figureRef = useRef<HTMLDivElement>(null);
  const [showFigure, setShowFigure] = useState(true);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [figureRef]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      figureRef.current &&
      !figureRef.current.contains(event.target as Node)
    ) {
      setShowFigure(false);
    }
  };

  return (
    <>
      {showFigure && (
        <div
          ref={figureRef}
          style={{ width: "200px", height: "200px", backgroundColor: "red" }}
        />
      )}
    </>
  );
};

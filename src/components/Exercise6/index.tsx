/* 
Esercizio 6: Implementare un bottone che permette di mostrare / nascondere una scritta in pagina, il bottone avrà la label "mostra" se il testo è nascosto, "nascondi" se il testo è in pagina
*/

import { useState } from "react";

export const ExerciseSix = () => {
  const [showText, setShowText] = useState(false);

  const labelButton = showText ? "Nascondi" : "Mostra";
  const toggleText = () => setShowText(!showText);

  return (
    <>
      {showText && <h1>Esercizio sei</h1>}
      <button onClick={toggleText}>{labelButton}</button>
    </>
  );
};

/* 
Esercizio 5: Implementare un input che in tempo reale stampa il digitato in pagina.
*/
import { useState } from "react";

export const ExerciseFive = () => {
  const [displayedText, setDisplayedText] = useState("");

  return (
    <>
      {displayedText}
      <br />
      <input
        value={displayedText}
        onChange={(e) => setDisplayedText(e.target.value)}
      />
    </>
  );
};

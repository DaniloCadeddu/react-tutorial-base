/* 
Esercizio 8: Riscrivere il componente dell'esercizio 6, ma questa volta il bottone è il componente figlio del componente principale
*/

import { useState } from "react";
import { Button } from "./Button";

export const ExerciseEigth = () => {
  const [showText, setShowText] = useState(false);

  const labelButton = showText ? "Nascondi" : "Mostra";
  const toggleText = () => setShowText(!showText);

  return (
    <>
      {showText && <h1>Esercizio otto</h1>}
      <Button onClick={toggleText} label={labelButton} />
    </>
  );
};

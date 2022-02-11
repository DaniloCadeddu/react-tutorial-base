/* 
Esercizio 4: Modificare il componente funzionale dell'esercizio 3 in modo che prenda il valore iniziare del counter dalle props.
 */

import { useState } from "react";

interface Props {
  initialValueCounter: number;
}

export const ExerciseFour = ({ initialValueCounter }: Props) => {
  const [counter, setCounter] = useState(initialValueCounter);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div>
      <button onClick={increment}>Incrementa</button>
      {counter}
      <button onClick={decrement}>Decrementa</button>
    </div>
  );
};

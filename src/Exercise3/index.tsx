/*
Esercizio 3: Implementare due bottoni "incrementa" e "decrementa" che incrementano e decrementano un contatore mostrato in pagina.
             Fare lo stesso esercizio sia con un componente classe che con uno funzionale (capire bene le differenze e perché evitare le classi).
*/

import { Component, useState } from "react";

interface State {
  counter: number;
}

export class ExerciseThreeWithClass extends Component<{}, State> {
  state = {
    counter: 0,
  };

  increment = () =>
    this.setState({
      counter: this.state.counter + 1,
    });

  decrement = () =>
    this.setState({
      counter: this.state.counter - 1,
    });

  render() {
    return (
      <div>
        <button onClick={this.increment}>Incrementa</button>
        {this.state.counter}
        <button onClick={this.decrement}>Decrementa</button>
      </div>
    );
  }
}

export const ExerciseThreeWithFunction = () => {
  const [counter, setCounter] = useState(0);

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

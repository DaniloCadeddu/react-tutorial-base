/* 
Esercizio 7: Prendere confidenza con il ciclo di vita di un componente semplicemente stampando dei log (usare le classi), usare il bottone (trasformare quindi il componente funzionale dell'esercizio 6 in un componente classe) dell'esercizio precedente per capire cosa succede quando cambia lo stato del componente.
*/

import { Component } from "react";

interface State {
  showText: boolean;
}

export class ExerciseSeven extends Component<{}, State> {
  state = {
    showText: false,
  };

  componentDidMount() {
    console.log("Component did mount");
  }
  
  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  toggleText = () => this.setState({ showText: !this.state.showText });

  render() {
    const labelButton = this.state.showText ? "Nascondi" : "Mostra";

    console.log("Render");
    return (
      <>
        {this.state.showText && <h1>Esercizio sette</h1>}
        <button onClick={this.toggleText}>{labelButton}</button>
      </>
    );
  }
}

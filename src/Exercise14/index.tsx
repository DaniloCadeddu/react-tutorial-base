/* 
Esercizio 14: Implementare un semplice counter simil esercizo 3 ma usare Redux per le azioni di incremento e decremento e salvare il counter sullo store. Vedi https://redux-toolkit.js.org/
*/

import { Provider } from "react-redux";
import { Counter } from "./Counter";
import { store } from "./redux/store";

export const ExerciseFourteen = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

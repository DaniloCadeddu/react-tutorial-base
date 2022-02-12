/* 
Esercizio 15: Prevedere un form di login (è preferibile utilizzare una REST API reale, al limite fare una mock) che fa una richiesta di tipo POST al server con username e password in request body, 
    se la login avviene con successo mandare l'utente alla url /admin dove viene mostrato in pagina il token JWT precedentemente salvato su Redux. Se le credenziale sono errate prevedere un messaggio di errore sopra il form.
    Proteggere il contentuto dalla pagina /admin se il token jwt non è salvato su Redux, mostrando quindi un messaggio di restrizione del contenuto.
*/

import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Admin } from "./Admin";
import { LoginForm } from "./LoginForm";
import { store } from "./redux/store";

export const ExerciseFifteen = () => {
  return (
    <Provider store={store}>
      <Router>
          <Routes>
            <Route path="/" element={<LoginForm />} />
          </Routes>
          <Routes>
            <Route path="/admin" element={<Admin />} />
          </Routes>
      </Router>
    </Provider>
  );
};

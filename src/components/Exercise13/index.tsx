/* 
Esercizio 13: A partire dall'esercizio precedente, prevedere un link alla url / che rimanda alla url /products mostrando il risultato dell'esercizio precedente. Vedi https://reactrouter.com/docs/en/v6/getting-started
*/

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ExerciseTwelve } from "../Exercise12";

export const ExerciseThirteen = () => {
  return (
    <Router>
      <Link to="/products">Products</Link>
      <Routes>
        <Route path="/products" element={<ExerciseTwelve />} />
      </Routes>
    </Router>
  );
};

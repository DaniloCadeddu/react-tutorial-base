/* 
Esercizio 10: Consumare la REST API https://jsonplaceholder.typicode.com/todos/1 e loggare il risultato in console.
*/

import { useEffect } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const ExerciseTen = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json as Todo));
  }, []);

  return <div />;
};

/* 
Esercizio 11: Replicare l'esercizio 10 ma questa volta stampando in pagina la proprietà "title" dell'oggetto di ritorno (ricordarsi che stiamo usando typescript, tipicizzare quindi il risultato).
*/

import { useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const ExerciseEleven = () => {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((todo) => setTodo(todo as Todo));
  }, []);

  return <>{todo ? <div>{todo.title}</div> : <div>Loading...</div>}</>;
};

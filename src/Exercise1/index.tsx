/* 
Esercizio 1: stampare in pagina i numeri da 1 a 10 in colonna
*/

export const ExerciseOne = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {numbers.map((n) => (
        <div key={n}>{n}</div>
      ))}
    </>
  );
};

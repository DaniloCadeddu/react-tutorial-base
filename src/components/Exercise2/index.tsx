/* 
Esercizio 2: Stampare in pagina i numeri PARI da 1 a 10 in colonna facendo ricevere al componente in input TUTTI i numeri interi da 1 a 10 come props.
*/

interface Props {
  numbers: number[];
}

export const ExerciseTwo = ({ numbers }: Props) => {
  const evenNumbers = numbers.filter((n) => n % 2 === 0);

  return (
    <>
      {evenNumbers.map((n) => (
        <div key={n}>{n}</div>
      ))}
    </>
  );
};

## Creare un'App React per tutti gli esercizi, strutturata in questo modo.

- ```npx create-react-app react-tutorial --template typescript```
- creare dentro la cartella src del progetto una cartella per ogni esercizio nominata "EsercizioX" dove X è il numero dell'esercizio in questione (questo è solo per fare in modo che le cartelle compaiano in ordine, non usare numeri in scenari reali)

1. Stampare in pagina i numeri da 1 a 10 in colonna.
2. Stampare in pagina i numeri PARI da 1 a 10 in colonna facendo ricevere al componente in input TUTTI i numeri interi da 1 a 10 come props.
3. Implementare due bottoni "incrementa" e "decrementa" che incrementano e decrementano un contatore mostrato in pagina.
   Fare lo stesso esercizio sia con un componente classe che con uno funzionale (capire bene le differenze e perché evitare le classi).
4. Modificare il componente funzionale dell'esercizio 3 in modo che prenda il valore iniziare del counter dalle props.
5. Implementare un input che in tempo reale stampa il digitato in pagina.
6. Implementare con un componente funzionale un bottone che permette di mostrare / nascondere una scritta in pagina, il bottone avrà la label "mostra" se il testo è nascosto, "nascondi" se il testo è in pagina.
7. Prendere confidenza con il ciclo di vita di un componente semplicemente stampando dei log (usare le classi), usare il bottone (trasformare quindi il componente funzionale dell'esercizio 6 in un componente classe) dell'esercizio precedente per capire cosa succede quando cambia lo stato del componente.
8. Riscrivere il componente dell'esercizio 6, ma questa volta il bottone è il componente figlio del componente principale.
9. Implementare una figura geometrica (possibilmente grande e visibile) che sparisce al solo click fuori dalla figura stessa.
10. Consumare la REST API https://jsonplaceholder.typicode.com/todos/1 e loggare il risultato in console.
11. Replicare l'esercizio 10 ma questa volta stampando in pagina la proprietà "title" dell'oggetto di ritorno (ricordarsi che stiamo usando typescript, tipicizzare quindi il risultato), occhio all'asincronia.
12. A partire dalla REST API https://fakestoreapi.com/products, mostrare a schermo delle card per ogni singolo prodotto (typescript necessario, css non necessario). Tip: iniziare a modulare un minimo.
13. A partire dall'esercizio precedente, prevedere un link alla url / che rimanda alla url /products mostrando il risultato dell'esercizio precedente. Vedi https://reactrouter.com/docs/en/v6/getting-started.
14. Implementare un semplice counter simil esercizo 3 ma usare Redux per le azioni di incremento e decremento e salvare il counter sullo store. Vedi https://redux-toolkit.js.org/.
15. Prevedere un form di login (è preferibile utilizzare una REST API reale, al limite fare una mock) che fa una richiesta di tipo POST al server con username e password in request body,
    se la login avviene con successo mandare l'utente alla url /admin dove viene mostrato in pagina il token JWT precedentemente salvato su Redux. Se le credenziale sono errate prevedere un messaggio di errore sopra il form.
    Proteggere il contentuto dalla pagina /admin se il token jwt non è salvato su Redux, mostrando quindi un messaggio di restrizione del contenuto.

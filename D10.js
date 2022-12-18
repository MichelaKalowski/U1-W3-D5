/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let numero1 = 10
let numero2 = 20
let sum = numero1 + numero2
console.log("esercizioA: " + sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21)
console.log("esercizioB :" + random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Michela",
  surname: "Kalowski",
  age: 32
};
console.log("esercizioC: " + JSON.stringify(me));



/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log("esercizioD: " + JSON.stringify(me));

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["html", "css", "javascript"];
console.log("esercizioE: " + JSON.stringify(me));


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("PHP")
console.log("esercizioF: " + JSON.stringify(me));

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop("PHP")
console.log("esercizioG: " + JSON.stringify(me));
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1
}
console.log("esercizio1 :" + dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/


function whoIsBigger(x, y) {
  return Math.min(x, y);

  //if (x < y) {return x;
  //}
  //else {return y;
  //}

}
console.log("esercizio2: " + whoIsBigger(10, 15));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]

*/
function splitMe(string1) {
  const arr = string1.split(" ");

  return arr;
}
console.log("esercizio3: " + splitMe("I love Epicode"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(string1, booleano1) {

  if (booleano1 === true) {
    return string1.substr(1)

  } else {
    return string1.slice(0, -1)

  }

}
console.log("esercizio4: " + deleteOne("Epicode", true));
console.log("esercizio4: " + deleteOne("Epicode", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(string1) {
  for (let i = 0; i <= 9; i++) {
    string1 = string1.replace(i, "")


  }
  return string1;

}
console.log("esercizio6 :" + onlyLetters("I have 1 brother and 5 dogs"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(string1) {
  let posizione1 = string1.indexOf("@")
  let posizione2 = string1.lastIndexOf(".")
  if (posizione1 < posizione2) {
    return true;
  } else {
    return false;

  }

}
console.log("esercizio6 :" + isThisAnEmail("mi.ky90@hotmail.com"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  let giorno = new Date().getDate()
  return giorno;
}
console.log("esercizio7: " + whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().
 
  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(numero) {
  let somma = 0
  let val = []
  for (let i = 0; i < numero; i++) {
    x = dice()
    somma += x
    val.push(x)

  }
  const ret = {
    sum: somma,
    values: val
  }
  return ret;
}

console.log("esercizio8: " + JSON.stringify(rollTheDices(6)));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(data) {
  let oggi = new Date()
  let diff = data.getTime() - oggi.getTime()
  diff = diff / (3600 * 24 * 1000)
  return diff;
}
console.log("esercizio9 :" + howManyDays(new Date("12/31/2022")));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(birthday) {
  let oggi = new Date()
  //console.log(oggi)
  let giornoOggi = String(oggi.getDate());
  let meseOggi = String(oggi.getMonth());
  let arrayData = birthday.split("/")
  let [giornoComple, meseComple] = arrayData
  //let giornoComple=arrayData[0]
  //let meseComple=arrayData[1]
  if (meseOggi === meseComple && giornoOggi === giornoComple) {
    console.log("è il mio compleanno")
  } else {
    console.log("non è il mio compleanno")
  }



}
isTodayMyBirthday("12/09/2023");

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
//const me = {
//name: "Michela",
//surname: "Kalowski",
//age: 32
//};
function deleteProp(me, string) {
  delete me[string]
  return me;

}
console.log("esercizio11 :" + JSON.stringify(deleteProp(me, "name")));

/* ESERCIZIO 12

  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(array) {
  let result = { Year: 1900 };
  for (let i = 0; i < array.lenght; i++) {
    let currentYear = parseInt(array[i].Year);
    if (currentYear > result.Year) {
      result = array[i];
    }
  }
  return result;
}
console.log("esercizio12 :" + JSON.stringify(newestMovie(movies)));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(array) {
  return array.length;
};

console.log("esercizio13: " + countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(array) {
  return array.map(elem => elem.Year);
};

console.log("esercizio14 :" + onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i].Year) <= 1999) {
      result.push(array[i]);
    }
  }
  return result;
};
console.log("esercizio15 :" + onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += parseInt(array[i].Year);
  }
  return result;
};
console.log("esercizio16: " + sumAllTheYears(movies))
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(string1, array) {
  let result = [];
  for (let i = 0; i < array.lenght; i++) {
    if (array[i].Title.indexOf(string1) >= 0) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log("esercizio17: " + JSON.stringify(searchByTitle("Lord", movies)));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(string1, array) {
  let match = [];
  let unmatch = [];
  for (let i = 0; array.lenght; i++) {
    if (array[i].Title.indexOf(string1) >= 0) {
      match.push(array[i]);
    } else { unmatch.push(array[i]) }
  }
  let obj = { "match": match, "unmatch": unmatch }
  return obj;
}
console.log("esercizio18: " + JSON.stringify(searchAndDivide("Lord", movies)));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(numero1, array) {
  return array.splice(numero1, 1);
}
console.log("esercizio19:" + JSON.stringify(removeIndex(3, movies)));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selectContainer = function () {
  const container = document.getElementById("id")
}
selectContainer();
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const selectTd = function () {
  constTd = document.querySelectorAll("td")
}
selectTd();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const selectorTd = function(){
  const allTd= document.querySelectorAll("td")
  allTd.forEach((innerText) => {
    console.log(innerText);
  })
}
selectorTd();
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const paintItRed = function () {
  const allLink = document.querySelectorAll("href")
  console.log(allLink);
  allLink.forEach((red) => {
    red.style.backgroundColor = "red"
  })


}
paintItRed();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addListId = function () {

  const ListId = document.querySelector("ul", "myList")

  const newList = document.createElement("li")
  newLi.innerText = "nuovoelemento"

  list.appendChild(newLi)
};
addListId();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const svuotaLista =function(){
  const ListaId =document.getElementById("myList").remove();
};
svuotaLista();


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addClassToTr = function () {
  const addTest = document.querySelectorAll("tr")
  addTest.classList.add("test")
};
addClassToTr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.
 
  Esempio:
  halfTree(3)
 
  *
  **
  ***
 
*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.
 
  Esempio:
  tree(3)
 
    *
   ***
  *****
 
*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */


// Pobieranie elementów
// W dzisiejszych czasach najwygodniej jest pobierać elementy za pomocą metod querySelector(selectorCss) i querySelectorAll(selectorCss).

// Obie te metody jako parametr wymagają podania w formie tekstu selektora CSS, który normalnie w CSS wskazywał by na dane elementy.

// Metoda querySelector() zwraca pierwszy pasujący element, lub null, gdy nic nie znajdzie.

//pobieramy pierwsze li listy ul
const li = document.querySelector("ul li");

const ul = document.querySelector("ul");
ul.style.background = "orange";
// ul.style.color = "#333";
// ul.style.color = "dark green"

const first = document.getElementById("first");
first.style.background = "blue";
first.style.color = "aqua";

const second = document.querySelector(".second");
second.style.background ="yellow";
second.style.color = "red";

// Pętle po kolekcjach
// Jeżeli pobieramy pojedynczy element za pomocą querySelector() lub getElementById(), od razu możemy zacząć na nim działać ustawiając mu tekst, style, czy inne właściwości, ale też pobierając w nim inne elementy.

const element = document.querySelector("strong");
element.style.color = "red"; //ustawiam kolor tekstu na czerwony

const element1 = document.querySelector(".moduł");
element1.style.color = "red";

const p = element.querySelector('p'); //pobieram w nim paragraf
p.innerText = "Tekst wygenerowany za pomocą innerText";

// Jeżeli jednak używamy metod do pobrania wielu elementów (np. querySelectorAll) w rezultacie dostajemy kolekcję elementów (nawet jeżeli elementów jest jeden lub wcale). Dla nas oznacza to tyle, że praktycznie zawsze będziemy musieli tutaj działać tak jak na tablicy z obiektami:

const elements = document.querySelectorAll(".moduł");
elements[0].style.color = "aqua";

// Konwertujemy kolekcję na typową tablicę za pomocą spread syntax lub Array.from():

const button = document.querySelectorAll("button");

[...button].map(el => el.style.color = "blue");


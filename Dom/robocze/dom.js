const ul = document.querySelector("ul");
ul.style.background = `hsl(${Math.random()*360}, 90%, 70%)`;
ul.style.color = "#333";
ul.style.color = "dark green"

const first = document.getElementById("first");
first.style.background = "blue";
first.style.color = "black";

const even = document.querySelector(".even");
even.style.background ="yellow";


// Pobieranie elementów
// W dzisiejszych czasach najwygodniej jest pobierać elementy za pomocą metod querySelector(selectorCss) i querySelectorAll(selectorCss).

// Obie te metody jako parametr wymagają podania w formie tekstu selektora CSS, który normalnie w CSS wskazywał by na dane elementy.

// Metoda querySelector() zwraca pierwszy pasujący element, lub null, gdy nic nie znajdzie.

//pobieramy pierwsze li listy ul
const li = document.querySelector("ul li");

// Pętle po kolekcjach
// Jeżeli pobieramy pojedynczy element za pomocą querySelector() lub getElementById(), od razu możemy zacząć na nim działać ustawiając mu tekst, style, czy inne właściwości, ale też pobierając w nim inne elementy.

const element = document.querySelector("div");
element.style.color = "red"; //ustawiam kolor tekstu na czerwony

const p = element.querySelector('p'); //pobieram w nim paragraf
p.innerText = "Przykładowy tekst";

// Jeżeli jednak używamy metod do pobrania wielu elementów (np. querySelectorAll) w rezultacie dostajemy kolekcję elementów (nawet jeżeli elementów jest jeden lub wcale). Dla nas oznacza to tyle, że praktycznie zawsze będziemy musieli tutaj działać tak jak na tablicy z obiektami:

const elements = document.querySelectorAll(".moduł_1");
elements[0].style.color = "aqua";

// Konwertujemy kolekcję na typową tablicę za pomocą spread syntax lub Array.from():

const button = document.querySelectorAll("button");

[...button].map(el => el.style.color = "purple");



//WŁAŚCIWOŚCI ELEMENTÓW

// Właściwość innerHTML umożliwia odczyt i ustawianie html, jaki jest we wnętrzu danego elementu:

const btn = document.querySelector(".button");
console.log( btn.innerHTML );

btn.innerHTML = "<span>Nie klikaj mnie!</span>"

const btn1 = document.getElementById("btn1");
console.log( btn1.innerHTML );

btn1.innerHTML = "<span>Kliknij mnie!</span>"

// Za pomocą innerHTML możemy oczywiście wstawiać całe kawałki dokumentu:

const btn2 = document.querySelector(".button");

btn2.addEventListener("click", () => {
    document.querySelector(".test-cnt").innerHTML = `
        <div class="module">
            <h2>Przykładowy tytuł</h2>
            <p>To jest <strong>dynamicznie wstawiony html</strong></p>
            <button class="button">klik</button>
        </div>
    `;
});

/*
// RELACJE MIĘDZY ELEMENTAMI

// Pisząc nasze skrypty powinniśmy starać się robić to w taki sposób, by były jak najbardziej uniwersalne. Sztywne poruszanie się po drzewie nie zawsze będzie najlepszym rozwiązaniem. Struktura HTML może się zmienić (np. wymagać będzie tego stylowanie), dlatego jeżeli dana sytuacja pozwala, zamiast wielu parentElement czy podobnych, o wiele lepiej użyć jednego closest() by złapać rodzica, i ewentualnie później wyszukiwać w takim elemencie za pomocą querySelector().

const btn = document.querySelector("button");
const module = btn.closest(".module");
const h2 = module.querySelector("h2");
const footer = module.querySelector("footer");
*/


// TWORZENIE ELEMENTU

// Aby utworzyć nowy element na stronie korzystamy z metody document.createElement(tagname). Po utworzeniu nowego elementu możemy na nim działać tak jakbyśmy go wcześniej pobrali za pomocą querySelector i innych metod, czyli obowiązują nas te same zasady co wcześniej. Taki element jest totalnie pusty, dlatego przed wstawieniem dodajmy mu kilka rzeczy:

const paragraf = document.createElement("div");
paragraf.innerText = "To jest dodany tekst";
document.body.appendChild(paragraf);
paragraf.style.color = "orange";


// WSTAWIANIE ELEMENTU DO HTML

// Utworzony w powyższy sposób element jest dostępny dla skryptu, ale nie ma go jeszcze w drzewie dokumentu. Musimy go tam wstawić.

// Możemy to zrobić na kilka sposobów.

// Dwie klasyczne metody to parentElement.appendChild(newElement) oraz parentElement.insertBefore(newElement, element).

// Ta pierwsza służy do wstawiania nowego elementu na koniec wybranego elementu:

let counter = 0;

const el = document.createElement("div");
el.classList.add("element");
el.style.background = `hsl(${Math.random()*360}, 90%, 70%)`;
el.style.color = "#333";
el.innerText = `Nowy ${++counter}`;

const div = document.querySelector(".test-cnt");
div.appendChild(el);

// Natomiast metoda parentElement.insertBefore(newElement, element) wstawia nowy element przed wskazany element:

let counter2 = 1;

const el1 = document.createElement("p");
el1.classList.add("element");
el1.style.background = `hsl(${Math.random()*360}, 90%, 70%)`;
el1.style.color = "#333";
el1.innerText = `Nowy ${++counter}`;

const div2 = document.querySelector(".test-cnt");
const strong = div2.querySelectorAll("strong")[1]; //pobieram 2 strong

div2.insertBefore(el1, strong);

// Tworzenie tekstu za pomocą createTextNode

// Html składa się głównie z 2 bytów: elementów html i tekstów (ale też np. atrybutów).

// Aby dodać tekst na stronę możemy używać właściwości innerText/textContent/innerHTML/outerHTML, ale też możemy utworzyć pojedynczy węzeł tekstowy za pomocą funkcji createTextNode:

const text = document.createTextNode("Lubię placki");
element.appendChild(text);


// USUWANIE ELEMENTÓW

// Element, który istnieje w drzewie dom, możemy z niego usunąć na kilka sposobów.
// Możemy tutaj skorzystać z parentElement.removeChild(element) lub element.remove() (gdy nie interesuje nas IE11):

const div3 = document.querySelector("div")
const el3 = div.querySelector("span");
const btn3 = document.querySelector(".przycisk");

btn3.addEventListener("click", () => {
    div.removeChild(el);

    //lub
    // el3.parentElement.removeChild(el);

    //lub najprościej
    // el3.remove();
});


// classList

// Po pierwsze możemy utworzyć odpowiednie klasy, a następnie aplikować je dla danych elementów. Aby zarządzać klasami css danego elementu użyjemy interfejsu element.classList, która udostępnia nam kilka metod:

// add(className)	dodawanie klasy lub kilku klas
// remove(className)	usuwanie klasy lub kilku klas
// toggle(className, *force)	przełączanie (jak nie ma to dodaje, jak jest to usuwa) klasy. Dodatkowy drugi parametr wymusza dodanie (jeżeli jest true) lub usunięcie (jeżeli jest false) klasy.
// contains(className)	sprawdza czy element ma taką klasę

el.classList.add("btn");
el.classList.add("btn", "btn-primary", "inna-klasa");
el.classList.remove("btn", "inna-klasa");
el.classList.toggle("btn"); //dodaję jak nie ma, usuwam jak już jest
el.classList.toggle("btn", true); //dodaję
el.classList.contains("btn"); //true bo powyżej dodałem tą klasę


// STYLE

// Kolejnym sposobem dodawania styli jest użycie właściwości style. Dzięki niej możemy ustawić ale i odczytać style inline nadane dla danego elementu.

btn.style.backgroundColor = "#4BA2EA";
btn.style.fontSize = "1.6rem";
btn.style.borderRadius = "3rem";
btn.style.color = "#F7F781";

console.log("Kolor przycisku to: ", btn.style.backgroundColor);
console.log("Kolor tekstu to: ", btn.style.color);
console.log("A wielkość tekstu to: ", btn.style.fontSize);

// Jeżeli chcielibyśmy ustawić kilka wartości na raz, możemy to zrobić korzystając z właściwości cssText:

btn1.style.cssText = `
    color: red;
    background: blue;
    padding: 10px;
`;


// setProperty() i getPropertyValue()
// Gdy wypiszesz sobie w konsoli debuggera właściwość element.style, zobaczysz, że udostępnia ona nam jeszcze kilka ciekawych rzeczy.

// Wśród nich są dwie metody:

// setProperty(propertyName, value, priority*)	służy do ustawiania stylowania. Ostatni opcjonalny parametr priority służy do ewentualnego dodania deklaracji !important. Najczęściej jest pomijany.
// getPropertyValue(property)	służy do pobierania stylowania

document.body.style.setProperty("background-color", "grey");
document.body.style.setProperty("font-size", "2vw");

// document.body.style.getProperty("background-color");
// document.body.style.getProperty("font-size");

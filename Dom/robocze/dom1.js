
// Pobieranie elementów
// W dzisiejszych czasach najwygodniej jest pobierać elementy za pomocą metod querySelector(selectorCss) i querySelectorAll(selectorCss).

// Obie te metody jako parametr wymagają podania w formie tekstu selektora CSS, który normalnie w CSS wskazywał by na dane elementy.

// Metoda querySelector() zwraca pierwszy pasujący element, lub null, gdy nic nie znajdzie.

//pobieramy pierwszy element .btn-primary
const btn = document.querySelector(".btn-primary");

//pobieramy pierwsze li listy ul
const li = document.querySelector("ul li");

//pobieram element, który ma id module
const module = document.querySelector("#module");

// Druga metoda querySelectorAll(selector) ma bardzo podobne działanie, z tą różnicą, że zwraca kolekcję elementów lub pustą kolekcję gdy nic nie znajdzie.

const buttons = document.querySelectorAll(".button");

for (const btn of buttons) {
    console.log(btn);
}

// Metody te możemy odpalić zarówno dla całego dokumentu, jak i dla każdego elementu z osobna. W tym drugim przypadku szukamy elementów wewnątrz danego elementu.

//w całym dokumencie
const buttons = document.querySelectorAll(".button");

//w .module
const module = document.querySelector(".module");
const buttons = module.querySelectorAll(".button");


// Pętle po kolekcjach
// Jeżeli pobieramy pojedynczy element za pomocą querySelector() lub getElementById(), od razu możemy zacząć na nim działać ustawiając mu tekst, style, czy inne właściwości, ale też pobierając w nim inne elementy.

const element = document.querySelector("div");
element.style.color = "red"; //ustawiam kolor tekstu na czerwony

const p = element.querySelector("p"); //pobieram w nim paragraf
p.innerText = "Przykładowy tekst";


// Jeżeli jednak używamy metod do pobrania wielu elementów (np. querySelectorAll) w rezultacie dostajemy kolekcję elementów (nawet jeżeli elementów jest jeden lub wcale). Dla nas oznacza to tyle, że praktycznie zawsze będziemy musieli tutaj działać tak jak na tablicy z obiektami:

const elements = document.querySelectorAll(".module");

elements.style.color = "red"; //błąd - bo to kolekcja

elements[0].style.color = "red"; //ok bo pierwszy element w kolekcji

//ok, bo robimy pętlę
for (const el of elements) {
    el.style.color = "red";
}

// Możemy to obejść, konwertując taką kolekcję na typową tablicę za pomocą spread syntax lub Array.from():

const button = document.querySelectorAll("button");

[...buttons].map(el => el.style.color = "red");


//WŁAŚCIWOŚCI ELEMENTÓW

// Właściwość innerHTML umożliwia odczyt i ustawianie html, jaki jest we wnętrzu danego elementu:



const btn = document.querySelector(".button");
console.log( btn.innerHTML ); //<span>Kliknij mnie</span>

btn.innerHTML = "<span>Nie klikaj mnie!</span>"


// Za pomocą innerHTML możemy oczywiście wstawiać całe kawałki dokumentu:

const btn = document.querySelector(".button");

btn.addEventListener("click", () => {
    document.querySelector(".test-cnt").innerHTML = `
        <div class="module">
            <h2>Przykładowy tytuł</h2>
            <p>To jest <strong>dynamicznie wstawiony html</strong></p>
            <button class="button">klik</button>
        </div>
    `;
});


// RELACJE MIĘDZY ELEMENTAMI

// Pisząc nasze skrypty powinniśmy starać się robić to w taki sposób, by były jak najbardziej uniwersalne. Sztywne poruszanie się po drzewie nie zawsze będzie najlepszym rozwiązaniem. Struktura HTML może się zmienić (np. wymagać będzie tego stylowanie), dlatego jeżeli dana sytuacja pozwala, zamiast wielu parentElement czy podobnych, o wiele lepiej użyć jednego closest() by złapać rodzica, i ewentualnie później wyszukiwać w takim elemencie za pomocą querySelector().

//zamiast
const btn = document.querySelector("button");
const h2 = btn.parentElement.parentElement.parentElement.previousElementSibling;
const footer = btn.parentElement.parentElement.parentElement.nextElementSibling;

//o wiele lepiej
const btn = document.querySelector("button");
const module = btn.closest(".module");
const h2 = module.querySelector("h2");
const footer = module.querySelector("footer");


// TWORZENIE ELEMENTU

// Aby utworzyć nowy element na stronie korzystamy z metody document.createElement(tagname). Po utworzeniu nowego elementu możemy na nim działać tak jakbyśmy go wcześniej pobrali za pomocą querySelector i innych metod, czyli obowiązują nas te same zasady co wcześniej. Taki element jest totalnie pusty, dlatego przed wstawieniem dodajmy mu kilka rzeczy:

const el = document.createElement("div");

let counter = 0;
el.classList.add("element");
el.style.background = `hsl(${Math.random()*360}, 90%, 70%)`;
el.style.color = "#333";
el.innerText = ++counter;

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

let counter = 0;

const el = document.createElement("div");
el.classList.add("element");
el.style.background = `hsl(${Math.random()*360}, 90%, 70%)`;
el.style.color = "#333";
el.innerText = `Nowy ${++counter}`;

const div = document.querySelector(".test-cnt");
const strong = div.querySelectorAll("strong")[1]; //pobieram 2 strong

div.insertBefore(el, strong);

// Tworzenie tekstu za pomocą createTextNode

// Html składa się głównie z 2 bytów: elementów html i tekstów (ale też np. atrybutów).

// Aby dodać tekst na stronę możemy używać właściwości innerText/textContent/innerHTML/outerHTML, ale też możemy utworzyć pojedynczy węzeł tekstowy za pomocą funkcji createTextNode:

const text = document.createTextNode("Lubię placki");
element.appendChild(text);

// Strong jest elementem. Słowo "Psy" jest węzłem tekstowym, tak samo jak słowo "fajne". Podobnie zresztą węzłem tekstowym jest słowo "są", które znajduje się w strong.

// Co gdybyśmy w powyższym przykładzie chcieli dynamicznie zmieniać słowa "Psy" i "fajne", ale równocześnie nie moglibyśmy dodać dodatkowych elementów dla użycia innerText? Dzięki temu, że utworzymy te węzły za pomocą createTextNode, bez problemu będziemy mogli się do nich odwoływać (to samo by było, gdybyśmy takie węzły pobrali za pomocą np. firstChild, nextSibling, previousSibling):

const p = document.querySelector("#testNodeText");
const btn = document.querySelector(".btn-textNodeTest");

const word1 = document.createTextNode("Psy"); //pierwsze słowo
p.append(word1);

p.append(" są "); //nie potrzebujemy tutaj referencji

const word2 = document.createTextNode("fajne"); //ostatnie słowo
p.append(word2);

btn.addEventListener("click", () => {
    console.dir(word1); //wypiszemy sobie by zobaczyć co możemy użyć
    word1.textContent = "Koty też";
    word2.textContent = "super!";
});

// USUWANIE ELEMENTÓW

// Element, który istnieje w drzewie dom, możemy z niego usunąć na kilka sposobów.
// Możemy tutaj skorzystać z parentElement.removeChild(element) lub element.remove() (gdy nie interesuje nas IE11):

const div = document.querySelector("div")
const el = div.querySelector("span");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    div.removeChild(el);

    //lub
    el.parentElement.removeChild(el);

    //lub najprościej
    el.remove();
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

el.style.cssText = `
    color: red;
    background: blue;
    padding: 10px;
`;

// setProperty() i getPropertyValue()
// Gdy wypiszesz sobie w konsoli debuggera właściwość element.style, zobaczysz, że udostępnia ona nam jeszcze kilka ciekawych rzeczy.

// Wśród nich są dwie metody:

// setProperty(propertyName, value, priority*)	służy do ustawiania stylowania. Ostatni opcjonalny parametr priority służy do ewentualnego dodania deklaracji !important. Najczęściej jest pomijany.
// getPropertyValue(property)	służy do pobierania stylowania

document.body.style.setProperty("background-color", "#4BA2EA");
document.body.style.setProperty("font-size", "1.5rem");

document.body.style.getProperty("background-color");
document.body.style.getProperty("font-size");

// Zastosowanie tych metod jak w powyższym kodzie jest raczej bez sensu, ponieważ właściwości takie możesz bez problemu ustawiać i pobierać za pomocą wcześniej pokazanej krótszej składni. Metody te mają jednak zastosowanie przy pracy ze zmiennymi css:

el.style.setProperty("--size", "1em");
el.style.getPropertyValue("--size"); //"1em"

// A jeżeli połączymy to z pobieraniem przeliczonych styli, zmienne takie stają się swoistą furtką, która może łączyć css z Javascriptem:

const size = getComputedStyle(element).getPropertyValue("--size");

element.setProperty("--size:", `{++size}`);
// TWORZENIE ELEMENTU

// Aby utworzyć nowy element na stronie korzystamy z metody document.createElement(tagname). Po utworzeniu nowego elementu możemy na nim działać tak jakbyśmy go wcześniej pobrali za pomocą querySelector i innych metod, czyli obowiązują nas te same zasady co wcześniej. Taki element jest totalnie pusty, dlatego przed wstawieniem dodajmy mu kilka rzeczy:

// const paragraf = document.createElement("div");
// paragraf.innerText = "To jest dodany tekst";
// document.body.appendChild(paragraf);
// paragraf.style.color = "orange";

document.getElementById("btn").addEventListener('click', addText);

function addText() {
    const paragraf = document.createElement("div");
    paragraf.innerText = "To jest dodany tekst";
    document.body.appendChild(paragraf);
    paragraf.style.color = "orange";
}

// Utworzony w powyższy sposób element jest dostępny dla skryptu, ale nie ma go jeszcze w drzewie dokumentu. Musimy go tam wstawić.

// Możemy to zrobić na kilka sposobów.

// Dwie klasyczne metody to parentElement.appendChild(newElement) oraz parentElement.insertBefore(newElement, element).

// Ta pierwsza służy do wstawiania nowego elementu na koniec wybranego elementu:

let counter = 0;

const el = document.createElement("div");
el.classList.add("element");
el.style.background = "pink";
el.style.color = "blue";
el.innerText = `Nowy ${++counter}`;

const div = document.querySelector(".miejsce_na_tekst");
div.appendChild(el);

// Natomiast metoda parentElement.insertBefore(newElement, element) wstawia nowy element przed wskazany element:

let counter2 = 1;

const el1 = document.createElement("p");
el1.classList.add("element");
el1.style.background = "purple";
el1.style.color = "white";
el1.innerText = `Nowy ${++counter}`;

const div2 = document.querySelector(".pusty");
const strong = div2.querySelectorAll("strong")[1]; //pobieram 2 strong

div2.insertBefore(el1, strong);

// Tworzenie tekstu za pomocą createTextNode

// Html składa się głównie z 2 bytów: elementów html i tekstów (ale też np. atrybutów).

// Aby dodać tekst na stronę możemy używać właściwości innerText/textContent/innerHTML/outerHTML, ale też możemy utworzyć pojedynczy węzeł tekstowy za pomocą funkcji createTextNode:

const p = document.getElementById("testNodeText");
const btn = document.querySelector(".btn-textNodeTest");

const word1 = document.createTextNode("Koty"); //pierwsze słowo
p.append(word1);

p.append(" są "); //nie potrzebujemy tutaj referencji

const word2 = document.createTextNode("fajne"); //ostatnie słowo
p.append(word2);

btn.addEventListener("click", () => {
    console.dir(word1); //wypiszemy sobie by zobaczyć co możemy użyć
    word1.textContent = "Pandy też";
    word2.textContent = "super!";
});

// Klonowanie elementów
// Za pomocą funkcji cloneNode(deep*) możemy wykonać kopię danego elementu.

// Dodatkowy atrybut deep oznacza, czy dany element ma być klonowany wraz ze swoimi dziećmi.

const el2 = document.querySelector(".to-clone");

const cloneEl1 = el2.cloneNode();
console.log(cloneEl1); //<div class="to-clone"></div>

const cloneEl2 = el2.cloneNode(true);
console.log(cloneEl2); //<div class="to-clone"><strong>Testowy</strong></div>

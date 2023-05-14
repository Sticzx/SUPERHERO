const p = document.querySelector("p#text");

//właściwości pobierające elementy html
p.parentElement //wskazuje na nadrzędny element - div.test-cnt
p.firstElementChild //pierwszy dziecko będące elementem
p.lastElementChild //ostatnie dziecko będące elementem
p.children //[strong, span] - kolekcja dzieci elementu
p.children[0] //pierwsze dziecko - to samo co firstElementChild
p.nextElementSibling //następny element z rodzeństwa
p.previousElementSibling //poprzedni element z rodzeństwa

//właściwości pobierające węzły
p.parentNode //wskazuje na nadrzędny węzeł
p.firstChild //pierwszy node - w naszym przypadku to tekst "Mała "
p.lastChild //ostatni node - "" - html jest sformatowany, wiec ostatnim nodem jest znak nowej linii
p.childNodes //kolekcja wszystkich dzieci nodów - nie tylko elementów [text, strong, text, span] -
p.childNodes[0] //"Mała"
p.nextSibling //następny węzeł z rodzeństwa
p.previousSibling //poprzedni węzeł z rodzeństwa

/*
const btn = document.querySelector(".button")
btn.addEventListener("click", () => {
    const module = btn.parentElement.parentElement.parentElement;
});

const btn1 = document.querySelector("button");
const module = btn.closest(".module1");
const h2 = module.querySelector("h2");
*/

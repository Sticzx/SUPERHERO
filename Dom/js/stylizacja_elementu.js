// STYLE

// Kolejnym sposobem dodawania styli jest użycie właściwości style. Dzięki niej możemy ustawić ale i odczytać style inline nadane dla danego elementu.

btn.style.backgroundColor = "#4BA2EA";
btn.style.fontSize = "1.6rem";
btn.style.borderRadius = "3rem";
btn.style.color = "#F7F781";

// console.log("Kolor przycisku to: ", btn.style.backgroundColor);
// console.log("Kolor tekstu to: ", btn.style.color);
// console.log("A wielkość tekstu to: ", btn.style.fontSize);

const div = document.querySelector("pusty");

btn.addEventListener('click', ()=> {
    const paragraf = document.createElement("p");
    paragraf.innerText = ("Kolor przycisku to: ", btn.style.backgroundColor);
    document.body.appendChild(paragraf);
    paragraf.style.color = "aqua";
});


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

document.body.style.getProperty("background-color");
document.body.style.getProperty("font-size");

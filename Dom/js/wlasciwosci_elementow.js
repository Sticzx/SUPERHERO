//WŁAŚCIWOŚCI ELEMENTÓW

// Właściwość innerHTML umożliwia odczyt i ustawianie html, jaki jest we wnętrzu danego elementu:

document.getElementById("but").addEventListener('click', noClick);

function noClick(){
but.innerHTML = "<span>Zostałem wciśnięty</span>"
}


// Za pomocą innerHTML możemy oczywiście wstawiać całe kawałki dokumentu:

document.getElementById('btn').addEventListener('click', zmiana);

function zmiana(){
    btn.innerHTML = "<span>Tekst został dodany</span>";
}

const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    document.querySelector(".pusty").innerHTML = `
        <div class="module">
            <h2>Dodany div</h2>
            <p>To jest <strong>dynamicznie wstawiony html</strong></p>
        </div>
    `;
});

const btn1 = document.querySelector(".btn");

// console.log(btn.innerHTML); //<span>Kliknij mnie</span>
btn1.innerText = "Nic nie robie";
btn1.textContent = "Nic nie robie"; 

// Właściwość tagName

// Tutaj dodajemy border do wszystkich elementów "strong"


// document.querySelector("dodaj_border").addEventListener('click', addBorder);

// function addBorder(){
const elements = document.querySelectorAll("body *");

for (const el of elements) {
    if (el.tagName === "STRONG") {
        el.style.border = "1px solid red";
    }
}
// }

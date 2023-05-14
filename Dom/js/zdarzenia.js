const btn = document.querySelector(".button");
let counter = 0;

function elementClick() {
    counter++;
    btn.innerText = `Klik numer ${counter}`;
    if (counter >= 5) {
        btn.removeEventListener("click", elementClick);
    }
}

btn.addEventListener("click", elementClick);

const element = document.getElementById("btn")

element.addEventListener("click", e => {
    console.log(e);
});

const input = document.querySelector("#keyTestEvent")
const div = document.querySelector("#keyTestEventShow");

input.addEventListener("keydown", e => {
    div.innerHTML = `
        e.key: <b>${e.key}</b><br>
        e.code: <b>${e.code}</b><br>
        e.keyCode: <b>${e.keyCode}</b>
    `;
});
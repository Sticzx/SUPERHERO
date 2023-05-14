// USUWANIE ELEMENTÓW

// Element, który istnieje w drzewie dom, możemy z niego usunąć na kilka sposobów.
// Możemy tutaj skorzystać z parentElement.removeChild(element) lub element.remove() (gdy nie interesuje nas IE11):

const div = document.querySelector("div")
const el = div.querySelector("span");
const btn = document.querySelector(".przycisk");

btn.addEventListener("click", () => {
    div.removeChild(el);
    btn.innerHTML = "Tekst został usunięty";

    //lub
    // el3.parentElement.removeChild(el);

    //lub najprościej
    // el3.remove();
});

const div2 = document.querySelector(".lorem");
const p = div2.querySelector("p");
const btn2 = document.getElementById("btn");

btn2.addEventListener('click', () => {
    div2.removeChild(p);
    btn2.innerHTML = "Lorem został usunięty";
});

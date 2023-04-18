//operator logiczny lub ||

const number1 = 2;
const number2 = 18;

if((number1 > 3) || (number2 <18)){
    console.log('jest ok');
}else{
    console.log('warunek nie spełniony');
}

//INKREMENTACJA I DEKRMENTACJA

//inkrementacja - zwiększenie

let num3 = 2;
num3++;
console.log(num3);

//dekrementacja - zmniejszenie

let num4 = 3;
num4--;
console.log(num4);

let num5 = 4;

const num6 = num5++;
console.log(num6);
//w tej sytuacji num5 nie zmienia wartości przy wypisaniu lecz w programie jego wartość wzrosła o 1

const num7 = ++num5;
console.log(num7);
//w tej sytuacji wartość zmiennej jest o 2 większa od bazowej, ponieważ wcześniej dodaliśmy jeden po wypisaniu a tutaj przed.
//TAK SAMO DZIAŁA Z MINUSEM

let num8 = 10;

const num9 = num8--;
console.log(num9);

const num10 = --num8;
console.log(num10);

//======================================================================
//INSTRUKCJE WARUNKOWE

//instrukcje warunkowe sluza do sprawdzania waruknow i podejmowania decyzji w programie zaleznych od podanych danych

//przykladowa instrukcja warunkowa if
const userName = "Izabela"

if(userName == "Izabela"){
    console.log("Imię się zgadza, można przejść dalej");
} else {
    console.log("Wypierdalaj");
}

//przykładowa instrukcja warunkowa switch

const color = "blue"

switch(color){
    case "blue":
        console.log("niebieski");
        break;
    case "green":
        console.log("zielony");
        break;
    case "red":
        console.log("czerwony");
        break;
    case "yellow":
        console.log("żółty");
        break;
}

//ZADANIE

const age = 17

if(age < 18){
    console.log("Nie możesz wejść na tą stronę");
} else {
    console.log("Jesteś niepełnoletni");
}

//======================================================================
//Pętle
//zasadą pętli jest powtarzanie zadań

//w jezyku JavaScript są 4 pętle
//while
//do while
//for
//foreach

//przyklad petli while

let number = 0;

while(number <10){
    number++;
    console.log(number);
}

//bez number++ w tej pętli 0 wypisało by się nieskonczenie wiele razy

//przyklad petli do while

let num = 0;

do {
    console.log(num);
    num++;
}
while(num < 10)

//roznica
//petla do while zawsze zrobi to co jest w srodku chociaz raz a petla while nie

for(let i = 25; i<=30; i++){
    if((i%2) === 0){
        continue;
    }
    console.log(i);
}

//ZADANIE 1
//wypisz liczby od 1 do 100

for(let x = 0; x <=100; x++){
    console.log(x);
}

//ZADANIE 2
//wypisz liczby od 5 do 50

let a = 4;

while (a < 50){
    a++;
    console.log(a);
}

//ZADANIE 3
//wypisz liczby podzielne przez 8 w zakresie od 1 do 100

for(let z = 0; z <=100; z++){
    if(z % 8){
        continue;
    }
    console.log(z);
}
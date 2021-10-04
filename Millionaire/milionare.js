let item = document.getElementsByClassName("item");
let question = document.getElementById("question");
let button = 0;
let arrayIndex = 0;
let prize = document.getElementsByClassName("prize");
let currentPrize = prize.length;
let array = [
    ["kolik je druhů průmkařů", 1, 5, 6, 3, false],
    ["kolik je knih pána prstenů", 6, 8, 7, 1, false],
    ["kolik hodin máme s Tillem", 4, 2, 6, 3, false],
    ["Kdo je ředitelem průmky ?", "Bohata", "Till", "Esh", "Růžiková", false],
    ["kolik je kol na ulici když je venku 30 stupňů ?", "co to je za otázku?", "vlak", "10 protože jsou venku 3 lidi", "žádné", false],
    ["Co je nejlepší hra ? 'SHEEEESH'", "ROBALX", "Lížu of kredence", "FortNight", "Minekamf", false],
    ["Komu se podařilo vyvolat v člověku hněv na povel ?", "Riot", "EpicGames", "Steam", "Ubisoft", false],
    ["Kolik je hodin", "teď", "15:00", "14:17", "25:68", false],
    ["Co je nejlepší operační systém ?", "Linux", "Windows", "MacOS", "Android", false],
    ["Proč si kluk nemohl koupit taryho oblečení ?", "Má málo peněz", "Tary to má prostě moc drahý", "Kdo by si kupoval Taryho oblečení ?", "Fakt nevim", false],
    ["V jakém jazyce je napsám tento projekt ?", "JavaScript", "Java", "C#", "C++", false],
    ["Proč je špatné očkování ?", "Není já chci rychlejší net", "Nechci čip", "Budu mí autismus po tom", "Hamáček je kosočtverec!!", false],
    ["Proč nosím brýle ?", "Abych nebyl slepej", "Abych si mohl číst knihy", "Protože je to swag", "Aby mi všichni mohly říkat Čyř očko", false],
    ["Koho volit v roce 2021 ?", "Volný blok", "ANO", "ČSSD", "SPD", false],
    ["Jakou Známku dostanu za tento projekt ?", 1, 5, 4, 2, false],
    ["Co je nejlepší animák ?", "Pokémon", "Digimon", "BeyBlade", "Boku no pico", false],
];
let randomArray = [];
const generateRandom = () => {
    while (randomArray.length < 4) {
        let r = Math.floor(Math.random() * 4) + 1;
        if (randomArray.indexOf(r) === -1) randomArray.push(r);
    }
}

const load = () => {
    generateRandom();
    arrayIndex = Math.floor(Math.random() * array.length);
    if (array[arrayIndex][5]) {
        arrayIndex = Math.floor(Math.random() * array.length);
    }
    question.innerText = array[arrayIndex][0];
    for (let i = 0; i < item.length; i++) {
        item[i].innerText = array[arrayIndex][randomArray[i]];
        item[i].value = array[arrayIndex][randomArray[i]];
    }
    if(currentPrize == 0){
        for (let i = 0; i < item.length; i++) {
            item[i].innerText = "";
        }
        question.innerText="Vyhrál jsi !";
        setTimeout("restart()",10000);
        prize[currentPrize].style.backgroundColor="Orange";
    }else if (currentPrize < prize.length) {
        prize[currentPrize].style.backgroundColor="Orange";
    }

}
const check = () => {
    switch (button) {
        case 1:
            if (item[0].value == array[arrayIndex][1]) {
                correctA();
            } else {
                incorrectA();
            }
            break;
        case 2:
            if (item[1].value == array[arrayIndex][1]) {
                correctA();
            } else {
                incorrectA();
            }
            break;
        case 3:
            if (item[2].value == array[arrayIndex][1]) {
                correctA();
            } else {
                incorrectA();
            }
            break;
        case 4:
            if (item[3].value == array[arrayIndex][1]) {
                correctA();
            } else {
                incorrectA();
            }
            break;

        default:
            break;
    }
}
const correctA = () => {
    randomArray = [];
    array[arrayIndex][5] = true;
    load();
    console.log("Correct")
    if(currentPrize>0){
        currentPrize--;
    }

}
const incorrectA = () => {
    question.innerText = "Prohrál jsi Nulo";
    setTimeout("restart()",10000);
}
const restart = () => {
    window.location.reload();

}

window.onload = load();

document.getElementById("1").onclick = () => {
    button = 1; 
    check()
};
document.getElementById("2").onclick = () => {
    button = 2; 
    check()
};
document.getElementById("3").onclick = () => {
    button = 3;
    check()
};
document.getElementById("4").onclick = () => {
    button = 4; 
    check()
};
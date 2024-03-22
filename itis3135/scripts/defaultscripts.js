document.getElementById("date").innerHTML = `<h3>Date: ${Date()}</h3>`;

function hamsterSpecies() {
    const x = ["Dward Roborovski (a very small breed)", "Campbels'Drarf Russian (very stubborn)",
        "Syrian (Golden) Hamster (very friendly)", "Dwarf Winter White Russian (white coat fur to help against predators in the wild!)", "Chinese Hamster (attention seeker!!)"];
    alert(x[getRandomInt(5)]);
}
function hamsterName() {
    let x = document.getElementById('hamstername').value;
    let y;
    if (isNaN(x)) {
        y = x + " is a beautiful name!! My hamster's name is cookie!"
    } else {
        y = "invalid input bro."
    }
    document.getElementById("hamsterresponse").innerHTML = y;
}
function randomHeadphones() {
    let x = ["Sony XM4 - personal favorties!", "Bose Headphones", "Apple Airpods",
        "Skull Crushers", "Sennheiser HD 800 S", "Audio Technica", "Walmart Brand, $1 wired earbuds..."];
    alert("Hmm... lets go with: " + x[getRandomInt(7)] + "!")
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function gname() {
    let y = document.getElementById('gname').value;
    document.getElementById('gnameresponse').innerHTML = y;
}
function favoriteNumber() {
    let z = ["no", "henagon", "digon", "trigon", "tetragon", "pentagon",
        "hexagon", "heptagon", "octagon", "enneagon", "decagon"];
    let x = document.getElementById('favoritenumber').value;
    let y;
    if (isNaN(x) || x > 10) {
        y = "invalid input bro."
    } else {
        y = "The name of the polygon with " + x + " sides is: " + z[x];
    }
    alert(y);
}
function nameFunction() {
    let x = document.getElementById('0feb18').value;
    let y;

    if (isNaN(x) == true) {
        y = "Enigmatic Hamster Enterprises welcomes you, " + x + "!";
    } else {
        y = "invalid input bud";
    }
    document.getElementById('feb18response').innerText = y;
}
function feelingToday() {
    let x = document.getElementById('1feb18').value;
    let y;
    if (isNaN(x) == true) {
        y = "We're glad you are doing " + x + "!";
    } else {
        y = "invalid input bud";
    }
    document.getElementById('1feb18response').innerHTML = y;
}
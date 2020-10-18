// cards array holds all cards
let card = document.getElementsByClassName("card");
let cards = [...card];

// deck of all cards in game
const deck = document.getElementById("card-deck");

// declaring move variable
let moves = 0;
let counter = document.querySelector(".moves");

// declare variables for star icons
const stars = document.querySelectorAll(".fa-star");
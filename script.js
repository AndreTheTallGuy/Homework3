// global arrays
var lowAlph = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var uppAlph = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var speChar = ["!", "@", "#", "$", "%", "^", "&", "*", "_"];
// global var for fx
var lA;
var uA;
var num;
var sC;
var possOpt = [];
var passLength = prompt(
  "How many characters would you like your password to have?"
);
// confirms and optionBuilder
function confirms() {
  lA = confirm("Would you like to add lowercase letters?");
  uA = confirm("Would you like to add uppercase letters?");
  num = confirm("Would you like to add numbers?");
  sC = confirm("Would you like to add special characters?");
  optionBuilder();
}
// concat or redirect to confirms
function optionBuilder() {
  if (lA || uA || num || sC) {
    if (lA) {
      possOpt = possOpt.concat(lowAlph);
    }
    if (uA) {
      possOpt = possOpt.concat(uppAlph);
    }
    if (num) {
      possOpt = possOpt.concat(numbers);
    }
    if (sC) {
      possOpt = possOpt.concat(speChar);
    }
    getString();
  } else {
    alert("Please make atleast one selection");
    confirms();
  }
}

function getString() {
  // assign a local variable to empty string
  var string = "";
  // for loop and concatenate random character to the local variable
  for (let i = 0; i < passLength; i++) {
    var rando = randomNumber();
    string += possOpt[rando];
  }
  //  use randomNumber fx to get a random value, which will be used as the index of the possOpt array
  // alert(string)
  var password = document.getElementById("pass");
  password.textContent = string;
  pass.appendChild(password);

  // fx for returning a random number between 0 and number of possible options
  function randomNumber() {
    return Math.floor(Math.random() * possOpt.length);
  }
}

// refreshes page on btn click
function refreshPage() {
  location.reload();
}

// working copy to clipboard
function copyPassword() {
  document.getElementById("pass").select();
  document.execCommand("Copy");
}

confirms();

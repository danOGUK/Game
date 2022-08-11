var spaceKills = 0;
var aluminium = 0;
var bullets = 1;

function randomAluminium() {
var rand =  Math.floor(Math.random() * (max - min)) + min;
aluminium = aluminium + rand;
document.getElementById("alumQty").innerHTML = aluminium;
}

function attackSpace() {
 spaceKills = spaceKills + bullets;
   document.getElementById("spaceKills").innerHTML = spaceKills;
  randomAluminium();
}


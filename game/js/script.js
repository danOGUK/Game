var spaceKills = 0;
var bullets = 1;

function attackSpace() {
 spaceKills = spaceKills + bullets;
   document.getElementById("spaceKills").innerHTML = spaceKills;
}

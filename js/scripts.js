let dieRoll = 0;
const d4 = 4;
const d6 = 6;
const d8 = 8;
const d10 = 10;
const d20 = 20;

function rollDie() {
  dieRoll = Math.floor(Math.random() * 6 +1);
  alert(dieRoll);
}

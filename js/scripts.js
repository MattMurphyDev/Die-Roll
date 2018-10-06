var dieRoll = 0;

function rollDie() {
  dieRoll = Math.floor(Math.random() * 6 +1);
}

for (var i = 0; i < 5; i += 1) {
  rollDie();
  document.write(dieRoll);
}

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 3 Uzduotis

let q = 0;

while (q < 1) {
  let a = rand(0, 1);
  console.log(a);
  if (a === 0) document.getElementById("game").innerText = "Herb: " + "H";
  if (a === 1) document.getElementById("game").innerText = "Number: " + "S";

  q++;
}

// PIRMAS SCENARIO

//while (q < 1) {
//let a = rand(0, 1);
//console.log(a);
//if (a === 0) document.getElementById("game").innerText = ("Herb: " + "H");
//break;
//if (a === 1) document.getElementById("game").innerText = ("Number: " + "S");
//q++;}

// ANTRAS SCENARIO

//let c = 0;

//while (true) {
//let a = rand(0, 1);
//console.log(a);
//if (a === 0) {
//c++;
//document.getElementById("game").innerText = ("Herb: " + "H");
//} else {
//document.getElementById("game").innerText = ("Number: " + "S");}
//if (c === 3) {
//document.getElementById("game").innerText = ("STOP");
//console.log(c);break;}}

// TRECIAS SCENARIO

//let d = 0;

//while (true) {
//let a = rand(0, 1);
//console.log(a);
//if (a === 0) {
// d++;
//  document.getElementById("game").innerText = ("Herb: " + "H");
//} else {
// d = 0;
// document.getElementById("game").innerText = ("Number: " + "S");}
// if (d === 3) {
// document.getElementById("game").innerText = ("STOP"); break;}}

// 4 Uzduotis

let kaz = 0;
let pet = 0;

while (kaz < 222 && pet < 222) {
  let kScore = rand(5, 25);
  let pScore = rand(10, 20);
  console.log("Kazys: " + kScore);
  console.log("Petras: " + pScore);
  kaz += kScore;
  pet += pScore;

  document.write("Kazys: ", kaz, "Petras: ", pet);

  if (kaz >= 222 || pet >= 222) {
    let win = kaz > pet ? "Kazys" : "Petras";
    document.getElementById("winner").innerText = "Partiją laimėjo: " + win;
  }
}

// 5 Uzduotis
// a

rez = 0;

for (let i = 0; i < 5; i++) {
  let lowHeat = 0;
  let sum = 0;

  while (sum < 85) {
    let low = rand(5, 20);

    sum += low;
    lowHeat++;

    if (sum >= 85) {
      rez += lowHeat;
      break;
    }
  }
}

console.log("Mažu smūgių : " + rez);

// b

res = 0;

for (let i = 0; i < 5; i++) {
  let strongHeat = 0;
  let total = 0;

  while (true) {
    let e = rand(0, 1);
    let strong = rand(20, 30);

    strongHeat++;

    if (e === 1) {
      total += strong;

      if (total >= 85) {
        res += strongHeat;

        break;
      }
    }
  }
}

document.getElementById("zwek").innerHTML = `Dideliu smūgių:  ${res}`;


// 6 Uzduotis

















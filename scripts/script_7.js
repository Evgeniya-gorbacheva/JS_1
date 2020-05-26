let S = 2000000;
let p = 0.1;
let years = 60;
let Pereplata = years * (S * (0.1/12) * (1+0.1/12) ** years / ((1+0.1/12) ** years - 1)) - S ;
console.log(Pereplata);

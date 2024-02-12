console.log("<== Operator Logika ==>");

// operator logika > && = dan, || = atau, ! = kebalikan

// operator &&
// true && true = true
// true && false = false
// false && true = false
// false && false = false


// operator ||
// true || true = true
// true || false = true
// false || true = true
// false || false = false


// operator !
// !true = false
// !false = true

let nilaiUjian = 70;
let nilaiHarian = 80;

let lulusUjian = nilaiUjian > 75;
let lulusHarian = nilaiHarian > 75;

let lulus = lulusUjian && lulusHarian;
console.log(lulus);
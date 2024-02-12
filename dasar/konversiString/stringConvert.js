console.log("<== Kenversi String ==>");

// parseInt(String) => mengkonversi string menjadi bilangan bulat 
// parseFloat(String) => mengkonversi string menjadi bilangan pecahan
// Number(String) => mengkonversi string menjadi number
// number.toString() => mengkonversi number ke string

let value1 = "2";
let value2 = 3;

console.log("+-- parseInt --+");
const result = parseInt(value1) + value2;
console.log(result);

// NaN
// Bukan Number
console.log("+-- NaN --+");
const test = parseInt("Salah");
console.log(test); //maka akan bernilai NaN
// jika dioperasikan dengan number misal => NaN + number = NaN


// isNaN()
// mengecek NaN
console.log("+-- isNaN() --+");
console.log(isNaN(test)); //true
console.log(isNaN(value2)); //false
console.log("<== Array ==>");

let arrayKosong = [];
let arrayNama = ["Muhammad", "Dzaky", "Ahnaf"];

// menambah data array
const nama = [];
nama.push("Jek", "Ahnaf");
console.log(nama);
// console.table(nama);


// Operasi di array : 
// +=============================================================================+
// | array.push(value)      | menambah data ke dalam array                       |
// | array.length           | mendapatkan panjang array                          |
// | array[index]           | mendapat data dari posisi index                    |
// | array[index] = value   | mengubah data di posisi index                      |
// | delete array[index]    | menghapus data di index, namun data tidak bergeser |
// +=============================================================================+

console.log(nama.length);

// note
// 1. data dalam array javascript dapat digabung
// 2. dapat memasukkan array ke dalam array

nama.push(["Dian", "Putri"]) // array dalam array
console.table(nama);
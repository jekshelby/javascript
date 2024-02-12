console.log("<== String Tamplate ==>");

const nama = "Muhammad DzaKy Ahnaf";
const kelas = "2B";

// mengeksekusi
const biodata = `Nama saya ${nama} kelas ${kelas}`; //menggunakan back tick `` bukan petik satu ''
//mengambil variabel nama dengan string template, ${...}

// menambah ekspresi dan multiline string
const nilai = 90;
const penilaian = `Nama : ${nama}
Lulus : ${nilai > 80}` // multiline string hanya dengan enter, dan ekspresi nilai > 80

console.log("+-- Hasil Satu --+");
console.log(biodata);

console.log("+-- Hasil Dua --+");
console.log(penilaian);
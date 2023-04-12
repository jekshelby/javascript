console.log("looping for");
for (let i = 0; i < 5; i++) {
    console.log(i+1);
  }
  
console.log("looping while");
let z = 0
while ( z < 5 ) {
    console.log(z+1)
    z++;
}

console.log("looping do while");
let k = 0;
do {
    console.log(k+1);
    k++;
}while ( k < 5 );

console.log("looping for in");
const f = [1, 2, 3];
for (let key of f) {
  console.log(key);
}
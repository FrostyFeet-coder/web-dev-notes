console.log(process.argv);
let a = process.argv.pop()
// console.log(a);

// for (let a = 0; a < 15; a++) {
//     console.log(a);
// }

console.log(process.argv.slice(2));
let arrr = process.argv.slice(2);

for (let item of arrr) {
    console.log(item);
}
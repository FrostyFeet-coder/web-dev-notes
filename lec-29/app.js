// // const person = {
// //   first: "ansh",
// //   last: "wasan",
// // };
// // console.log(person);

// // delete person.first;
// // console.log(person);
// arr1 = [10, 20, 30];
// arr2 = [40, 50, 60];
// arr3 = [70, 80];
// console.log(arr1.concat(arr2, arr3));

// let nums = [...arr1, ...arr2];

// console.log(nums);

// // case - 2 object

// obj = {
//   first: "ansh",
//   last: "wasan",
// };

// obj1 = {
//   ...obj,
//   age: 21,
// };

// console.log(obj);
// console.log(obj1);

// function ans(a,b,c,...num)
// {
//     console.log(a, b, c);
//     console.log(num);
//     console.log(arguments);
// }

// ans(10,20,30,40,50,60,70)

// // destructuring
// fruits = ["mango ", "apple", "cheeku", "sasd"];
// let [first, second, third, fourth] = fruits;

// console.log(first, second, third, fourth);

// let [first, second, third, fourth , fifth = "alphonso"] = fruits;
// let [first, second, third,  , fifth = "alphonso"] = fruits;
// let [first, second, third, fifth = "alphonso"] = fruits;

// object destructruing

// let car = {
//   name: "bm-babblloo",
//   price: 100,
// };

let obj = {
  a: 10,
  b: 20,
  c: 30,
};

let { c } = obj;
console.log(c);

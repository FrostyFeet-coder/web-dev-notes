// reusable
// DRY-> DO NOT REPEAT YOURSELF (WET-> WRITE EVERYTHING TWICE )


// function defination
// function ansh() {
//     console.log("beep boop beep");
// }

// // function call
// ansh();

// function sum() {
//     let a = 20
//     let b = 10.1
//     console.log(a+b);
// }
// sum();

// function sum(a, b) {

// console.log(a+b);
// }

// sum(20, 30);
// sum("ansh", "asd");
// sum(90 , 101);


// function sum(a, b) { anwer will be NAN coz undefined me kuch bhi + karo toh 0
// console.log(a+b);
// }

// sum(20);


function sum(a, b=null) { // ans will be 20 cozz null mean kuch nhi which in case can be assumed as 0
  console.log(a + b);
}

sum(20);
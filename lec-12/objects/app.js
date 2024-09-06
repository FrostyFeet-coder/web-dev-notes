
// //object
// let person = {
//     //properties = key:value
//     naam : "ansh",
//     age: 19,
//     favcolor: "white",
//     ismale :true
// }

// console.log(person);

// console.log(person.favcolor);
// console.log(person.ismale);
// console.log(person.naam)

// -------------------------------------------------------


// let dog = {
//     breed: "pitbull",
//     isTail: true,
//     legs: 5,
//     color: "black"
// }
// //dot
// console.log(dog.breed)
// // square braces
// // coonsole.log(dog[breed])
// console.log(dog["breed"]);

// -------------------------------------------------


// let course = {
//     naam:"webd dev",
//     isClassroom: true,
//     isOngoing: function pdhai() {
//         // console.log("haan class chl rhi hai ");
//         // console.log(`haan ${course.naam} class abhi chl rhi hai`);
//         console.log(`haan ${this.naam} class abhi chl rhi hai`);
//         // return 'covid is back ';
// }
// }


// console.log(course.naam);
// console.log(course.isClassroom);
// console.log(course.isOngoing);
// console.log(course.isOngoing());

// -------------------------------------------------

function greeting(user) {
    console.log(` hi and welcome from ${user.naam} and pls ${user.wish}`);
}

let person = {
    naam: "ansh",
    wish : "have a good day"
}

greeting(person);
// console.log(greeting(person));
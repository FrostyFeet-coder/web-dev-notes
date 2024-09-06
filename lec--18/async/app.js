
// console.log('my journet start');

// setTimeout((/*call back function*/   ) => {
//     console.log('my journey took 4 sec');
    
//     setTimeout(() => {
//         console.log("my journey took 6 sec");
//     }, 2 * 1000);
    
// }, 4* 1000);


// //or

// function step1(fn) {
//     setTimeout(function () {
//         console.log('after 4 sec');
//         fn();
//     } , 4000)
// }

// function step2() {
//     setTimeout(function () {
//             console.log(`after 2 more sec`);
//         }, 2000)
// }

// step1(function () {
//     step2();
// })

//------------------------------------------
// function selectimage(fn) {
//     setTimeout(function() {
//         console.log(`selecting image`);
//         fn()
//     }, 1);
// }

// function filter(fn) {
//     setTimeout(() => {
//         console.log(`selecting filter`);
//         fn()
//     }, 2000);
// }




function step1(fn) {
  console.log("i am searching a image...");
  setTimeout(function () {
    console.log("Image Selected");
    fn("selected image");
  }, 4000);
}

function step2(image, fn) {
  console.log(`i am applying filter ${image}`);
  setTimeout(function () {
    console.log("Filter Applied");
    fn("filtered image");
  }, 2000);
}

function step3(filter, fn) {
  console.log(`i am adding caption to ${filter}...`);
  setTimeout(function () {
    console.log("Caption added");
    fn("added caption");
  }, 5000);
}

function step4(caption) {
  console.log(`i am uploading image with ${caption}`);
  setTimeout(function () {
    console.log("Image uploded");
  }, 4000);
}

step1(function (image) {
  step2(image, function (filter) {
    step3(filter, function (caption) {
      step4(caption);
    });
  });
});













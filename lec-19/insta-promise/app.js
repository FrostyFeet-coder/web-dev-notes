// let p = new Promise( function (resolve , reject) {
//     let data = ` hello from api`;
//     let error = ` error aayega`
//     reject(error)
// })

// p
//     .then(function (data) {
//         console.log(data);
// })
//     .catch(function (error) {
//     console.log(`error`);
// });

//-----------------------------------------
// let p = new Promise((resolve, reject) =>
// {
//    let a = setTimeout(() => {
//         let data = 'selecting photo';
//     }, 4000);
//     resolve(a)
// })

// p.
//     then(function (a) {
//         console.log(a);
//     })

//-----------------------------------------------
let step1 = function () {
   return new Promise((resolve, reject) => {
       console.log(`selecting image from gallery`);
       setTimeout(() => {
        resolve("selected image")
       }, 4000);
    })
}
//way -1
// step1().then(function (image) {
//     console.log(image);
//     step2().then(function (xyz) {
//             console.log(xyz);
//         })
// });


//way-2
step1()
    .then(function (image) {
        console.log(image);
        return step2()
    })
    
    .then(function (filter) {
        console.log(filter);
        return step3()
    })

    .then(function (caption) {
        console.log(caption);
        return step4()
    })
    .then(function (upload) {
        console.log(upload);
    })




let step2 = function () {
    return new Promise((resolve, reject) => {
        console.log(`selecting filter `);
        setTimeout(() => {
            resolve(`filter applied`)
        }, 2000);
    })
}

let step3 = function () {
  return new Promise((resolve, reject) => {
    console.log(`selecting caption `);
    setTimeout(() => {
      resolve(`caption applied `);
    }, 5000);
  });
};

let step4 = function () {
  return new Promise((resolve, reject) => {
    console.log(`uploading image `);
    setTimeout(() => {
      resolve(`image uploaded `);
    }, 3000);
  });
};
// // ffunctional invocation

// // abc = () => {
// //     console.log(this);
// // }

// // abc();

// // method invocation

// // let obj = {
// //     a: 10,
// //     b: 20,
// //     fn: function(){
// //         console.log(this);
// //     }
// // }

// // obj.fn();
// // let bro = obj.fn; //convert it into functional invocation from method invocation as bro kissi par depend nhi hai
// // bro();


// // let obj = {
// //     a: 10,
// //     fn: function () {
// //         function ans() {
// //             console.log(this);
// //         }
// //         ans();
// //     }
// // }

// // obj.fn();


// // constructor invocation

// // function fun() {
// //     console.log(this);
// // }

// // let fun1 = new fun();


// let oobj1 = {
//     a: 100,
//     fn: function (a, b, c) {
//         console.log(this ,a ,b ,c);
//     }
// }

// let obj2 = {
//     a:20
// }

// oobj1.fn(10, 20, 30)

// // 1. call-> polymorphism
// oobj1.fn.call(obj2, 100, 200, 300) 1st way
// // oobj1.fn.apply(obj2, [100, 200, 300]); 2nd way

// function an() {
//     console.log(this);
// }

// let f4 = fun.bind(100); // bind makes copy rather than calling or executing
// f4()



let obj1 = {
    a: 10,
    fn: () => {
        let sam = () => {
            console.log(this);
        }
        sam()
    }
}

let obj = {
    a: 10, 
    fn: function () {
        let sam = () => {
            console.log(this);
        }
        sam()
    }
}

obj.fn();
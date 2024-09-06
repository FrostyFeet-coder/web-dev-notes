// // https://api.tvmaze.com/search/shows?q=girls

// // 1.XMLHttpRequest ->

// let req = new XMLHttpRequest();
// console.log(req);

// req.open("GET", "https://api.tvmaze.com/search/shows?q=girls");

// req.send()

// req.onerror = function () {};
// req.onload = function () { };

// // console.log(req);

// req.onerror = function (response) {
//     console.log(response, "error");

// }

// req.onload = function (response) {
//     console.log(this.response, "sam2");
// // }

//  2.fetch
// // https://api.tvmaze.com/search/shows?q=girls
// fetch("https://api.tvmaze.com/search/shows?q=girls")
//     .then(function (res) {
//         return res.json()
        
//     })
//     .then(function (data) {
//     console.log("poora");
//     })
//     .catch(function (err) {
//     console.log(err);
// })

// 3.axios

axios.get("https://api.tvmaze.com/search/shows?q=girls")
    .then((res) => {
    console.log(res.data);
    
}).catch((err) => {
    console.log(err);
});
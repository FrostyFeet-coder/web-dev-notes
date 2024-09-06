let p = new Promise(function (resolve , reject) {
    let data = `10 rupee`
    let error = `mai nhi dunga`
    reject(error)
})

p
.then(function (d) {
    console.log(d);
})

.catch(function (err) {
    console.log(err);
    
})

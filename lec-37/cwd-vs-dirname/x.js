// console.log(process.cwd());
// console.log(__dirname);

let n = process.argv.pop()

let cnt3 = 1
let cnt5 =1


for (let i = 1; i<= 23; i++){
    let str= ""
    
    if (cnt3 ==3) {
        str += "fizz"
        cnt3 =0
    }
    if (cnt5 ==5 ) {
        str += "buzz"
        cnt5=0
    }

    if(str=="") {
        str += i
    }
    cnt3++
    cnt5++
    console.log(str);
}
let inpEl = document.querySelector("#inp")
let buttons = document.querySelectorAll("button");

for (let btn of buttons) {
    btn.addEventListener("click", function (){
    let btnText = btn.innerText;
    });
    if (btnText === "AC") {
        inpEl.value = ""
    } else if (btnText === "=") {
        inpEl.value = eval(inpEl.value);
    } else {
        inpEl.value += btnText;
    }
}

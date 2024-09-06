let btn = document.querySelector('button')
let inputElement = document.querySelector('#inp')
let listEl = document.querySelector('#list')

btn.addEventListener('click', function (e) {
    let inpText = inputElement.value
    let li = document.createElement("li")

    li.innerText = inpText

    console.log(li.innerText);
    
    if (li.innerText !== "") {
        listEl.append(li);
    }

    inputElement.value = ""

    li.addEventListener('click', function (e) {
        li.remove()
    })
})


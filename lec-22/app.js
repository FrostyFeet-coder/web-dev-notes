let formel = document.querySelector('form')

formel.addEventListener('submit' ,function (e) {
    e.preventDefault()
    console.log('form submit hogya');
    console.log(e.target);
    console.log(e.target.children[1]);
    console.log(e.target.elements[1]); //more oftenly used
})
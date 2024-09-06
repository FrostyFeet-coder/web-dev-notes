let arr = [
  `https://plus.unsplash.com/premium_photo-1675147924852-69f8060a9acc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8`,
  `https://images.unsplash.com/photo-1682687982183-c2937a74257c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8`,
  `https://images.unsplash.com/photo-1705103325780-0bd586187adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8`,
  `https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c291cmNlfGVufDB8fDB8fHww`,
];

let img = document.querySelector(`img`);
let n = 0;

id =setInterval(() => {
  img.setAttribute(`src`, arr[n]);
  n = (n + 1) % arr.length;
}, 2000);

setTimeout(() => {
    clearInterval(id)
}, 30000);
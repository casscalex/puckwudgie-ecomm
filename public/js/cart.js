var cartBtns = document.querySelectorAll('.store');
const btns = Array.from('cartBtns');
var myShoes = [];

console.log(btns);

function saveLocalStorage(item) {
    console.log(item);
    var myShoes = JSON.parse(localStorage.getItem("myShoes")) || [];
    if (!myShoes.includes(item)) {
      myShoes.push(item);
    }
    localStorage.setItem("myShoes", JSON.stringify(myShoes));
  }

// addEventListener('click', function{

// })

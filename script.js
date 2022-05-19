const input = document.querySelector(".input");
const keys = document.querySelectorAll(".key"); 

let activeButton = null;

function showKey(event) {
  for (let i = 0; i < keys.length; i++) {
    if (event.keyCode == keys[i].value) {
      keys[i].classList.add("active");
      activeButton = i;
      console.log(event);
      input.value = ""; 
    } 
  }
}

function removeActive() {
  keys[activeButton].classList.remove('active');
}

input.onkeydown = showKey; 
input.onkeyup = removeActive;
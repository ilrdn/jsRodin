function redirect() {
    location.replace("index4.html")
  }

setTimeout(redirect, 5000);

var delay = 5,
output = document.querySelector('.time-left'),
timer = setInterval(function time() {
    output.textContent = --delay;
    if (!delay) {
        clearInterval(timer);
    }
}, 1000);
output.textContent = delay;

function refreshPage(){
    window.location.reload();
} 
function back(){
    location.replace("index2.html")
} 
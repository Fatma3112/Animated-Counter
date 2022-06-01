let count = 0;
let save = document.getElementById("par");
let countNumber = document.getElementById("count");

let btns = document.querySelectorAll(".btn");


btns.forEach(function(btn) {
btn.addEventListener("click", function(e) {
  const style = e.currentTarget.classList;
  if(style.contains("btne")) {
    count++;
  } else if(style.contains("decrease")) {
    count--;
  } else if(style.contains("reset")) {
    count = 0;
  }
 countNumber.textContent = count;
 
  if(style.contains("butt")) {
  let countS = count + " / ";  
   save.textContent += countS ;
   countNumber.textContent = 0; 
 }
if(count > 0) {
  countNumber.style.color = "green";
}
if(count < 0 ) {
  countNumber.style.color = "purple";
}

})
})
  

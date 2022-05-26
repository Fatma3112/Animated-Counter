let count = 0;
let save = document.getElementById("par");
let countNumber = document.getElementById("count");


  function counEL() {
     
    countNumber.innerText = count++;
}
 function saveEl(){
    let countS = count + " / " ;
    save.textContent  += countS;
    countNumber.textContent = 0;
    count= 0;
    
}

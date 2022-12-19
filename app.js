
let hours = 0;
let minuts = 0;
let second = 0;
let miliseconsd = 0;
let int;

const start = document.getElementById("start");
const reset = document.getElementById("reset");
const pouse = document.getElementById("pouse");
const result = document.querySelector("h1");

let time = `${hours} : ${minuts} : ${second} : ${miliseconsd}`


let startBtn = () => {
    miliseconsd += 1;
   if(miliseconsd >= 99){
    miliseconsd = 0;
    second++;
   }
   if(second>=60){
    second=0;
    minuts++;
   }
   if(minuts>=60){
    minuts=0;
    hours++;
   }
   result.textContent=`${hours} : ${minuts} : ${second} : ${miliseconsd}`;
}

pouse.addEventListener("click",() => {
    clearInterval(int);
    console.log(int)
    start.disabled =false;

});

start.addEventListener("click" ,(event) => {
    int = setInterval(startBtn,10);
    start.disabled =true;
    
})
reset.addEventListener("click",() => {
    clearInterval(int);
    start.disabled =false;
    hours =0;minuts = 0;second=0; miliseconsd = 0;
    result.textContent=`${hours} : ${minuts} : ${second} : ${miliseconsd}`;
})
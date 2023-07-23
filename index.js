
/*let i = 2


while( i < 100){
    console.log(`This is my best color ${i} This is the square of each number ${i * i}\n` );

    i++;
}
*/
/*for(let i=0; i<=100; i++){
    if(i % 2===0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
*/
/*function sumValue(min,max){
    let num = max - min + 1;
    let numRandom = Math.random();
    let numResult = numRandom * num;
    let numFloor = Math.floor(numResult);
    console.log(numFloor);


}
*/
/*function greeting(num){
    if(num<10){
        console.log("less number");
    }
else{
    console.log("higher number");
}
}
(greeting(5))*/

 //document.querySelector('p').style.color ="red";

 /*function gameWord(num){
    switch(num){
        case 1:
        case 2:
            result = "play game";
            break;
            case 3:
                case 4:
                    result = " game out";
                    break;
                    default:
                        result = "game over"
    
    }
    console.log(result)
 }
 (gameWord(2))*/

 /*let item = {milk:"whole-milk", fruit:"orange"}
 let result ="";
 for(let x in item){
    
    result = result + " " + item[x];
 }

 console.log(result);   */

 
 /*let i=0;
while(i<10 ){
   
    if(i===5){
        break;
    }
    console.log(i);
    
    i++;
    
}
*/
/*let heading = document.querySelector("h3");
let myDiv = document.querySelector("div");

myDiv.addEventListener("mouseover", function(){ 
    heading.innerHTML = "The mouse is over the box "
})*/

/*let x =document.querySelector("h1");
x.style.color = "red"

x.innerHTML = "New JS style";

function myColor(){
    document.bgColor ="#0000ff";
}*/

/*let score = prompt("Enter your grade:");
let grade;


if((score>=70 && score<=100)){
   
    grade= "A";
    
}
        
  else if(score>=60 && score<=69){
    grade="B";
    
  }
  else if (score>=50 && score<=59){
    grade="C";
    
  }
  else if (score>=40 && score<=49){
    grade= "D";
    
  }
  
    else{
        grade="Re-Sit Examination";

     
        


}

alert(grade)*/

/*let num1 = prompt("Enter any number:", " ");
let num2 = prompt("Enter any number:", " ");
let totalNum = parseInt(num1) + parseInt(num2);

console.log("output total number:" + totalNum);
*/

/*let x = new Date();
let mm = x.getMonth()+1;
let dd = x.getDate();
let yy = x.getFullYear();
alert("This is a full date" +" " + mm +"/"+ dd+"/" + yy);*/


function myEvent(){
    let btn= document.getElementById("ft");
    let mtn= document.getElementById("tf");
    let x = new Date();
    
    btn.textContent = x.getFullYear();
}


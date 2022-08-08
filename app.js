let num1 =10;
let num2 =20;
let num3 ="10";
let word1 ="Hello";
let word2 ="hello";


console.log(num1 < num2);
console.log(num1 > num3); //equality check
console.log(num1 < num2);
console.log(num1 > num2);
console.log(!true);
console.log(!false);
console.log(num1 == num3);
console.log(num1 === num3);
console.log(word1 ===word2);


//CONTROL FLOW
let item ="Annapurna";

if (item === "Annapurna") {
    console.log ("Buy Annapurna");
} else if (item === "U2") {
    console.log("Buy A1");
} else{
 console.log("Buy Rocky Salt");
}



  //Grading System 
let score =80;
if (score>=90){
    console.log("Excellent");
}else if (score >= 80){
    console.log("Very Good")
}else if (score >=70){
    console.log("Good");
}else  if (score >=60){
   console.log("Average");
}else if ("score >=50") {
    console.log("credit");
}else if (score >=40){
    console.log("pass")
}else if ("score >=30"){
    console.log("fail");
}
 


//FUNCTION
function sum(x, y){
    console.log(x + y);
   let total = x+ y;
   return total;

}

let eleven = sum(5,6);
let fifteen = sum(7,8);
let nineteen = sum(9,10);// 


function multiply(a,b){
   let total = a * b;
   return total;
}
let twelve = multiply(8,4)
console.log(twelve);



 // for loops  
for(let i = 1;i <=10;i++){
     console.log(i + "i will not sleep in class again");
// }
   

 // while hoops
  let num =1;
  while(num <= 10){
   console.log(num);

   num = num + 1;
 }

 let age =19;
 do {
   console.log("let go out");
   age++;
}while(age < 5);


// Array methods
let ages = [3,8,16,12,20,10];

for(let age of ages){
    console.log(Math.pow(age,2));
}


let marriage = ages.filter((mark) => mark > 25 );
console.log(marriage);
   
// map
let squares = ages.map((age)=> age *age);
console.log(squares); 

// find
let eighteen = ages.find((age)=> age===18);
  console.log(eighteen);


  var score= [];


  function functionQuestion1() {
    
    var solution= document.getElementsByClassName('answer1');
    var fact = 0;
    for (var i =0; i<4; i++) {
      if (solution[i].checked){

      
       fact = fact + parseInt(solution[i].value);

      } 
      
    } console.log(fact);
   return score[0]= fact;
  } 


function functionQuestion2(answer2) {
    var timesRead= parseInt(answer2)
    console.log(timesRead);
   return score[1]= timesRead;
  } 

  function functionQuestion3() {
    var thirdAnswer= document.getElementsByClassName('answer3');
    var food = 0;
    for (var i =0; i<4; i++) {
      if (thirdAnswer[i].selected){

      
       food = food + parseInt(thirdAnswer[i].value);

      } 
      
    } console.log(food);
   return score[2]= food;
  } 

function functionQuestion4(answer4) {
    var happiestPicture= parseInt(answer4)
    console.log(happiestPicture);
   return score[3]= happiestPicture;
  } 

  

  function functionQuestion5() {
    
    var rivka= document.getElementsByClassName('switch');
    var hello = 0;
    for (var i =0; i<4; i++) {
      if (rivka[i].checked){

      
       hello = hello + parseInt(rivka[i].value);

      } 
      
    }  console.log(hello);
   return score[4]= hello;
  } 
    
console.log(score);
function finalAnswer(){
var sum=0;
for (var i = 0; i < score.length; i++) {
     sum = sum + score[i];
}
console.log(sum); 
  if (sum< 15) {
    alert("You are NOT a HP Fan. Your score was an embarrassing "+sum+". Get OUT.")

  } else if (sum >= 15 && sum <35) {
        alert("You are a tiny bit of a fan. You got just "+sum+" points.")
  } else if (sum >=35 && sum< 70) {
    alert("You are a fan, but not the Number1 fan so you receive a score of "+sum+".")
  } else if (sum>= 70) {
alert("Well done! Your score is " +sum+ ", so you are a true fan.")
  }

}

//   var sum = [1, 2, 3].reduce(add, 0);

// function add(a, b) {
//     return a + b;
// }

// console.log(sum); // 6

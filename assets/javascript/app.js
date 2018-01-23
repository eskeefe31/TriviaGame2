
function gradeTest() {
    //variables with global implications
    var totalQuestions = 5;
    var correctAnswers = 0;
    var alertText;
    var i;
 
 
 var a1 = document.getElementsByName('q1');
    for(i = 0; i < a1.length; i++) {
       if(a1[i].checked) {
          if(a1[i].value == 'B') {
             correctAnswers++;
             break;
          }
       }
    }
 
    var a2 = document.getElementsByName('q2');
    for(i = 0; i < a2.length; i++) {
       if(a2[i].checked) {
          if(a2[i].value == 'B') {
             correctAnswers++;
             break;
          }
       }
    }
 
    var a3 = document.getElementsByName('q3');
    for(i = 0; i < a3.length; i++) {
       if(a3[i].checked) {
          if(a3[i].value == 'C') {
             correctAnswers++;
             break;
          }
       }
    }
 
 
    var a4 = document.getElementsByName('q4');
    for(i = 0; i < a4.length; i++) {
       if(a4[i].checked) {
          if(a4[i].value == 'D') {
             correctAnswers++;
             break;
          }
       }
    }
    var a5 = document.getElementsByName('q5');
    for(i = 0; i < a5.length; i++) {
       if(a5[i].checked) {
          if(a5[i].value == 'C') {
             correctAnswers++;
             break;
          }
       }
    }
   
    if(correctAnswers == totalQuestions) {
       alertText = "Congratulations! You got all the questions right!";
    }
    else {
       alertText = "You got " + correctAnswers + " out of " + totalQuestions + " correct!"
    }
   
 
 } 
    alert(alertText);
 
 
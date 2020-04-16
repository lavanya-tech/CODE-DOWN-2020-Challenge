function check() {

	
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	
	
	var correct=0;
	if (q1=='playing chess') {correct++;}
	if (q2=='stamp') {correct++;}
	if (q3=='5') {correct++;}
	if (q4=='552') {correct++;}

	var messages=["Great job!, ","it's just okay, ","ALAS,better luck next time, "]
	var images=['https://media.giphy.com/media/xT5LMVTPf4zIH3zYk0/giphy.gif','https://media.giphy.com/media/xT5LMEcHRXKXpIHCCI/giphy.gif','https://media.giphy.com/media/kEiw9sE1P4iP0YBWFb/giphy.gif']
	var range;

	if (correct>=0) 
		{range=2;}
	if (correct>2) 
		{range=1;}
	if (correct>3) 
		{range=0;} 

	document.getElementById('feedback').innerHTML=messages[range]
	document.getElementById('got_correct').innerHTML='you got '+correct+' correct';
	document.getElementById('image').src=images[range]
}
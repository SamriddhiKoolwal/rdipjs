/*var numbersbtn= document.querySelectorAll(".number");
var calculatorScreen= document.querySelector(".calculator-screen");
var buttons=document.querySelectorAll('button');
var operatorsbtn=document.querySelectorAll(".operator");

var displayVal="";



	/*operatorsbtn.forEach((operator)=>{
		operator.addEventListener("click",calculations);
});*/

var prevInput='0';
var eArray=[];


var UpdateDisplay=(numbertext)=>{
	//var numbertext=clickobj.target.value;

	if(displayVal === '0'){
		displayVal='';
	}
	displayVal +=numbertext;
	calculatorScreen.value=displayVal;
}
var displayVal='';

var numbers= document.querySelectorAll(".number");

const calculatorScreen= document.querySelector(".calculator-screen");

const clearBtn=document.querySelector(".all-clear")

var buttons=document.querySelectorAll('button');
numbers.forEach((number)=>{
	number.addEventListener("click",(event)=>{
	numbertext=event.target.value;
	UpdateDisplay(numbertext)
});
});

var percentagebtn=document.querySelector(".percentage");
percentagebtn.addEventListener('click',(event)=>{
	prevInput=displayVal;
	operatorText=event.target.value;
	console.log(operatorText);
	displayVal='0';
	calculatorScreen.value=displayval;
});


clearBtn.onclick=()=>{
	displayVal="0";
	eArray=[];
	prevInput=undefined;
	calculatorScreen.value=displayVal;
}
var equalbtn=document.querySelector(".equal-sign");
var rootbtn=document.querySelector(".root");
rootbtn.onclick=()=>{
	if(equalbtn. clicked == true){
		displayVal=Math.sqrt( displayVal );
		calculatorScreen.value=displayVal;
	}
}



var operators=document.querySelectorAll(".operator");
operators.forEach((operator)=>{
	operator.addEventListener("click",(event)=>{
	operatorText=event.target.value;
  calculations(operatorText);
});
});

var calculations=(operatorText)=>{
	console.log(operatorText);
	switch(operatorText)
	{

		case '+':
				prevInput=displayVal;
				displayVal='0';
				calculatorScreen.value=displayVal;
				eArray.push(prevInput);
				eArray.push('+');
				break;
		case '-':
		prevInput=displayVal;
		displayVal='0';
		calculatorScreen.value=displayVal;
		eArray.push(prevInput);
		eArray.push('-');

				break;
		case '*':
			prevInput=displayVal;
			displayVal='0';
			calculatorScreen.value=displayVal;
			eArray.push(prevInput);
			eArray.push('*');
				break;
		case '/':
		prevInput=displayVal;
		displayVal='0';
		calculatorScreen.value=displayVal;
		eArray.push(prevInput);
		eArray.push('/');
				break;
		case '=':
		//console.log(displayVal);
		if(eArray.includes('+') || eArray.includes('-') || eArray.includes('*') || eArray.includes('/')){
			eArray.push(displayVal);

			var evaluation=eval(eArray.join(''));
			displayVal=evaluation+'';
			calculatorScreen.value=displayVal;
			eArray=[];
		}
		else{
			evaluation=(parseInt(prevInput)*parseInt(displayVal))/100;
			displayVal=evaluation.toString();
			calculatorScreen.value=displayVal;
		}
			break;
		default:return;
	}
}




/*--------------------------registration--------------------*/
function validation(){
	var n=document.getElementById('name').value;   //name
	var phoneNo=document.getElementById('phone').value;// phoneNo
	var mail=document.getElementById('email').value;
	if(mailChecking(mail) && phoneChecking(phoneNo) && nameChecking(n))
	{

		return false;
	}
	else{

		return true;
	}

}
	function mailChecking(mail){
	 var letter=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})$/;
	 if(mail.match(letter))
		 return true;
	 else
	 {
		alert("Email is not valid");
		 return false;
	 }
 }
function phoneChecking(phoneNo){
if(isNaN(phoneNo) || phoneNo.length<10){
	alert("Phone Number is not valid");
	return false;
}
	else{
		return true;
	}
}
function nameChecking(n){
	var z=/^([a-zA-Z]{1})([a-zA-Z0-9-]+)$/;
	if(n.match(z)){
		return true;
	}else{
		alert("name is wrong");
		return false;
	}
}
/*------------------------------String Programs--------------------*/
function isPallindrome(){
	var a=document.getElementById("string").value;
	var b="";
	if(a===""){
		alert("Your Input is blank");
	}else{
		for(i=a.length-1;i>=0;i--){
			b=b+a[i];
		}
	}
	if(a==b){
		document.getElementById('result').value=a+" is a Pallindrome";
		return true;
	}else{
		document.getElementById('result').value=a+" is not a Pallindrome";
		return false;
	}

	}
function isAnagram(){
	var s1=document.getElementById('string1').value;
	var s2=document.getElementById('string2').value;
	s1=s1.toLowerCase();
	s2=s2.toLowerCase();
	var str1=s1.replace(/[^a-z\d]/g, '').split('').sort().join('');
	var str2=s2.replace(/[^a-z\d]/g, '').split('').sort().join('');
	if(str1==str2){
		document.getElementById('result1').value=s1+" is a Anagram of "+s2;
		return true;
	}else{
		document.getElementById('result1').value=s1+" is a not Anagram of "+s2;
		return false;
	}
}
/*------------------------------game--------------------*/


function game(){

	var playerOne=document.getElementById('player1In').value;
	var playertwo=document.getElementById('player2In').value;
	if(playerOne === "" && playertwo ===""){
		alert("your input is blank");
	}
else{
	player1Decide(playerOne);
	player2Decide(playertwo);
	gameResult(playerOne,playertwo);
}
}
function player1Decide(number){
	var num=number%3;
	 var ImageSource= num + ".jpg";

	var image1 = document.querySelectorAll("img")[0];

	image1.setAttribute("src",ImageSource);
}
function player2Decide(number){
	var num=number%3;
	 var ImageSource= num + ".jpg";

	var image2 = document.querySelectorAll("img")[1];

	image2.setAttribute("src",ImageSource);
}
function gameResult(playerOne,playertwo){
	var choiceOne=playerOne%3;
	var choicetwo=playertwo%3;
	if(choiceOne === choicetwo){
		 document.querySelector("h1").innerHTML = "Draw!";
		return;
	}
	 if (choiceOne === 0) {
			if(choicetwo === 1){
			document.querySelector("h1").innerHTML  = "🚩 Play 2 Wins!";
			return;
		}else{
			document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
			return;
		}
	}
	if (choiceOne === 1) {
		if(choicetwo === 0){
			document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
			return;
		}else{
			document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
			return;
		}
	}
	if(choiceOne === 2){
		if(choicetwo === 1){
			document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
			return;
		}else{
			document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
			return;
		}
}
}

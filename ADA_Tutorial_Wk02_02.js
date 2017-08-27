//rock=1
//paper=2
//scissors=3

chosenWeapon=''
opponentWeapon=''
result=''


function playRock() {
	chosenWeapon=1
	opponentWeapon=Math.floor((Math.random()*3)+1);
	if (opponentWeapon==chosenWeapon) {
		result="Opponent chose Rock. It's a draw!"
	} else if (opponentWeapon==2) {
		result="Opponent chose Paper. You lose!"
	} else {
		result="Opponent chose Scissors. You win!"
	}
	console.log(result);
	console.log(opponentWeapon);
	document.getElementById('result').innerHTML=result;
}

function playPaper() {
	chosenWeapon=2
	opponentWeapon=Math.floor((Math.random()*3)+1);
	if (opponentWeapon==chosenWeapon) {
		result="Opponent chose Paper. It's a draw!"
	} else if (opponentWeapon==1) {
		result="Opponent chose Rock. You win!"
	} else {
		result="Opponent chose Scissors. You lose!"
	}
	console.log(result);
	console.log(opponentWeapon);
	document.getElementById('result').innerHTML=result;
}

function playScissors() {
	chosenWeapon=3
	opponentWeapon=Math.floor((Math.random()*3)+1);
	if (opponentWeapon==chosenWeapon) {
		result="Opponent chose Scissors. It's a draw!"
	} else if (opponentWeapon==1) {
		result="Opponent chose Rock. You lose!"
	} else {
		result="Opponent chose Paper. You win!"
	}
	console.log(result);
	console.log(opponentWeapon);
	document.getElementById('result').innerHTML=result;
}
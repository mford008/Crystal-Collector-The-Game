//Variable bank

var playerNumber = 0
var computerNumber = 0




//The function for when the page loads
$(document).ready(function() {

	//Function for choosing a random number at start
	//Number is between 19 and 120, per video instructions
	var computerNumber = (Math.floor(Math.random) * 120) //saw something online about doing * 101+19; does this work and if so, why?
	

	//Random numbers also need to be set for each crystal
	var whiteCrystal = (Math.floor(Math.random) * 12)
	var blueCrystal = (Math.floor(Math.random) * 12)
	var greenCrystal = (Math.floor(Math.random) * 12)
	var orangeCrystal = (Math.floor(Math.random) * 12)

	//The computer number needs to be printed to the screen
	//The crystal number needs to be printed to the crystals div, not the screen
	//Fun idea: display the value of each crystal after clicking
}

//Settings at the beginning of the game
wins = 0
losses = 0
playerNumber = 0
counter = 0

function reset() {
	playerNumber = 0
}

function print() {

}
//This will count the number of times each crystal is clicked, and multiply accordingly
//Other thought: could have individual counters for each crystal
function counter() {

}
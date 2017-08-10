//Global object for starting variables in game

var crystalGame = {
	type: "",
	id: [],
	value: [],
	playerNumber: [],
	computerNumber: [],
	wins: 0,
	losses: 0,
};

//Array for individual crystals, values set to zero for beginning of game
var crystal = [ //how should I call each individual value?
	{
		type: "white",
		id: 0,
		value: 0
	}
	{
		type: "blue",
		id: 0,
		value: 0
	}
	{
		type: "green",
		id: 0,
		value: 0
	}
	{
		type: "orange",
		id: 0,
		value: 0
	}
];

//Start of game play
$(document).ready(function() {
	
	function setup() {
		wins: 0;
		losses: 0;
		computerNumber = Math.Floor(Math.random() (120 - 19)) + 19;

		crystal.value = Math.Floor(Math.random() (12 - 1)) + 1; //how would I set this up for each one?

		$("#computernumber").html(computerNumber);
		$("#playernumber").html(playerNumber);
		//$(".crystals").html(crystal.value);  <--maybe show these after the first click?
		$(".wins").html(wins);
		$(".losses").html(losses);
		$("#prompt").text("Click a crystal to start!")

	};

	function scoreCheck() {
		if (playerNumber === computerNumber) {
			wins++;
			$("#prompt").text("You won!");
			$("#playerNumber").html(playerNumber);
			//some kind of animation with glitter?
			reset()
		}
		else if (playerNumber > computerNumber) {
			losses++;
			$("#prompt").text("You lost. Try again!");
			$("#playerNumber").html(playerNumber);
			reset()
		}
	};

	//click function for crystals
	$(".white").on("click" function() {
		playerNumber = playerNumber + crystal.value; //check naming of this, might not be calling correctly; how to call name above?
		scoreCheck();
		$("#playerNumber").html(playerNumber);
	};

	$(".blue").on("click" function() {
		playerNumber = playerNumber + crystal.value; //check naming of this, might not be calling correctly; how to call name above?
		scoreCheck();
		$("#playerNumber").html(playerNumber);
	};

	$(".green").on("click" function() {
		playerNumber = playerNumber + crystal.value; //check naming of this, might not be calling correctly; how to call name above?
		scoreCheck();
		$("#playerNumber").html(playerNumber);
	};

	$(".orange").on("click" function() {
		playerNumber = playerNumber + crystal.value; //check naming of this, might not be calling correctly; how to call name above?
		scoreCheck();
		$("#playerNumber").html(playerNumber);
	};
	//basically same as above, only without resetting wins and losses?
	function reset () {
		computerNumber = Math.Floor(Math.random() (120 - 19)) + 19;

		crystal.value = Math.Floor(Math.random() (12 - 1)) + 1; //how would I set this up for each one?

		$("#computernumber").html(computerNumber);
		$("#playernumber").html(playerNumber);
		//$(".crystals").html(crystal.value);  <--maybe show these after the first click?
		$(".wins").html(wins);
		$(".losses").html(losses);
		$("#prompt").text("Click a crystal to start!")
	};












//Global object for starting variables in game

var crystalGame = {
	type: "",
	id: [],
	value: 0,
	playerNumber: 0,
	computerNumber: function() { Math.Floor(Math.random() * (120 - 19)) + 19 },
	wins: 0,
	losses: 0,
};

//Array for individual crystals, values set to zero for beginning of game
var crystal = [ //how should I call each individual value?
	{
		type: "white",
		id: 0,
		value: Math.floor(Math.random() * (12 - 1)) + 1
	},
	{
		type: "blue",
		id: 1,
		value: Math.floor(Math.random() * (12 - 1)) + 1
	},
	{
		type: "green",
		id: 2,
		value: Math.floor(Math.random() * (12 - 1)) + 1
	},
	{
		type: "orange",
		id: 3,
		value: Math.floor(Math.random() * (12 - 1)) + 1
	}
];
console.log(crystal);

//Start of game play
$(document).ready(function() {
	
	(function setupAndReset() {
		crystalGame.wins = 0;
		crystalGame.losses = 0;
		crystalGame.playerNumber = 0;
		crystalGame.computerNumber = Math.floor(Math.random() * (120 - 19)) + 19;
			console.log("this is the random number", crystalGame.computerNumber);

		//crystal.value = Math.Floor(Math.random() (12 - 1)) + 1; //how would I set this up for each one?

		$("#computernumber").html(crystalGame.computerNumber);
		//console.log(computerNumber);
		$("#playernumber").html(crystalGame.playerNumber);
		//$(".crystals").html(crystal.value);  <--maybe show these after the first click?
		$(".wins").append(crystalGame.wins);
		$(".losses").append(crystalGame.losses);
		$("#prompt").text("Click a crystal to start!")
		scoreCheck()

	})();
	

	function scoreCheck() {
		if (crystalGame.playerNumber === crystalGame.computerNumber) {
			crystalGame.wins++;
			$("#prompt").text("You won!");
			$("#playerNumber").append(playerNumber);
			//some kind of animation with glitter?
			setupAndReset()
		}
		else if (crystalGame.playerNumber > crystalGame.computerNumber) {
			crystalGame.losses++;
			$("#prompt").text("You lost. Try again!");
			$("#playerNumber").append(crystalGame.playerNumber);
			setupAndReset()
		}
	};


	//click function for crystals
	$(".white").on("click", function() {
		crystalGame.playerNumber += crystal[0].value;
		//playerNumber = playerNumber + crystal[0].value; //check naming of this, might not be calling correctly; how to call name above?
		scoreCheck();
		$("#playerNumber").append(crystalGame.playerNumber + crystal[0].value);
		console.log(crystal[0].value);
	});

	$(".blue").on("click", function() {
		crystalGame.playerNumber += crystal[1].value;
		//playerNumber = playerNumber + crystal[1].value; //check naming of this, might not be calling correctly; how to call name above?
		scoreCheck();
		$("#playerNumber").append(crystalGame.playerNumber + crystal[1].value);
		console.log(crystal[1].value);
	});

	$(".green").on("click", function() {
		crystalGame.playerNumber += crystal[2].value;
		//playerNumber = playerNumber + crystal[2].value; //check naming of this, might not be calling correctly; how to call name above?
		scoreCheck();
		$("#playerNumber").append(crystalGame.playerNumber + crystal[2].value);
		console.log(crystal[2].value);
	});

	$(".orange").on("click", function() {
		crystalGame.playerNumber += crystal[3].value;
		//playerNumber = playerNumber + crystal[3].value; //check naming of this, might not be calling correctly; how to call name above?
		scoreCheck();
		$("#playerNumber").append(crystalGame.playerNumber + crystal[3].value);
		console.log(crystal[3].value);
	});
	//basically same as above, only without resetting wins and losses?
	// function reset () {
	// 	crystalGame.computerNumber = Math.Floor(Math.random() (120 - 19)) + 19;

	// 	//crystal.value = Math.Floor(Math.random() (12 - 1)) + 1; //how would I set this up for each one?

	// 	$("#computernumber").html(crystalGame.computerNumber);
	// 	$("#playernumber").html(crystalGame.playerNumber);
	// 	//$(".crystals").html(crystal.value);  <--maybe show these after the first click?
	// 	$(".wins").html(wins);
	// 	$(".losses").html(losses);
	// 	$("#prompt").text("Click a crystal to start!")
	//});

});












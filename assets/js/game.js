//Global object for starting variables in game

var crystalGame = {
	type: "",
	id: [],
	value: [],
	playerNumber: 0,
	computerNumber = Math.Floor(Math.random() * (120 - 19)) + 19
	wins =  0,
	losses =  0,
};

//Array for individual crystals, values set to zero for beginning of game
var crystal = [ //how should I call each individual value?
	{
		type: "white",
		id: 0,
		value = Math.Floor(Math.random() * (12 - 1)) + 1
	},
	{
		type: "blue",
		id: 1,
		value = Math.Floor(Math.random() * (12 - 1)) + 1
	},
	{
		type: "green",
		id: 2,
		value = Math.Floor(Math.random() * (12 - 1)) + 1
	},
	{
		type: "orange",
		id: 3,
		value = Math.Floor(Math.random() * (12 - 1)) + 1
	}
];

//Start of game play
$(document).ready(function() {
	
	function setup() {
		crystalGame.wins = 0;
		crystalGame.losses = 0;
		playerNumber = 0;
		computerNumber = Math.Floor(Math.random() (120 - 19)) + 19;

		//crystal.value = Math.Floor(Math.random() (12 - 1)) + 1; //how would I set this up for each one?

		$("#computernumber").html(crystalGame.computerNumber);
		$("#playernumber").html(crystalGame.playerNumber);
		//$(".crystals").html(crystal.value);  <--maybe show these after the first click?
		$(".wins").html(crystalGame.wins);
		$(".losses").html(crystalGame.losses);
		$("#prompt").text("Click a crystal to start!")

	};

	function scoreCheck() {
		if (crystalGame.playerNumber === crystalGame.computerNumber) {
			wins++;
			$("#prompt").text("You won!");
			$("#playerNumber").html(playerNumber);
			//some kind of animation with glitter?
			reset()
		}
		else if (crystalGame.playerNumber > crystalGame.computerNumber) {
			losses++;
			$("#prompt").text("You lost. Try again!");
			$("#playerNumber").html(playerNumber);
			reset()
		}
	};


	//click function for crystals
	$(".white").on("click", function() {
		crystalGame.playerNumber += crystal[0].value;
		//playerNumber = playerNumber + crystal[0].value; //check naming of this, might not be calling correctly; how to call name above?
		scoreCheck();
		$("#playerNumber").html(crystalGame.playerNumber);
	});

	$(".blue").on("click", function() {
		crystalGame.playerNumber += crystal[1].value;
		//playerNumber = playerNumber + crystal[1].value; //check naming of this, might not be calling correctly; how to call name above?
		scoreCheck();
		$("#playerNumber").html(crystalGame.playerNumber);
	});

	$(".green").on("click", function() {
		crystalGame.playerNumber += crystal[2].value;
		//playerNumber = playerNumber + crystal[2].value; //check naming of this, might not be calling correctly; how to call name above?
		scoreCheck();
		$("#playerNumber").html(crystalGame.playerNumber);
	});

	$(".orange").on("click", function() {
		crystalGame.playerNumber += crystal[3].value;
		//playerNumber = playerNumber + crystal[3].value; //check naming of this, might not be calling correctly; how to call name above?
		scoreCheck();
		$("#playerNumber").html(crystalGame.playerNumber);
	});
	//basically same as above, only without resetting wins and losses?
	function reset () {
		crystalGame.computerNumber = Math.Floor(Math.random() (120 - 19)) + 19;

		//crystal.value = Math.Floor(Math.random() (12 - 1)) + 1; //how would I set this up for each one?

		$("#computernumber").html(crystalGame.computerNumber);
		$("#playernumber").html(crystalGame.playerNumber);
		//$(".crystals").html(crystal.value);  <--maybe show these after the first click?
		$(".wins").html(wins);
		$(".losses").html(losses);
		$("#prompt").text("Click a crystal to start!")
	};

});












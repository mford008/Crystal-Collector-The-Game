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
	
	function setupAndReset() {
		crystalGame.playerNumber = 0;
		crystalGame.computerNumber = Math.floor(Math.random() * (120 - 19)) + 19;
			console.log("this is the random number", crystalGame.computerNumber);

		crystal[0].value = Math.floor(Math.random() * (12 - 1)) + 1
		crystal[1].value = Math.floor(Math.random() * (12 - 1)) + 1
		crystal[2].value = Math.floor(Math.random() * (12 - 1)) + 1
		crystal[3].value = Math.floor(Math.random() * (12 - 1)) + 1

		$("#targetnumber").html(crystalGame.computerNumber);
		//console.log(computerNumber);
		$("#updatedplayernumber").html(crystalGame.playerNumber);
		$(".crystals").html(crystal.value);
		$("#winnumber").html(crystalGame.wins);
		$("#lossnumber").html(crystalGame.losses);
		//$("#winorlose").html(" ");
		$("#prompt").html("Click a crystal to start!")
		scoreCheck()

	}

	setupAndReset();
	

	function scoreCheck() {
		if (crystalGame.playerNumber === crystalGame.computerNumber) {
			crystalGame.wins++;
			$("#winorlose").html("You won!");
			$("#updatedplayernumber").append(crystalGame.playerNumber);
			setupAndReset()
		}
		else if (crystalGame.playerNumber > crystalGame.computerNumber) {
			crystalGame.losses++;
			$("#winorlose").html("You lost. Try again!");
			$("#updatedplayernumber").append(crystalGame.playerNumber);
			setupAndReset()
		}
	};


	//click function for crystals
	$(".white").on("click", function() {
		crystalGame.playerNumber += crystal[0].value;
		scoreCheck();
		$("#updatedplayernumber").html(crystalGame.playerNumber);
		console.log(crystal[0].value);
		console.log("whitecrystal", crystalGame.playerNumber);
	});

	$(".blue").on("click", function() {
		crystalGame.playerNumber += crystal[1].value;
		scoreCheck();
		$("#updatedplayernumber").html(crystalGame.playerNumber);
		console.log(crystal[1].value);
		console.log("bluecrystal", crystalGame.playerNumber);
	});

	$(".green").on("click", function() {
		crystalGame.playerNumber += crystal[2].value;
		scoreCheck();
		$("#updatedplayernumber").html(crystalGame.playerNumber);
		console.log(crystal[2].value);
		console.log("greencrystal", crystalGame.playerNumber);
	});

	$(".orange").on("click", function() {
		crystalGame.playerNumber += crystal[3].value;
		scoreCheck();
		$("#updatedplayernumber").html(crystalGame.playerNumber);
		console.log(crystal[3].value);
		console.log("orangecrystal", crystalGame.playerNumber);
	});
	

});












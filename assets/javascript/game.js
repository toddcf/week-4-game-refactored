$( document ).ready(function() {

	// Global Variables.

		// One object for all crystals...
		var crystal = {
			// ...and a sub-object for each color:
			blue: {
				name: "Blue",
				value: 0
			},
			green: {
				name: "Green",
				value: 0
			},
			red: {
				name: "Red",
				value: 0
			},
			violet: {
				name: "Violet",
				value: 0
			}
		};

		// Scores (Current and Target)
		var currentScore	= 0;
		var targetScore		= 0;

		// Wins and Losses
		var winCount 		= 0;
		var lossCount		= 0;

	// Functions.

		// Helper function for getting random numbers.
		// This variable can be applied to each of the crystals, plus the Target Score.
		var getRandom = function(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		// Starts (and restarts) the game:
		var startGame = function() {
			
			// Reset current score.
			currentScore = 0;
			
			// Set a new target score (between 19 and 120).
			targetScore = getRandom(19, 120);
			
			// Set different values for each of the crystals (between 1 and 12).
			crystal.blue.value 		= getRandom(1, 12);
			crystal.green.value 	= getRandom(1, 12);
			crystal.red.value 		= getRandom(1, 12);
			crystal.violet.value 	= getRandom(1, 12);
			
			// Test values:
			console.log("Target Score: "	+ targetScore);
			console.log("Blue: "			+ crystal.blue.value);
			console.log("Green: "			+ crystal.green.value);
			console.log("Red: "				+ crystal.red.value);
			console.log("Violet: "			+ crystal.violet.value);
			
			// Change HTML to reflect all changes.
			$("#yourScore").html(currentScore);
			$("#targetScore").html(targetScore);

		}

		// Respond to clicks on the crystals:
			var addValues = function(crystal) {
				currentScore = currentScore + crystal.value;

				// Test:
				console.log("Your Score: " + currentScore);

				// Change HTML to reflect current score:
				$("#yourScore").html(currentScore);

				// Call checkWin:
				checkWin();
			}
		
		// Check if user won or lost, then reset game.
		var checkWin = function() {
			// Is currentScore now larger than targetScore?
			if (currentScore > targetScore) {
				alert("You lost -- the walls caved in. Start over.");
				console.log("You lost.");

				// Add score to Loss Counters.
				lossCount++;

				// Display to HTML.
				// This has to come *after* lossCount has been updated or else the change will not be reflected.
				$("#lossCount").html(lossCount);

				// Restart Game
				startGame();
			}

			else if (currentScore == targetScore) {
				alert('You won! You escaped with the crystals and your life! Let\'s go to another cave and collect some more crystals...');
				console.log("You won!");

				// Add score to Win Counter.
				winCount++;

				// Display to HTML.
				// This has to come *after* winCount has been updated or else the change will not be reflected.
				$("#winCount").html(winCount);

				// Restart Game
				startGame();
			}
		}


	// Main Process (where functions are called.)

		// Starts the game the first time:
		startGame();

		// Click Events for each crystal.
		$("#blue").click(function() {
			addValues(crystal.blue);
		});

		$("#green").click(function() {
			addValues(crystal.green);
		});

		$("#red").click(function() {
			addValues(crystal.red);
		});

		$("#violet").click(function() {
			addValues(crystal.violet);
		});

});
$( document ).ready(function() {

	// This is the entire game:
	crystalCollector();
	function crystalCollector() {

	// Declare variables that will NOT reset each time the game starts over.
	var wins = 0;

	var losses = 0;

	// Displays user's score on the screen.
	$('#yourWins').text(wins);
	$('#yourLosses').text(losses);

	// This is the reset point each time game starts over.
	newGame();
	function newGame() {
		
		// Chooses a random number between 19 and 120.
		var maxValue = Math.floor(Math.random() * (120 - 19)) + 19;
			// Displays the maxValue to the screen.
			$('#maxValue').text(maxValue);

		// Assigns a variable for each crystal.
		// Each new game, each crystal is assigned a new random number between 1 and 12.
		var blueCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
			console.log(blueCrystal);

		var greenCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
			console.log(greenCrystal);

		var redCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
			console.log(redCrystal);

		var violetCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
			console.log(violetCrystal);

		// Total value of crystals the user is holding:
		var counter = 0
			// Displays total value of crystals the user is holding:
			$('#yourNumber').text(counter);

		// When the blue crystal is clicked, its current value is added to the counter.
		$('#blue').click(function() {
			counter = counter + blueCrystal;
			$('#yourNumber').text(counter);
			
			if (counter == maxValue) {
				alert('You won! You escaped with the crystals and your life! Let\'s go to another cave and collect some more crystals...');
				wins = wins + 1;
				$('#yourWins').text(wins);
				$("blueCrystal").empty();
				$("greenCrystal").empty();
				$("redCrystal").empty();
				$("violetCrystal").empty();
				newGame();
			}

			else if(counter > maxValue) {
				alert('You lost -- the walls caved in. Start over.');
				losses = losses + 1;
				$('#yourLosses').text(losses);
				$("blueCrystal").empty();
				$("greenCrystal").empty();
				$("redCrystal").empty();
				$("violetCrystal").empty();
				newGame();
			}
		});

		// When the green crystal is clicked, its current value is added to the counter.
		$('#green').click(function() {
			counter = counter + greenCrystal;
			$('#yourNumber').text(counter);
		
			if (counter == maxValue) {
				alert('You won! You escaped with the crystals and your life! Let\'s go to another cave and collect some more crystals...');
				wins = wins + 1;
				$('#yourWins').text(wins);
				$("blueCrystal").empty();
				$("greenCrystal").empty();
				$("redCrystal").empty();
				$("violetCrystal").empty();
				newGame();
			}

			else if(counter > maxValue) {
				alert('You lost -- the walls caved in. Start over.');
				losses = losses + 1;
				$('#yourLosses').text(losses);
				$("blueCrystal").empty();
				$("greenCrystal").empty();
				$("redCrystal").empty();
				$("violetCrystal").empty();
				newGame();
			}
		});

		// When the red crystal is clicked, its current value is added to the counter.
		$('#red').click(function() {
			counter = counter + redCrystal;
			$('#yourNumber').text(counter);

			if (counter == maxValue) {
				alert('You won! You escaped with the crystals and your life! Let\'s go to another cave and collect some more crystals...');
				wins = wins + 1;
				$('#yourWins').text(wins);
				$("blueCrystal").empty();
				$("greenCrystal").empty();
				$("redCrystal").empty();
				$("violetCrystal").empty();
				newGame();
			}

			else if(counter > maxValue) {
				alert('You lost -- the walls caved in. Start over.');
				losses = losses + 1;
				$('#yourLosses').text(losses);
				$("blueCrystal").empty();
				$("greenCrystal").empty();
				$("redCrystal").empty();
				$("violetCrystal").empty();
				newGame();
			}
		});

		// When the violet crystal is clicked, its current value is added to the counter.
		$('#violet').click(function() {
			counter = counter + violetCrystal;
			$('#yourNumber').text(counter);

			if (counter == maxValue) {
				alert('You won! You escaped with the crystals and your life! Let\'s go to another cave and collect some more crystals...');
				wins = wins + 1;
				$('#yourWins').text(wins);
				$("blueCrystal").empty();
				$("greenCrystal").empty();
				$("redCrystal").empty();
				$("violetCrystal").empty();
				newGame();
			}

			else if(counter > maxValue) {
				alert('You lost -- the walls caved in. Start over.');
				losses = losses + 1;
				$('#yourLosses').text(losses);
				$("blueCrystal").empty();
				$("greenCrystal").empty();
				$("redCrystal").empty();
				$("violetCrystal").empty();
				newGame();
			}
		});	 	
	};		
		
	};

});
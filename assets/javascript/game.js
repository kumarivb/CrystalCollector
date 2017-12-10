//  make sure Javascript doesn't run until the HTML is finished loading
    $(document).ready(function() {

// -------------------- Global Variables --------------------
    // random points number and choices
        var randNum;

    // track number of wins and losses
        var winCounter;
        var lossCounter;

    // images random numbers
        var imgRandNum1;
        var imgRandNum2;
        var imgRandNum3;
        var imgRandNum4;

    // your total score
        var totalScore;

// -------------------- Functions ---------------------------
    // initialize game
        function initializeGame() {
            winCounter = 0;
            lossCounter = 0;
            totalScore = 0;

        // random point number displayed
            var randNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            console.log(randNum);
            $('#pointsNum').text(randNum);

        // images random numbers, not displayed
            var imgRandNum1 = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
            console.log(imgRandNum1);

            var imgRandNum2 = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
            console.log(imgRandNum2);

            var imgRandNum3 = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
            console.log(imgRandNum3);

            var imgRandNum4 = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
            console.log(imgRandNum4);
    }

// -------------------- Main Processes ----------------------
    // image clicks to add points to determine win or lose
        $('.firstImg').on('click', function() {
            totalScore = totalScore + imgRandNum1;
            $('#yourTotalScore').text(totalScore);
            if (totalScore == randNum) {
                $('#youWon').text('You WON!');
                winCounter++;
            }
            else if (totalScore > randNum) {
                $('#youLost').text('You LOST!');
                lossCounter++;
            }
        });

        $('.secondImg').on('click', function() {
            totalScore = totalScore + imgRandNum2;
            if (totalScore == randNum) {
                $('#youWon').text('You WON!');
                winCounter++;
            }
            else if (totalScore > randNum) {
                $('#youLost').text('You LOST!');
                lossCounter++;
            }
        });

        $('.thirdImg').on('click', function() {
            totalScore = totalScore + imgRandNum3;
            if (totalScore == randNum) {
                $('#youWon').text('You WON!');
                winCounter++;
            }
            else if (totalScore > randNum) {
                $('#youLost').text('You LOST!');
                lossCounter++;
            }
        });

        $('.fourthImg').on('click', function() {
            totalScore = totalScore + imgRandNum4;
            if (totalScore == randNum) {
                $('#youWon').text('You WON!');
                winCounter++;
            }
            else if (totalScore > randNum) {
                $('#youLost').text('You LOST!');
                lossCounter++;
            }
        });

// -------------------- HTML --------------------------------
    // user score


// -------------------- Reset -------------------------------
    initializeGame();
});
//  make sure Javascript doesn't run until the HTML is finished loading
    $(document).ready(function() {

// -------------------- Global Variables --------------------
    // random points number
        var randNum;

    // track number of wins and losses
        var winCounter;
        var lossCounter;

        var youWon;
        var youLost;

    // images random numbers
        var imgRandNum = [];

    // your total score
        var totalScore;

// -------------------- Functions ---------------------------
    // initialize game
        function initializeGame() {
            winCounter = 0;
            lossCounter = 0;
            totalScore = 0;
            $('#wins').text(winCounter);
            $('#losses').text(lossCounter);

        // random point number displayed
            randNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            console.log(randNum);
            $('#pointsNum').text(randNum);
        }

        // images random numbers, not displayed
            function imagesRandomNumbers() {
                for (var i = 0; i < 4; i++) {
                    var num = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
                    imgRandNum.push(num);
                }
                console.log(imgRandNum);
            }
            imagesRandomNumbers();

    // reset
        function reset() {
            randNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            console.log(randNum);
            $('#pointsNum').text(randNum);

            imgRandNum = [];
            imagesRandomNumbers();

            totalScore = 0;
            $('#yourTotalScore').text(totalScore);
        }

        // win counter total
            function win() {
                $('#youWon').text("You WON!");
                $('#youLost').text("");
                winCounter++;
                $('#wins').text(winCounter);
                reset();
            };

        // losses counter total
            function lost() {
                $('#youLost').text("You LOST!");
                $('#youWon').text("");
                lossCounter++;
                $('#losses').text(lossCounter);
                reset();
            };

// -------------------- Main Processes ----------------------
    // image clicks to add points to determine win or lose
        $('#firstImg').on('click', function() {
            totalScore = totalScore + imgRandNum[0];
            console.log(totalScore);
            $('#yourTotalScore').text(totalScore);

            if (totalScore == randNum) {
                win();
                initializeGame();
            }
            else if (totalScore > randNum) {
                lost();
            }
            else {
                $('#youWon').text("");
                $('#youLost').text("");
            }
            console.log(randNum);
        });

        $('#secondImg').on('click', function() {
            totalScore = totalScore + imgRandNum[1];
            console.log(totalScore);
            $('#yourTotalScore').text(totalScore);

            if (totalScore == randNum) {
                win();
            }
            else if (totalScore > randNum) {
                lost();
            }
            else {
                $('#youWon').text("");
                $('#youLost').text("");
            }
        });

        $('#thirdImg').on('click', function() {
            totalScore = totalScore + imgRandNum[2];
            console.log(totalScore);
            $('#yourTotalScore').text(totalScore);

            if (totalScore == randNum) {
                win();
            }
            else if (totalScore > randNum) {
                lost();
            }
            else {
                $('#youWon').text("");
                $('#youLost').text("");
            }
        });

        $('#fourthImg').on('click', function() {
            totalScore = totalScore + imgRandNum[3];
            console.log(totalScore);
            $('#yourTotalScore').text(totalScore);

            if (totalScore == randNum) {
                win();
            }
            else if (totalScore > randNum) {
                lost();
            }
            else {
                $('#youWon').text("");
                $('#youLost').text("");
            }
        });


// -------------------- HTML --------------------------------
    // user score


// -------------------- Reset -------------------------------
    initializeGame();
});
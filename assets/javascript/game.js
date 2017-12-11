//  make sure Javascript doesn't run until the HTML is finished loading
    $(document).ready(function() {

// -------------------- Global Variables --------------------
    // random points number and choices
        var randNum;

    // track number of wins and losses
        var winCounter;
        var lossCounter;

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
            var randNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
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

        // win counter total
            function win() {
                alert("You WON!");
                winCounter++;
                $('#wins').text(winCounter);
            };

        // losses counter total
            function lost() {
                $('#youLost').text("You LOST!");
                lossCounter++;
                $('#losses').text(lossCounter)
            };

// -------------------- Main Processes ----------------------
    // image clicks to add points to determine win or lose
        $('#firstImg').on('click', function() {
            totalScore = totalScore + imgRandNum[0];
            console.log(totalScore);
            $('#yourTotalScore').text(totalScore);

            if (totalScore == randNum) {
                win();
            }
            else if (totalScore > randNum) {
                lost();
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
        });

// -------------------- HTML --------------------------------
    // user score


// -------------------- Reset -------------------------------
    initializeGame();
});
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
            imgRandNum1 = [];
            imgRandNum2 = [];
            imgRandNum3 = [];
            imgRandNum4 = [];
            totalScore = 0;

        // random point number displayed
            var randNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            console.log(randNum);
            $('#randPointsNum').text(randNum);

        // images random numbers, not displayed
            var imgRandNum1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            console.log(imgRandNum1);

            var imgRandNum2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            console.log(imgRandNum2);

            var imgRandNum3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            console.log(imgRandNum3);

            var imgRandNum4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            console.log(imgRandNum4);

            // var imgRandNum1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            // console.log(imgRandNum1);

            // var imgRandNum2 = Math.floor(Math.random() * (12 - 2 + 1)) +1;
            // console.log(imgRandNum2);
        }

    // image clicks
        $('#firstImgRandNum').on("click", function() {
            totalScore = imgRandNum1 + totalScore;
            console.log("New total" + totalScore);
        });




    // display won lost





// -------------------- Main Processes ----------------------
// -------------------- HTML --------------------------------

// -------------------- Reset -------------------------------
    initializeGame();
});
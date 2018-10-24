$(document).ready(function () {
    //Once Document is Ready, Declare Variables
    var playerScore = 0;      //Player Score from Clicking On Crystal Buttons
    var targetNum = Math.floor(Math.random() * 102) + 19;   //Random Target Score, Player is Trying to Match, Range is 19-120
    var nWins = 0;          //Number of Rounds Won
    var nLosses = 0;        //Number of Rounds Lost
    var worthOne = Math.floor(Math.random() * 12) + 1;      //Worth of Button 1, Range is 1-12
    var worthTwo = Math.floor(Math.random() * 12) + 1;      //Worth of Button 2, Range is 1-12
    var worthThree = Math.floor(Math.random() * 12) + 1;    //Worth of Button 3, Range is 1-12
    var worthFour = Math.floor(Math.random() * 12) + 1;     //Worth of Button 4, Range is 1-12

    //Display out the Target Number 
    $("#targetScore").text("Aiming for: " + targetNum);

    //If Player Clicks on Button 1 
    $("#crystalOne").on("click", function () {
        //Make Sure Player has not Won or Went Over
        if (playerScore < targetNum) {
            playerScore += worthOne;
            $("#currentScore").text("Current Score: " + playerScore);

            //Player Has Matched Their Score to Target Number and Won
            if (playerScore == targetNum) {
                nWins++;
                $("#numWins").text("Wins: " + nWins);
                $("#resultMsg").css("color", "green");
                $("#resultMsg").text("You Did It!!")
                $("#resultMsg").show();
            }
            //Player Has Went Over the Target Number and Lost
            else if (playerScore > targetNum) {
                nLosses++;
                $("#numLosses").text("Losses: " + nLosses);
                $("#resultMsg").css("color", "red");
                $("#resultMsg").text("You Went Over!!");
                $("#resultMsg").show();
            }
        }
    });

    //If Player Clicks on Button 2 
    $("#crystalTwo").on("click", function () {
        //Make Sure Player has not Won or Went Over
        if (playerScore < targetNum) {
            playerScore += worthTwo;
            $("#currentScore").text("Current Score: " + playerScore);

            //Player Has Matched Their Score to Target Number and Won
            if (playerScore == targetNum) {
                nWins++;
                $("#numWins").text("Wins: " + nWins);
                $("#resultMsg").css("color", "green");
                $("#resultMsg").text("You Did It!!")
                $("#resultMsg").show();
            }
            //Player Has Went Over the Target Number and Lost
            else if (playerScore > targetNum) {
                nLosses++;
                $("#numLosses").text("Losses: " + nLosses);
                $("#resultMsg").css("color", "red");
                $("#resultMsg").text("You Went Over!!");
                $("#resultMsg").show();
            }
        }
    });

    //If Player Clicks on Button 3 
    $("#crystalThree").on("click", function () {
        //Make Sure Player has not Won or Went Over
        if (playerScore < targetNum) {
            playerScore += worthThree;
            $("#currentScore").text("Current Score: " + playerScore);

            //Player Has Matched Their Score to Target Number and Won
            if (playerScore == targetNum) {
                nWins++;
                $("#numWins").text("Wins: " + nWins);
                $("#resultMsg").css("color", "green");
                $("#resultMsg").text("You Did It!!");
                $("#resultMsg").show();

            }
            //Player Has Went Over the Target Number and Lost
            else if (playerScore > targetNum) {
                nLosses++;
                $("#numLosses").text("Losses: " + nLosses);
                $("#resultMsg").css("color", "red");
                $("#resultMsg").text("You Went Over!!");
                $("#resultMsg").show();
            }
        }
    });

    //If Player Clicks on Button 4
    $("#crystalFour").on("click", function () {
        //Make Sure Player has not Won or Went Over
        if (playerScore < targetNum) {
            playerScore += worthFour;
            $("#currentScore").text("Current Score: " + playerScore);

            //Player Has Matched Their Score to Target Number and Won
            if (playerScore == targetNum) {
                nWins++;
                $("#numWins").text("Wins: " + nWins);
                $("#resultMsg").css("color", "green");
                $("#resultMsg").text("You Did It!!");
                $("#resultMsg").show();
            }
            //Player Has Went Over the Target Number and Lost
            else if (playerScore > targetNum) {
                nLosses++;
                $("#numLosses").text("Losses: " + nLosses);
                $("#resultMsg").css("color", "red");
                $("#resultMsg").text("You Went Over!!");
                $("#resultMsg").show();
            }
        }
    });

    //If Player Clicks on New Round Button 
    $("#resetBtn").on("click", function () {
        //Reset Player Score, New Target Number and Each Button is Worth a Different Amount
        playerScore = 0;
        targetNum = Math.floor(Math.random() * 102) + 19;
        worthOne = Math.floor(Math.random() * 12) + 1;
        worthTwo = Math.floor(Math.random() * 12) + 1;
        worthThree = Math.floor(Math.random() * 12) + 1;
        worthFour = Math.floor(Math.random() * 12) + 1;

        //Output New Target Number 
        $("#targetScore").text("Aiming for: " + targetNum);
        $("#currentScore").text("Current Score: "+playerScore);

        //Hide Win/Lost Message
        $("#resultMsg").hide();

    });

});

var score = $("#score").text();
var wins = 0;
var losses = 0;
var gamePlaying = true;
var ranNum = function () {
    return Math.floor(Math.random() * 12 + 1);
};

$(document).ready(function () {

    var crystalSet = function () {
        $("#crystal1").attr("value", ranNum);
        $("#crystal2").attr("value", ranNum);
        $("#crystal3").attr("value", ranNum);
        $("#crystal4").attr("value", ranNum);
    };
    crystalSet();

    function numberRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    var randomNum = numberRange(19, 120);
    $("#randomNum").text(randomNum);
    var range = randomNum;


    $(".crystal").on("click", function () {

        value = $(this).attr("value")
        $("#score").text(parseInt(score) + parseInt(value));
        score = $("#score").text();
        console.log(score);

        if (gamePlaying) {

            if (score == randomNum) {
                wins++;
                $("#wins").text(wins);
                $("#score").text("0");
                $("#winOrLose").text("You win!");
                score = 0;
                randomNum = numberRange(19, 120);
                $("#randomNum").text(randomNum);
                crystalSet();
                gamePlaying = false;
            } else if (score > randomNum) {
                losses++;
                $("#losses").text(losses);
                $("#score").text("0");
                $("#winOrLose").text("You lose!");
                score = 0;
                randomNum = numberRange(19, 120);
                $("#randomNum").text(randomNum);
                crystalSet();
                gamePlaying = false;
            }
        } else {
            gamePlaying = true;
            $("#winOrLose").empty();
        };
    });
});
$(document).ready(function() {
    var randomTarget = Math.floor(Math.random() * 120) + 19;
    var crystalOne = Math.floor(Math.random() * 12) + 1;
    var crystalTwo = Math.floor(Math.random() * 12) + 1;
    var crystalThree = Math.floor(Math.random() * 12) + 1;
    var crystalFour = Math.floor(Math.random() * 12) + 1;
    var userTotal = 0;
    var wins = 0;
    var loss = 0;
    $("#targetnumber").html(randomTarget);
    $("#crystal1").click(function() {
        count(crystalOne);
    });
    $("#crystal2").click(function() {
        count(crystalTwo);
    });
    $("#crystal3").click(function() {
        count(crystalThree);
    });
    $("#crystal4").click(function() {
        count(crystalFour);
    });
    function restart() {
        randomTarget = Math.floor(Math.random() * 120) + 19;
        $("#targetnumber").html(randomTarget);
        crystalOne = Math.floor(Math.random() * 15) + 1;
        crystalTwo = Math.floor(Math.random() * 15) + 1;
        crystalThree = Math.floor(Math.random() * 15) + 1;
        crystalFour = Math.floor(Math.random() * 15) + 1;
        userTotal = 0;
        $("#userClickedTotal").html(userTotal);
    }
    function count(event) {
        console.log(userTotal);
        userTotal += event;
        $("#userClickedTotal").empty();
        $("#userClickedTotal").append(userTotal);
        if (userTotal === randomTarget) {
            wins++;
            $("#windigit").html(wins);
            restart();
        }
        else if (userTotal > randomTarget) {
            loss++;
            $("#lossdigit").html(loss);
            restart();
        }
    }
});
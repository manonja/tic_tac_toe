$(document).ready(function(){
    // Determine player's turn
    var turn;
    // Stores the ids that we will check later for a winner
    var turns=["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    // Determine computer's turn
    var computersTurn;
    // keeps track if there is a winner or not
    var gameOn = false;
    //keep track of the players and computer turn so no loop
    var count=0;
    // trigger modal onload
    startGame();
    // Player choose between X and O
    playerChoice();




    function computerTurn(){
        var squareTaken=false;
        while(squareTaken === false && count !==5){
            // Generate computer random turn
            var computerMove = (Math.random()*10).toFixed();
            var move= $("#" + computerMove).text();
            if(move ==="#"){
                $("#"+computerMove).text(computersTurn);
                //then we allow the move
                squareTaken=true;
                turns[computerMove] = computersTurn;
            }
        }
    }

    function playerTurn(turn, id){
        var squareClicked = $("#" + id).text();
        if(squareClicked === "#"){
            // keep tracks
            count++;
            turns[id]= turn;
            $("#"+id).text(turn);
            // verify the win condition
            winCondition(turns, turn);
            if(gameOn === false){
                computerTurn();
                winCondition(turns, computerTurn);
            }
        }
    }

// Check all the win conditions. Game is on until no win condition.
function winCondition(turnArray, currentTurn){
    if (turnArray[0] === currentTurn && turnArray[1] === currentTurn &&
    turnArray[2] === currentTurn) {
        gameOn = true;
        alert("Player " + currentTurn + " wins!");
        reset();
    } else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn &&
    turnArray[5] === currentTurn) {
        gameOn = true;
        alert("Player " + currentTurn + " wins!");
        reset();
    } else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn &&
    turnArray[8] === currentTurn) {
        gameOn = true;
        alert("Player " + currentTurn + " wins!");
        reset();
    } else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn &&
    turnArray[6] === currentTurn) {
        gameOn = true;
        alert("Player " + currentTurn + " wins!");
        reset();
    } else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn &&
    turnArray[7] === currentTurn) {
        gameOn = true;
        alert("Player " + currentTurn + " wins!");
        reset();
    } else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn &&
    turnArray[8] === currentTurn) {
        gameOn = true;
        alert("Player " + currentTurn + " wins!");
        reset();
    } else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn &&
    turnArray[8] === currentTurn) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins!");
        reset();
    } else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn &&
    turnArray[6] === currentTurn) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins!");
        reset();
    } else {
        /* the Win condition is not met so the game goes on and queue
        the computer's turn */
        gameOn = false;
    }

}



$(".play").click(function(){
    var store = $(this).attr("id");
    playerTurn(turn, store);
});


function reset(){
    turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"];
    count = 0;
    $(".play").text("#");
    gameOn = false;
    startGame();
}

function startGame(){
    $(".animated").hide();
    $(".animatedPlayer").hide();
    // bounce effect onCLick
    $("#X,#O").click(function(){
      $("#greetings, .animated").show();
    });
    // trigger Modal
    $('#myModal').modal({
        show: true,
        backdrop: false
    });

}

function playerChoice(){
    // Change player's turn to X and computer to O
    $("#X").click(function(){
        turn = "X";
        computersTurn="O";
        $("#playerX").show();
        reset();
    });

    // change player's turn to O and computer to X
    $("#O").click(function(){
        turn = "O";
        computersTurn="X";
        $("#playerO").show();
        reset();
    });

}

});

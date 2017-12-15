$(document).ready(function(){
    // Determine player's turn
    var myTurn;
    // Stores the ids that we will check later for a winner
    var turns=["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    // Determine computer's turn
    var computersTurn;
    // Check if the winning confition is true;
    var winner = false;
    //keep track of the players and computer
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

    function playerTurn(myTurn, id){
        var squareClicked = $("#" + id).text();
        if(squareClicked === "#"){
            // keep tracks
            count++;
            turns[id]= myTurn;
            $("#"+id).text(myTurn);
            // verify the win condition
            winCondition(turns, myTurn);
            if(winner === false){
                computerTurn();
                winCondition(turns, computersTurn);
            }
        }
    }

// Check all the win conditions. Game is on until no win condition.
function winCondition(turnArray, currentTurn){
    if (turnArray[0] === currentTurn && turnArray[1] === currentTurn &&
    turnArray[2] === currentTurn) {
        winner = true;
        alert("Player " + currentTurn + " wins!");
        reset();
    } else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn &&
    turnArray[5] === currentTurn) {
        winner = true;
        alert("Player " + currentTurn + " wins!");
        reset();
    } else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn &&
    turnArray[8] === currentTurn) {
        winner = true;
        alert("Player " + currentTurn + " wins!");
        reset();
    } else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn &&
    turnArray[6] === currentTurn) {
        winner = true;
        alert("Player " + currentTurn + " wins!");
        reset();
    } else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn &&
    turnArray[7] === currentTurn) {
        winner = true;
        alert("Player " + currentTurn + " wins!");
        reset();
    } else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn &&
    turnArray[8] === currentTurn) {
        winner = true;
        alert("Player " + currentTurn + " wins!");
        reset();
    } else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn &&
    turnArray[8] === currentTurn) {
        winner = true;
        reset();
        alert("Player " + currentTurn + " wins!");
        reset();
    } else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn &&
    turnArray[6] === currentTurn) {
        winner = true;
        reset();
        alert("Player " + currentTurn + " wins!");
        reset();
    } else {
        /* the Win condition is not met so the game goes on and queue
        the computer's turn */
        winner = false;
    }

}

// Store values when the player click on squares
// Calls playerTurn to check the turn with ids
$(".play").click(function(){
    var store = $(this).attr("id");
    playerTurn(myTurn, store);
});


function reset(){
    turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"];
    count = 0;
    $(".play").text("#");
    winner = false;
    modalTrigger();
}

function modalTrigger(){
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
        myTurn = "X";
        computersTurn="O";
        $("#playerX").show();
        $("#playerO").hide();
        reset();
    });

    // change player's turn to O and computer to X
    $("#O").click(function(){
        myTurn = "O";
        computersTurn="X";
        $("#playerO").show();
        $("#playerX").hide();
        reset();
    });

}

});

import React from "react";


function EndGame() {
  return (
      
    <div className="end-game-screen">
        <h3 className = "win-text">Congratulations!</h3>
        <h3 className = "win-text1">You won the memory game in x seconds</h3>
        <button class="button-38" role="button" onClick="history.go(0)">Play Again </button>

        &nbsp;&nbsp;&nbsp;
        <button class="button-38" role="button1">Scoreboard</button>



    </div>  );
}

export default EndGame;
const Game = document.querySelector("#grid");
const Cell = document.querySelectorAll(".row > .cell");
const Win = document.querySelector(".win-display");
const Replay = document.querySelector("#replay");

let Score1 = 0;
let Score2 = 0;
let Turn = 0;
document.getElementById("currentPlayer").textContent = "Joueur 1";

Cell.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerHTML == "") {
      if (Turn == 0) {
        cell.innerHTML = "X";
        document.getElementById("currentPlayer").textContent = "Joueur 2";
        Turn = 1;
      } else {
        cell.innerHTML = "O";
        document.getElementById("currentPlayer").textContent = "Joueur 1";
        Turn = 0;
      }
      Vertical();
      Horizontal();
      Diagonal();
      Nul();
    }
  });

  function Vertical() {
    let Player1Score = 0;
    let Player2Score = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const rowcell = Cell[i * 3 + j];
        if (rowcell.innerHTML == "X") {
          Player1Score++;
          if (Player1Score == 3) {
            alert("Joueur 1 a gagné !");
            Score1++;
            Reset();
            document.getElementById("playerOne").textContent = Score1;
          }
        } else {
          Player1Score = 0;
        }
        if (rowcell.innerHTML == "O") {
          Player2Score++;
          if (Player2Score == 3) {
            alert("Joueur 2 a gagné !");
            Score2++;
            Reset();
            document.getElementById("playerTwo").textContent = Score2;
          }
        } else {
          Player2Score = 0;
        }
      }
    }
  }

  function Horizontal() {
    let Player1Score = 0;
    let Player2Score = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const rowcell = Cell[j * 3 + i];
        if (rowcell.innerHTML == "X") {
          Player1Score++;
          if (Player1Score == 3) {
            alert("Joueur 1 a gagné !");
            Score1++;
            Reset();
            document.getElementById("playerOne").textContent = Score1;
          }
        } else {
          Player1Score = 0;
        }
        if (rowcell.innerHTML == "O") {
          Player2Score++;
          if (Player2Score == 3) {
            alert("Joueur 2 a gagné !");
            Score2++;
            Reset();
            document.getElementById("playerTwo").textContent = Score2;
          }
        } else {
          Player2Score = 0;
        }
      }
      Player1Score = 0;
      Player2Score = 0;
    }
  }

function Nul() {
  let cellsFilled = 0;
  Cell.forEach((cell) => {
    if (cell.innerHTML !== "") {
      cellsFilled++;
    }
  });
  if (cellsFilled === 9) {
    alert("Match nul !");
    Reset();
  }
}

function Diagonal() {
    let Player1Score = 0;
    let Player2Score = 0;
  
    // Diago 1
    for (let i = 0; i < 3; i++) {
      const rowcell = Cell[i * 3 + i];
      if (rowcell.innerHTML == "X") {
        Player1Score++;
        if (Player1Score == 3) {
          alert("Joueur 1 a gagné !");
          Score1++;
          Reset();
          document.getElementById("playerOne").textContent = Score1;
        }
      } else {
        Player1Score = 0;
      }
      if (rowcell.innerHTML == "O") {
        Player2Score++;
        if (Player2Score == 3) {
          alert("Joueur 2 a gagné !");
          Score2++;
          Reset();
          document.getElementById("playerTwo").textContent = Score2;
        }
      } else {
        Player2Score = 0;
      }
    }
  
    Player1Score = 0;
    Player2Score = 0;

    // Diago 2
    for (let i = 0; i < 3; i++) {
      const rowcell = Cell[i * 3 + (2 - i)];
      if (rowcell.innerHTML == "X") {
        Player1Score++;
        if (Player1Score == 3) {
          alert("Joueur 1 a gagné !");
          Score1++;
          Reset();
          document.getElementById("playerOne").textContent = Score1;
        }
      } else {
        Player1Score = 0;
      }
      if (rowcell.innerHTML == "O") {
        Player2Score++;
        if (Player2Score == 3) {
          alert("Joueur 2 a gagné !");
          Score2++;
          Reset();
          document.getElementById("playerTwo").textContent = Score2;
        }
      } else {
        Player2Score = 0;
      }
    }
  }
  


  function Reset() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const rowcell = Cell[j * 3 + i];
        rowcell.innerHTML = "";
      }
    }
  }

  Replay.addEventListener("click", () => {
    Score1 = 0;
    Score2 = 0;
    document.getElementById("playerOne").textContent = Score1;
    document.getElementById("playerTwo").textContent = Score2;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const rowcell = Cell[j * 3 + i];
        rowcell.innerHTML = "";
      }
    }
  });
});

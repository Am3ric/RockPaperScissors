var meChoice;
var iaChoice;
let game = ["Rock", "Paper", "Scissors"];
var scoreIa = 0;
var scoreMe = 0;
document.getElementById("ia").innerHTML = "0";
document.getElementById("me").innerHTML = "0";


function play(iaselect, meselect) {
    
    if (iaselect == "Rock" && meselect == "Paper") {
        scoreMe += 1;
        scoreIa += 0;
        document.getElementById("gg").innerHTML = "Hai vinto, " + meselect + " batte " + iaselect;
      } else if (iaselect == "Paper" && meselect == "Scissors") {
        scoreMe += 1;
        scoreIa += 0;
        document.getElementById("gg").innerHTML = "Hai vinto, " + meselect + " batte " + iaselect;
      } else if (iaselect == "Scissors" && meselect == "Rock") {
        scoreMe += 1;
        scoreIa += 0;
        document.getElementById("gg").innerHTML = "Hai vinto, " + meselect + " batte " + iaselect;
      } else if (iaselect == "Paper" && meselect == "Rock") {
        scoreIa += 1;
        scoreMe += 0;
        document.getElementById("gg").innerHTML = "Hai perso, " + iaselect + " batte " + meselect;
      } else if (iaselect == "Scissors" && meselect == "Paper") {
        scoreIa += 1;
        scoreMe += 0;
        document.getElementById("gg").innerHTML = "Hai perso, " + iaselect + " batte " + meselect;
      } else if (iaselect == "Rock" && meselect == "Scissors") {
        scoreIa += 1;
        scoreMe += 0;
        document.getElementById("gg").innerHTML = "Hai perso, " + iaselect + " batte " + meselect;
      } else if (iaselect == meselect) {
        scoreIa += 0;
        scoreMe += 0;
        document.getElementById("gg").innerHTML = "Pareggio, " + iaselect + " è uguale a  " + meselect;
      }
      document.getElementById("ia").innerHTML = scoreIa;
      document.getElementById("me").innerHTML = scoreMe;

  }

  function getIa(){
    iaRandom = Math.floor(Math.random() * game.length);
    iaChoice = game[iaRandom];
  }



  function rock() {
    meChoice = game[0];

    
    main()
  }
  
  function paper() {
    meChoice = game[1];
    
    main()
  }
  
  function scissors() {
    meChoice = game[2];
    
    main()
  }
function ricominciare(){
    scoreIa = 0;
    scoreMe = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("gg").innerHTML = "";
    document.getElementById("ia").innerHTML = scoreIa;
    document.getElementById("me").innerHTML = scoreMe;
    document.getElementById("rock").style.display = "inline-block";
    document.getElementById("paper").style.display = "inline-block";
    document.getElementById("scissors").style.display = "inline-block";
    document.getElementById("ch").style.display = "inline";
    document.getElementById("gg").style.display = "inline";
    document.getElementById("ricom").style.display = "none";

}
function main(){
    getIa();


    play(iaChoice, meChoice, scoreIa, scoreMe);

    if (scoreIa == 5) {
        document.getElementById("result").innerHTML = "Hai perso, ciolone";
        document.getElementById("rock").style.display = "none";
        document.getElementById("paper").style.display = "none";
        document.getElementById("scissors").style.display = "none";
        document.getElementById("ch").style.display = "none";
        document.getElementById("gg").style.display = "none";
        document.getElementById("ricom").style.display = "flex";
    } else if (scoreMe == 5) {
        document.getElementById("result").innerHTML = "Hai vinto, ciolone";
        document.getElementById("rock").style.display = "none";
        document.getElementById("paper").style.display = "none";
        document.getElementById("scissors").style.display = "none";
        document.getElementById("ch").style.display = "none";
        document.getElementById("gg").style.display = "none";
        document.getElementById("ricom").style.display = "flex";
    }


}
const WORD = "ELIO";
const WINNER = document.getElementById("winner");
const BODY = document.getElementsByTagName("body")[0];
var showAnswer = document.getElementById("showAnswer");
var answer = document.getElementById("answer");
var life = 4;
var letras = 0;
  // window.onload = function(){
  //   WINNER.style.display = "none";
  // }

  function game(){
  
    if(life > 0){//NO USO CICLO PORQUE LA PALABRA ES MUY PEQUEÑA, Y NO SERA VARIABLE
      if(answer.value.toUpperCase() == WORD[0] || answer.value.toUpperCase() == WORD[1]
          || answer.value.toUpperCase() == WORD[2]  || answer.value.toUpperCase() == WORD[3]){
            showAnswer.value += answer.value;
            answer.value = "";
            answer.focus();
            if(showAnswer.value.toUpperCase() == "ELIO"){
              winner();
            }
          }else{
            alert("Ups, incorrecto");
            life--;
            showAnswer.value = "";
            answer.value = "";
            draw(life);
          }

    }else{
      alert("FIN DEL JUEGO.");
      winner();
    }

}

function draw(life){
  let draw = document.getElementById("draw");

}

function winner(){
  WINNER.style.left = "0px";
   BODY.classList.add("showWinner");
}

function newGame(){
  life = 4;
  WINNER.removeAttribute('style');
  BODY.classList.remove("showWinner");
  showAnswer.value = "";  
  answer.value = "";

}

function exit(){
  if (confirm("¿Está seguro de no jugar más?")) {
    window.close();
  }
}

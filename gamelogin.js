function login() {
    player1_name = document.getElementById("p1_input").value;
    player2_name = document.getElementById("p2_input").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location = "quiz_game.html";
}
function login2(){
    var score = 0;

    function update() {
        score = score + 1;
        document.getElementById("score").innerHTML = "score" + score;
    }
    
    function saveitem() {
    localStorage.setItem("score", score);
    }
    
    function next() {
        window.location = "quiz_game.html";
    }
}


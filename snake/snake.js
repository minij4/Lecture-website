//kintamieji
const N = 15;
var X = 5;//gyvatės ilgis
var snk = 0;
var SNK = [];
//maistas
var food = 0;
var foodId;
//kliutims
var OBS = [];
var obs = 0;
var putRock = 0;
//taskam
var score = 0;
//zirkles
var sciId;
var sci = 0;
// dinamitas
var dynId;
var dyn = 0;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Table(){
    for(let i = 0; i < N; i++){
        let row1 = document.createElement('tr');
        document.getElementById('fftable').appendChild(row1);
        for(let j = 0; j < N; j++){
            let col1 = document.createElement('td');
            document.getElementById('fftable').appendChild(col1);
            col1.id='col'+i+j;    // ląstelių id
        }
    }
}
function endGame(event){
    document.body.innerHTML = '<p id="gameOver">GAME OVER</p>';
    document.body.innerHTML += '<p id="result">Your score: ' + score + '</p>';
    document.body.innerHTML += '<center><a id="restartButton" href="snake.html">RESTART</a></center>';
}
function makeFood(){
    if(food == 0 && dyn == 0 && sci ==0){
        foodId = 'col' + Math.floor(Math.random()*(N+1)) + Math.floor(Math.random()*(N+1));
        while(SNK.indexOf(foodId) !== -1 || OBS.indexOf(foodId) !== -1){
            foodId = 'col' + Math.floor(Math.random()*(N+1)) + Math.floor(Math.random()*(N+1));
        }
        var rand = Math.floor(Math.random()*4)

        if(rand == 0){
            document.getElementById(foodId).style.backgroundImage = 'url("./image/icecream.png")';
        }else if(rand == 1){
            document.getElementById(foodId).style.backgroundImage = 'url("./image/berries.png")';
        }else if(rand == 2){
            document.getElementById(foodId).style.backgroundImage = 'url("./image/hamburger.png")';
        }else{
            document.getElementById(foodId).style.backgroundImage = 'url("./image/frog.png")';
        }
        food = 1;
    }
}
function scissors(){
    if(score % 50 == 0){
        sciId = 'col' + Math.floor(Math.random()*(N+1)) + Math.floor(Math.random()*(N+1));
        while(SNK.indexOf(sciId) !== -1 || OBS.indexOf(sciId) !== -1){
            sciId = 'col' + Math.floor(Math.random()*(N+1)) + Math.floor(Math.random()*(N+1));
        }
        document.getElementById(sciId).style.backgroundImage = 'url("./image/scissors.png")';
        sci = 1;
    }
}
function obstacles(){
    if(score % 10 == 0){
        var obstId = 'col' + Math.floor(Math.random()*(N+1)) + Math.floor(Math.random()*(N+1));
        while(SNK.indexOf(obstId) !== -1 || OBS.indexOf(obstId) !== -1){
            obstId = 'col' + Math.floor(Math.random()*(N+1)) + Math.floor(Math.random()*(N+1));
        }
        document.getElementById(obstId).style.backgroundImage = 'url("./image/rock.png")';
        obs++;
        OBS.push(obstId);   
    }
}
function dynamit(){
    if(score % 50 == 0){
        dynId = 'col' + Math.floor(Math.random()*(N+1)) + Math.floor(Math.random()*(N+1));
        while(SNK.indexOf(dynId) !== -1 || OBS.indexOf(dynId) !== -1){
            dynId = 'col' + Math.floor(Math.random()*(N+1)) + Math.floor(Math.random()*(N+1));
        }
        document.getElementById(dynId).style.backgroundImage = 'url("./image/dynamit.png")';
        dyn = 1;
    }
}
// uždeda paveiksliukus
function snakeBody(){
    for(let i = 0; i < SNK.length; i++){
        if(i == SNK.length-1){
            document.getElementById(SNK[i]).style.backgroundImage = 'url("./image/head3.png")';//galva

        }else{
            document.getElementById(SNK[i]).style.backgroundImage = 'url("./image/tail3.png")';//uodega
        }
    }
}
function Snake(event){
    //atsitrenkus į uodegą
    if(event.target.id == SNK[SNK.length-2] && event.target.style.backgroundImage == 'url("./image/tail3.png")'){
        return;
    }
    for(let i = 0; i < SNK.length; i++){
        if(event.target.id == SNK[i] && event.target.style.backgroundImage == 'url("./image/tail3.png")'){
            endGame();
        }
    }
    //saugo gyvatės id
    SNK.push(event.target.id);
    snk++;
    if(snk > X){
        document.getElementById(SNK[0]).style.backgroundImage = 'url("")';
        SNK.shift();
        snk = X;
    }
    makeFood();
    for(let i = 0; i < SNK.length; i++){
        if(SNK[i] == foodId){
            score = score + 5;
            //
            obstacles();

            var randNr = Math.floor(Math.random()*10);
            if(randNr % 2 == 0){
                scissors();
            }else{
                dynamit();
            }//
            document.getElementById("score").innerHTML = "score: " + score;
            X++;
            food = 0;

            document.getElementById(foodId).style.backgroundImage = 'url("")';
            foodId = 0;
        }   
    }
    snakeBody(); 
    //kliūtys
    for(let i = 0; i < OBS.length; i++){
        if(SNK.indexOf(OBS[i]) !== -1){
            endGame();
        }
    }
    //zirkles
    if(event.target.id == sciId && sci == 1){
        for(let i = 0; i < 5; i++){
            document.getElementById(SNK[0]).style.backgroundImage = 'url("")';
            SNK.shift();
        }
        score = score + 5;
        document.getElementById("score").innerHTML = "score: " + score;

        X = X - 5;
        snk = X;
        sciId = 0;
        sci = 0;
    }
    //dynamits
    if(event.target.id == dynId && dyn == 1){

        for(let i = 0; i < Math.floor(OBS.length * 80 / 100); i++){
            document.getElementById(OBS[0]).style.backgroundImage = "";
            OBS.shift();
        }
        score = score + 5;
        document.getElementById("score").innerHTML = "score: " + score;

        dynId = 0;
        dyn = 0;
    }
}
function steps(){
    //išėjimas iš ribos
    document.getElementById('fftable').addEventListener('mouseleave', endGame);
    //fiksuoja pelės vedžiojimą
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            document.getElementById('col'+i+j).addEventListener('mouseover', Snake);
        }
    }
}
//fiksuoja pirmą paspaudimą
function startPoint(event){
    document.getElementById("snake").style.backgroundImage = 'url("")';
    Snake(event);//////////////////////////////////////////////////////////id
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            document.getElementById('col'+i+j).removeEventListener('click', startPoint);
        }
    }
    steps();
}
//uždeda visom ląstelėm galimybę būti pirmoms
function setStart(){
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            document.getElementById('col'+i+j).addEventListener('click', startPoint);
        }
    }
}
function Game(){
    Table();
    setStart();
}

Game();


const N = 15;
var X = 5;//gyvatės ilgis
var red = 0;
var RED = [];

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
function generateTable(){
    let table = document.createElement('table');
    table.id = "fftable";//lentelės id
    document.getElementById("ffTable").appendChild(table);
    
    Table();
}
function endGame(event){
    document.body.innerHTML = '<p id="gameOver">GAME OVER</p>';
    document.body.innerHTML += '<p id="result">Your score: ' + score + '</p>';
    document.body.innerHTML += '<center><a id="restartButton" href="snake.html">RESTART</a></center>';
}
//kartais atsiranda ant akmens
function makeFood(){
    if(food == 0){
        foodId = 'col' + Math.floor(Math.random()*11) + Math.floor(Math.random()*11);
        for(let i = 0; i < RED.length; i++){
            while(RED[i] == foodId || OBS[i] == foodId){
                foodId = 'col' + Math.floor(Math.random()*11) + Math.floor(Math.random()*11);
            }
        }

        document.getElementById(foodId).style.backgroundImage = 'url("./image/icecream1.png")';
        food = 1;
    }
}
function scissors(){
    if(score % 20 == 0 && score > 0 && sci == 0){
        sciId = 'col' + Math.floor(Math.random()*11) + Math.floor(Math.random()*11);

        for(let i = 0; i < RED.length; i++){
            while(RED[i] == sciId || OBS[i] == sciId){
                sciId = 'col' + Math.floor(Math.random()*11) + Math.floor(Math.random()*11);
            }
        }
        document.getElementById(sciId).style.backgroundImage = 'url("./image/scissors.png")';
        sci=1;

    }
}
function obst(){
    if(score % 10 == 0){
        var obstId = 'col' + Math.floor(Math.random()*11) + Math.floor(Math.random()*11);

        for(let i = 0; i < RED.length; i++){
            while(RED[i] == obstId || OBS[i] == obstId){
                obstId = 'col' + Math.floor(Math.random()*11) + Math.floor(Math.random()*11);
            }
        }
        
        document.getElementById(obstId).style.backgroundImage = 'url("./image/rock.png")';
        obs++;
        OBS.push(obstId);   
    }
}
// uždeda paveiksliukus
function head(){

    for(let i = 0; i < RED.length; i++){
        if(i == RED.length-1){
            document.getElementById(RED[i]).style.backgroundImage = 'url("./image/head3.png")';
        }else{
            document.getElementById(RED[i]).style.backgroundImage = 'url("./image/tail3.png")';
        }
    }
}
function clearHead(){
    document.getElementById(RED[RED.length - 1]).style.backgroundImage = 'url("")';
}
function turnRed(event){
    //atsitrenkus į uodegą
    for(let i = 0; i < RED.length; i++){
        if(event.target.id == RED[i] && event.target.style.backgroundImage == 'url("./image/tail3.png")'){
            endGame();
            return;
        }
    }

   
    if(red > 0){
        clearHead();
    }

    //saugo gyvatės id
    RED.push(event.target.id);
    red++;
    if(red > X){
        document.getElementById(RED[0]).style.backgroundImage = 'url("")';
        RED.shift();
        red = X;
    }
    
    //maistas

    makeFood();


    for(let i = 0; i < RED.length; i++){
        if(RED[i] == foodId){
            score = score + 5;
            
            obst();
            
            document.getElementById("score").innerHTML = "score: " + score;
            X++;
            food = 0;
            
            document.getElementById(foodId).style.backgroundImage = 'url("")';
        }
    }
    head(); 

    
    for(let i = 0; i < RED.length; i++){
        for(let j = 0; j < OBS.length; j++){
            if(RED[i] == OBS[j]){
                endGame();
            }
        }
    }
    
    scissors();
    ////neveikia
    

    if(event.target.id == sciId && sci == 1){
        for(let i = 0; i < 5; i++){
            document.getElementById(RED[i]).style.backgroundImage = 'url("")';

            RED.pop();
        }
        score = score + 5;
        document.getElementById("score").innerHTML = "score: " + score;

        X = X - 5;
        red = X;
        sci = 0;
        sciId = 0;
    }
}
function steps(){
    //išėjimas iš ribos
    document.getElementById('fftable').addEventListener('mouseleave', endGame);


    //fiksuoja pelės vedžiojimą
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            document.getElementById('col'+i+j).addEventListener('mouseover', turnRed);
        }
    }
}
//fiksuoja pirmą paspaudimą
function startPoint(event){
    document.getElementById("snake").style.backgroundImage = 'url("")';
    turnRed(event);//////////////////////////////////////////////////////////id
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            document.getElementById('col'+i+j).removeEventListener('click', startPoint);
        }
    }

    steps();
}
//uždeda visom ląstelėm galimybę būti pirmoms
function setEvent(){
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            document.getElementById('col'+i+j).addEventListener('click', startPoint);
        }
    }
}
//pagrindinė funkcija
function Game(){
    generateTable();
    setEvent();
}

Game();




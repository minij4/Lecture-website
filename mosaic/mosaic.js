
function hide (idToShow, idToHide){
    document.getElementById(idToShow).style.display = 'block';
    document.getElementById(idToHide).style.display = 'none';
}






function changeBackground(name){
    document.body.style.animationName = name;
    document.body.style.animationDuration = "4s";
    document.body.style.animationFillMode = "forwards";
}

function changeBorder(border){
    document.getElementById('mosaic').style.border = border;
}
function changeFontColor(color){
    document.getElementById('header').style.color = color;
}
function changeBackgroundImage(){
    document.body.style.backgroundImage = "url('../mosaic/img/background.png')";
}
function changeBackgroundImage1(){
    document.body.style.backgroundImage = "";
}
function changeTableBackground(color){
    document.getElementById('mosaic').style.backgroundColor = color;
}
function changeFontFamily(font){
    document.getElementById('header').style.fontFamily = font;
}
function addingLetterSpacing(space){
    document.getElementById('header').style.letterSpacing = space;
}
function addingText(text){
    document.getElementById('text').innerHTML = text;
}
function changeFontColor1(color){
    document.getElementById('text').style.color = color;
}
function addingLetterSpacing1(space){
    document.getElementById('text').style.letterSpacing = space;
}
function changeFontFamily1(font){
    document.getElementById('text').style.fontFamily = font;
}
function bold(weight){
    document.getElementsByTagName('a')[5].style.fontWeight = weight;
}
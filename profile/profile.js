var gender;
function radioBox(){
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var other = document.getElementById("other");

    if(male.checked){
        gender = "Vyras";
    }else if(female.checked){
        gender = "Moteris";
    }else{
        gender = "Kita";
    }
}

function checkBox(){
    var news = document.getElementById("news");
    var newspaper;

    if(news.checked==true){
        newspaper = "elektroniniai laiškai įjungti";
    }else if(news.checked==false){
        newspaper = "elektroniniai laiškai išjungti";
    }

    return newspaper;
}





function submit(){

    var dElement = document.getElementById("profile");
    var edc = document.getElementById("education");

    var name = dElement.elements[0].value;
    var surname = dElement.elements[1].value;
    var mail = dElement.elements[2].value;
    var birthDate = dElement.elements[3].value;

    var education = edc.options[edc.selectedIndex].text;
    
    
    radioBox();
    //checkBox();

    document.getElementById("data").innerHTML = "Duomenys sėkmingai pateikti" + "<br>";
    document.getElementById("data").innerHTML += "Jūsų duomenys: " + "<br>" + "<br>";
    document.getElementById("data").innerHTML += "Vardas: " + name + "<br>";
    document.getElementById("data").innerHTML += "Pavardė: " + surname + "<br>";
    document.getElementById("data").innerHTML += "Elektroninis paštas: " + mail + "<br>";
    document.getElementById("data").innerHTML += "Gimimo data: " + birthDate + "<br>";
    document.getElementById("data").innerHTML += "Lytis: " + gender + "<br>";
    document.getElementById("data").innerHTML += "Išsilavinimas: " + education + "<br>";
    document.getElementById("data").innerHTML += "Naujienos: " + checkBox() + "<br>";
}

function showButton(id){
    document.getElementById(id).style.display='block';
}
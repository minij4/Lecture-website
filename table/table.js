let rows;
let cols;


function getInput(){
    rows = window.prompt("Eilučių skaičius: ");
    cols = window.prompt("Stulpelių skaičius: ");
}

function generateTable(){
    for(let i = 0; i < rows; i++){
        document.getElementById('table').createElement('tr');
        
        for(let j = 0; j < cols; j++){
            document.getElementById('table').createElement('td');
        }
    }
}
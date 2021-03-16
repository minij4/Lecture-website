let color;
let colors = [];


function randColor() {
    
    color = "rgb(";

    for(let i = 0; i < 3; i++){
        let sk = Math.floor(Math.random()*256);
        if(i < 2){
            color = color + sk + ", ";
        }else{
            color = color + sk + ")";
        }
    }
}

function Table(row, col){
   
    for(let i = 0; i < row; i++){
        let row1 = document.createElement('tr');
        document.getElementById('table').appendChild(row1);
        row1.id="row"+i;
      
        for(let j = 0; j < col; j++){
            randColor();
            let col1 = document.createElement('td');
            document.getElementById('table').appendChild(col1);
            col1.id="col"+j;
            col1.style.backgroundColor = color;
        }
    }
}

function generateTable(){
    
    let table = document.createElement('table');
    table.id = "table";//id
    document.getElementById("fTable").appendChild(table);

   
    const row = window.prompt("Lentelės eilučių skaičius: ");
    const col = window.prompt("Lentelės stulpelių skaičius: ");


    Table(row, col);
}

generateTable();






let columns = 26 ;
let rows=100;
const headerContainer= document.querySelector(".header");
const serialNumberContainer = document.querySelector(".sno");
const mainContainer = document.querySelector(".main");

function createHeader(){
     for(let i=0 ; i<=columns ; i++){
        const headerCell=document.createElement("div");
        headerCell.className="header-cell cell";
        if(i !== 0){
            headerCell.innerText = String.fromCharCode(64+i) ;
        }
        headerContainer.appendChild(headerCell);
     }
}


function createSerialNumbercell(){
  for(let i = 1 ; i <= rows ;i++){
    const snoCell = document.createElement("div");
     snoCell.innerText = i;
     snoCell.className ="sno-cell cell";
     serialNumberContainer.appendChild(snoCell);
  }
}

function createRow(rowNumber){
    
    const row = document.createElement("div");
    row.className = "row";
    
    for(let i = 1 ; i <= columns ; i++){
      const cell = document.createElement("div");
      cell.className = "main-cell cell";
      cell.contentEditable = true;
      row.appendChild(cell);
      cell.id = String.fromCharCode(64+i) + rowNumber ;
     // adding focus eventlistner;
      cell.addEventListener("focus" ,onCellFocus);
      //add input eventlistner;
      cell.addEventListener("input" ,onFormChange);
    }

    mainContainer.appendChild(row);
}

function buildMainSection(){
   for(let i = 1 ; i <= rows ; i++){
    createRow(i);
   }
}

createHeader();
createSerialNumbercell();
buildMainSection();
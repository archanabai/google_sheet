const cellNamePlaceHolder = document.querySelector(".active-cell");
const form = document.querySelector("#form");
const fontFamilyInput = document.querySelector("#fontFamily");
const fontSizeInput = document.querySelector("#fontSize");
const searchBox = document.getElementById("searchBox");
const replaceBox = document.getElementById("replaceBox");
const cell = document.querySelectorAll(".cell");


let activeElement = null;

const state = {}

const defaultPropoties = {
   fontFamily: "san",
   fontSize: 16,
   color: "#000000",
   textAlign: "left",
   backgroundColor: "#ffffff",
   isBold: false,
   isItalic: false,
   isUnderLine: false,

}

function onCellFocus(event) {
   let elementId = event.target.id;
   cellNamePlaceHolder.value = elementId;
   activeElement = event.target;

   if (state[elementId]) {
      //already selected cell fill the options with the state of that cell
      resetOptions(state[elementId]);
   } else {

      //selected for the first tym,fill the options with default state;
      resetOptions(defaultPropoties);
   }
}
function resetOptions(optionsState) {
   //this function verifies is the cell is already selected or not looking in state object

   form.fontFamily.value = optionsState.fontFamily;
   form.fontSize.value = optionsState.fontSize;
   form.textalign.value = optionsState.textAlign;
   form.bold.checked = optionsState.isBold;
   form.italic.checked = optionsState.isItalic;
   form.underline.checked = optionsState.isUnderLine;
   form.textColor.value = optionsState.color;
   form.bgColor.value = optionsState.backgroundColor;
}


function onFormChange() {
   if (!activeElement) {
      form.reset();
      return;
   }


   let currentState = {
      textColor: form.textColor.value,
      backgroundColor: form.bgColor.value,
      fontSize: form.fontSize.value,
      fontFamily: form.fontFamily.value,
      isBold: form.bold.checked,
      isItalic: form.italic.checked,
      isUnderLine: form.underline.checked,
      textAlign: form.textalign.value,
   }
   //below 
  applyStylesToCell(currentState);

  state[activeElement.id] = {...currentState,value:activeElement.value};
}

function applyStylesToCell(styleObject){
    activeElement.style.fontSize =`${styleObject.fontSize}px`;
    activeElement.style.fontFamily=styleObject.fontFamily;
    activeElement.style.color = styleObject.textColor;
    activeElement.style.backgroundColor=styleObject.backgroundColor;
    activeElement.style.textAlign=styleObject.textAlign;

    if(styleObject.isBold){
      activeElement.style.fontWeight="bold";
    }
    if(styleObject.isItalic){
      activeElement.style.fontStyle="italic";
    }
    if(styleObject.isUnderLine){
      activeElement.style.textDecoration="underline";
    }

  
}

function replaceInnerText(){
   console.log(cell);
    cell.forEach((item)=>{
      // if(item.innerText == searchBox.value){
      //    item.innerText = replaceBox.value;

      // }
      console.log(item);
    })
}

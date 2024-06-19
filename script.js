function calculateKAccessories(){
 const priceOfKitchenAccessories=getInputValue('paisa-dedo');
 console.log(priceOfKitchenAccessories);
 const total=sumOfClicked('paisa-dedo',priceOfKitchenAccessories);
 console.log(total);
}
function calculateKBoards(){
    const priceOfKitchenBoards=getInputValue('paisa-for-board')
    console.log(priceOfKitchenBoards);
    const total=sumOfClicked('paisa-for-board',priceOfKitchenBoards);
    console.log(total);
}
function calculateKCooker(){
    const priceOfKCooker=getInputValue('paisa-for-cooker')
    console.log(priceOfKCooker);
}

function getInputValue(fieldId){
    const inputField=document.getElementById(fieldId);
    const inputValueText=inputField.innerText;
    const value=parseFloat(inputValueText);
    
    return value;
}
function sumOfClicked(totalFieldId, value) {
 
    const sum=parseFloat
   (document.getElementById(totalFieldId).innerText) + value;
   
   document.getElementById(totalFieldId).innerText =sum.toFixed(2)
       
   }
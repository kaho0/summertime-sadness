function calculateKAccessories(){
 const priceOfKitchenAccessories=getInputValue('paisa-dedo');
 console.log(priceOfKitchenAccessories);
}
function calculateKBoards(){
    const priceOfKitchenBoards=getInputValue('paisa-for-board')
    console.log(priceOfKitchenBoards);
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
// function sumOfClicked(fieldId,value){
//     const inputedValue=document.getElementById(fieldId);
//     let sum=0;
//     const totalPrice=sum+value;
//     return totalPrice;
// }
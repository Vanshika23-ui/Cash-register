const billAmount = document.querySelector("#bill-amount");
//to bring the input from html world to js.

// const checkButton = console.log(billAmount.value);
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

checkButton.addEventListener("click", function validateBillAndCashAmount() {
 
    if(billAmount.value >0) {

    }else {
        message.innerText = "The bill amount should be greater than 0";

    }
});


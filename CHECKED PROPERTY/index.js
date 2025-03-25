const checkbox = document.getElementById("checkbox");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const submit = document.getElementById("submit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

submit.onclick = function(){
    if(checkbox.checked){
        subresult.textContent = "You are Subscribed!";
    }
    else{
        subresult.textContent = "You are NOT Subscribed!";

    }
    if(visa.checked){
        paymentresult.textContent = "you are paying with Visa";
    }
    else if(mastercard.checked){
        paymentresult.textContent = "you are paying with MasterCard";
    }
    else if(paypal.checked){
        paymentresult.textContent = "you are paying with Paypal";
    }
    else{
        paymentresult.textContent = " You must select a payment type";
    }
}
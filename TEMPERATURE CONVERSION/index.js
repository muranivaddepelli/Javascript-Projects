
    const text = document.getElementById("textbox");
    const fahrenheit = document.getElementById("toFahrenheit");
    const celsius = document.getElementById("tocelsius");
    const result = document.getElementById("result");
    let temp;

   function convert(){
    if(fahrenheit.checked){
        temp=Number(text.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+"℉";
    }
   else if(celsius.checked){
    temp=Number(text.value);
    temp=(temp-32)*(5/9);
    result.textContent=temp.toFixed(1)+"C";

    }
    else{
        result.textContent="select a unit";
    }
   }
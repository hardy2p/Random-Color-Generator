const getColor=() =>{
    //Genrating a HEX CODE
    const randomNumber=Math.floor(Math.random()*1677215);
    const randomCode="#"+randomNumber.toString(16);
    console.log(randomNumber,randomCode);
    //Actual change to the background
    document.body.style.backgroundColor=randomCode;
    //Change to that actual text over there 
    document.getElementById("color-code").innerText=randomCode;
    //for copying to the clipboard
    navigator.clipboard.writeText(randomCode);
}
document.getElementById("btn1").addEventListener("click",getColor)
let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");



var svalue=' ';

for(item of buttons){
item.addEventListener("click",(event) =>{ 
    buttonText = event.target.innerText;
    if(buttonText=='x'){
    buttonText = '*';
    svalue += buttonText;
    screen.value=svalue;
    }else if(buttonText=='C'){

    svalue = " ";
    screen.value=svalue;


    }else if(buttonText=='='){

        screen.value = eval(svalue);
    
    
        }else{
             svalue+=buttonText;
            screen.value = svalue;
        }




   })
}
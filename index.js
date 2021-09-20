var display = document.getElementById('display');
buttons = document.querySelectorAll('button');
var screenValue = '';

for(item of buttons){
    item.addEventListener('click',(s)=>{
        buttonText = s.target.innerText;

        if(buttonText=='X'){
            buttonText = '*';
            screenValue += buttonText;
            display.value = screenValue;
        }
        else if (buttonText=='AC'){
            screenValue =  ' ';
            display.value = '';
        }
        else if (buttonText=='='){
            display.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            display.value = screenValue;

        }
    
    })
}
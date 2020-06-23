let a;
let date;
let time;
setInterval(() => {   
 a = new Date();
 date = a.toLocaleDateString();
 time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
document.getElementById("time").innerHTML = time + " on " + date;
}, 1000);

let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue="";
for(items of buttons){
    items.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('buttontext is :',buttonText);
        if(buttonText=='X'){
            buttonText='*'; 
            screenValue += buttonText;
            screen.value =screenValue;
        }
        else if(buttonText == 'C'){
            screenValue =  "";
            screen.value = screenValue;

        }
        else if(buttonText== '='){
            screen.value = eval(screenValue);

        }
        else{
            screenValue += buttonText;
            screen.value=screenValue;
        }

    })
}
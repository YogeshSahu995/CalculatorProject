const buttons = document.querySelectorAll('sec');
const display = document.querySelector('.inputContainer');

let buttonsArray = Array.from(buttons);
let str ='' ;
let arr;
buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML ==='DEL'){
            str = str.substring(0, str.length-1)
            display.value = str;
            console.log('luil')
        }
        else if(e.target.innerHTML === 'AC'){
            str = ''
            display.value = str;
        }
        else if(e.target.innerHTML === "="){
            str = eval(str);// it's convert string to code....
            display.value = str;
        }
        else{
            str += e.target.innerHTML;
            display.value = str;
        }
    })
})

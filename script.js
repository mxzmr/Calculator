let num1 = ''
let num2 = ''
let operator = ''
let dot = ''
let sum = ''
const equalBtn = document.querySelector("[class='equal']").addEventListener("click", operate)
const resetBtn = document.querySelector("[class='reset']").addEventListener("click", reset)
const backBtn = document.querySelector("[class='backspace']").addEventListener("click", backSpace)
const display = document.querySelector("[class='display']")
const container = document.querySelector("[class='container']")
document.querySelector("[class='dot']").addEventListener("click",dotLimit)

function add(num1,num2) {
    return Math.round((parseFloat(num1) + parseFloat(num2))*100)/100
}
function subtract(num1,num2){
    return  Math.round((num1 - num2)*100)/100
}
function multiply(num1, num2){
    return Math.round((num1 * num2) * 100)/ 100
}
function divide(num1, num2){
    if(num2 == 0) return "Why divide by 0?"
    else return Math.round((num1 / num2) * 100)/ 100
}
    

function operate() {
    if (operator =='+') {
        if (num1 ==''){
            sum = add(sum,num2)
            display.textContent = sum
        }
        else{
            sum = add(num1,num2)
            display.textContent = sum;
        }
    }
    else if (operator =='-') {
        if (num1 ==''){
            sum = subtract(sum,num2)
            display.textContent = sum
        }
        else{
            sum = subtract(num1,num2)
            display.textContent = sum
        }
    }
    else if (operator =='*') {
        if (num1 ==''){
            sum = multiply(sum,num2)
            display.textContent = sum
        }
        else{
            sum = multiply(num1,num2)
            display.textContent = sum
        }
    }
    else if (operator =='/') {
        if (num1 ==''){
            sum = divide(sum,num2)
            display.textContent = sum
        }
        else{
            sum = divide(num1,num2)
            display.textContent = sum
        }
    }
    operator = ''
    num1 = ''
    num2 = ''
    dot = ''
}

function dotLimit() {
    if (!operator){
        if(!dot){
        num1 += '.'
        dot = '.'
        display.textContent = num1
        }
    }
    else if (num2){
        if(!dot){ 
        num2 += '.'
        dot = '.'
        display.textContent = num2
        }
        else display.textContent = num2
        }
}

function reset(){ 
    display.textContent=''
    num1 = ''
    num2 = ''
    operator = ''
    sum = 0
    dot = ''
}

function backSpace(){ 
    display.textContent=''
    if (!operator){
        num1 = num1.slice(0, -1)
        display.textContent = num1
    }

    else{
        num2 = num2.slice(0, -1)
        display.textContent = num2
    }
}
container.addEventListener("click",(event)=>{
    if (event.target.id == "num" ){
        if (!operator){
            num1 += event.target.textContent
            display.textContent = num1
        }

        else{
            num2 += event.target.textContent
            display.textContent = `${num1} ${operator} ${num2}`
        }
    }
    else if (event.target.id == "operator" ){
        
        if (!operator){
            operator = event.target.textContent
            display.textContent = `${num1} ${operator}`
            dot = ''
        }
        else{
            if(!num2){
                operator = event.target.textContent
            }
            else{
                operate(num1,num2)
                operator = event.target.textContent
                display.textContent = `${operator}`
            }
        }
    }
})

document.addEventListener('keydown', (event) => {
    if(event.key >= 0 && event.key <=9)
        if (!operator){
            num1 += event.key
            display.textContent = num1
        }
        else{
            num2 += event.key
            display.textContent = num2
        }
    else if (event.key == "+" || event.key == "-" || event.key == "*" 
    || event.key == "/"){
        if (operator == ''){
            operator = event.key
            }
        else {
            operate(num1,num2)
            operator = event.key
        }
    }    
    else if (event.key == "Backspace"){
        backSpace()
    }
    else if (event.key == "Delete"){
        reset()
    }
    else if (event.key == "Enter" || event.key == "=" ){
        operate(num1, num2)
    }
    else if (event.key == "."){ 
        dotLimit()
    }
})


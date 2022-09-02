function add() {
    let sum = 0;
    for (i = 0; i < arguments.length; i++){
        sum += parseInt(arguments[i])
    }
    return sum
}

function subtract(){
    let sum = arguments[0];
        for (i = 1; i < arguments.length; i++){
            sum -= arguments[i]
    }
    return sum
}

function multiply(){
    let sum = 1;
    for (i = 0; i < arguments.length; i++){
        sum *= arguments[i]
    }
    return sum
}

function divide(){
    let sum = arguments[0];
    for (i = 1; i < arguments.length; i++){
        
        sum /= arguments[i]
    }
    return sum
}


function operate(){
    let num1 = ''
    let num2 = ''
    let operator = ''
    let sum = 0
    const reset = document.querySelector("[class='reset']").addEventListener("click",()=> {
        display.textContent=''
        num1 = ''
        num2 = ''
        operator = ''
        sum = 0
    })
    const display = document.querySelector("[class='display']")
    document.querySelector("[class='7']").addEventListener("click",()=> {
        if (!operator){
            num1 += 7
            display.textContent = num1
        }

        else{
            num2 += 7
            display.textContent = num2
        }
        
        })
    
    document.querySelector("[class='8']").addEventListener("click",()=> {
        
            if (!operator){
                num1 += 8
                display.textContent = num1
            }
    
            else{
                num2 += 8
                display.textContent = num2
            }
            
        })
    document.querySelector("[class='9']").addEventListener("click",()=> {
        
            if (!operator){
                num1 += 9
                display.textContent = num1
            }
    
            else{
                num2 += 9
                display.textContent = num2
            }
            
        })
    document.querySelector("[class='4']").addEventListener("click",()=> {
        
            if (!operator){
                num1 += 4
                display.textContent = num1
            }
    
            else{
                num2 += 4
                display.textContent = num2
            }
            
        })
    document.querySelector("[class='5']").addEventListener("click",()=> {
        
            if (!operator){
                num1 += 5
                display.textContent = num1
            }
    
            else{
                num2 += 5
                display.textContent = num2
            }
            
        })
    document.querySelector("[class='6']").addEventListener("click",()=> {
        
            if (!operator){
                num1 += 6
                display.textContent = num1
            }
    
            else{
                num2 += 6
                display.textContent = num2
            }
            
        })
    document.querySelector("[class='1']").addEventListener("click",()=> {
        
            if (!operator){
                num1 += 1
                display.textContent = num1
            }
    
            else{
                num2 += 1
                display.textContent = num2
            }
            
        })
    document.querySelector("[class='2']").addEventListener("click",()=> {
        
            if (!operator){
                num1 += 2
                display.textContent = num1
            }
    
            else{
                num2 += 2
                display.textContent = num2
            }
            
        })
    document.querySelector("[class='3']").addEventListener("click",()=> {
        
            if (!operator){
                num1 += 3
                display.textContent = num1
            }
    
            else{
                num2 += 3
                display.textContent = num2
            }
            
        })
    document.querySelector("[class='0']").addEventListener("click",()=> {
        
            if (!operator){
                num1 += 0
                display.textContent = num1
            }
    
            else{
                num2 += 0
                display.textContent = num2
            }
            
        })

    document.querySelector("[class='+']").addEventListener("click",()=> {
        if (operator == ''){
        operator = '+'
        display.textContent = '+'
        }
        else {
            if (num1 ==''){
                sum = add(sum,num2)
                display.textContent = sum
                num1 = ''
                num2 = ''
            }
            else{
                sum = add(num1,num2)
            display.textContent = sum
            num1 = ''
            num2 =''
            }
        }
        })
    document.querySelector("[class='-']").addEventListener("click",()=> {
        if (operator == ''){
            operator = '-'
            display.textContent = '-'
            }
            else {
                if (num1 ==''){
                    sum = subtract(sum,num2)
                    display.textContent = sum
                    num1 = ''
                    num2 = ''
                }
                else{
                    sum = subtract(num1,num2)
                display.textContent = sum
                num1 = ''
                num2 =''
                }
            }
            })
    document.querySelector("[class='*']").addEventListener("click",()=> {
        if (operator == ''){
            operator = '*'
            display.textContent = '*'
            }
            else {
                if (num1 ==''){
                    sum = multiply(sum,num2)
                    display.textContent = sum
                    num1 = ''
                    num2 = ''
                }
                else{
                    sum = multiply(num1,num2)
                display.textContent = sum
                num1 = ''
                num2 =''
                }
            }
            })
    document.querySelector("[class='/']").addEventListener("click",()=> {
        if (operator == ''){
            operator = '/'
            display.textContent = '/'
            }
            else {
                if (num1 ==''){
                    sum = divide(sum,num2)
                    display.textContent = sum
                    num1 = ''
                    num2 = ''
                }
                else{
                    sum = divide(num1,num2)
                display.textContent = sum
                num1 = ''
                num2 =''
                }
            }
            })

    document.querySelector("[class='=']").addEventListener("click",()=> {
        // display.textContent = ''
        if (operator =='+') {
            if (num1 ==''){
                sum = add(sum,num2)
                display.textContent = sum
                operator = ''
                num1 = ''
                num2 =''
            }
            else{
                sum = add(num1,num2)
            display.textContent = sum
            operator = ''
            num1 = ''
            num2 =''
            }
            
        }
        
        if (operator =='-') {
            if (num1 ==''){
                sum = subtract(sum,num2)
                display.textContent = sum
                operator = ''
                num1 = ''
                num2 =''
            }
            else{
                sum = subtract(num1,num2)
            display.textContent = sum
            operator = ''
            num1 = ''
            num2 =''
            }
            
        }
        if (operator =='*') {
            if (num1 ==''){
                sum = multiply(sum,num2)
                display.textContent = sum
                operator = ''
                num1 = ''
                num2 =''
            }
            else{
                sum = multiply(num1,num2)
            display.textContent = sum
            operator = ''
            num1 = ''
            num2 =''
            }
            
        }

        if (operator =='/') {
            if (num1 ==''){
                sum = divide(sum,num2)
                display.textContent = sum
                operator = ''
                num1 = ''
                num2 =''
            }
            else{
                sum = divide(num1,num2)
            display.textContent = sum
            operator = ''
            num1 = ''
            num2 =''
            }
            
        }
        
        
        })
        
        
}

operate()

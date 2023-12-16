let operand1 = 0, operator, operand2 = 0, tempResult = 0, output;
operand1=operand1.toString();
operand2=operand2.toString();
let number = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let ac = document.querySelector('.ac');
let equals = document.querySelector('.equals');
let negate = document.querySelector('.negate');
let decimal = document.querySelector('.decimal');

let mainText = document.querySelector('#main');
let secText = document.querySelector('#secondary');

let state = 0; //changes after decimal is clicked

number.forEach((item)=>{
    item.addEventListener('click', ()=>{
        if(operator == null) {
            if (state==0) {
                if(parseInt(operand1) == 0) {
                    operand1= item.textContent;
                    // operand1 = parseInt(operand1);
                    mainText.textContent= operand1;
                    console.log(operand1);
                }
                else {
                    operand1+=item.textContent;
                    // operand1 = parseInt(operand1);
                    mainText.textContent= operand1;
                    console.log(operand1);
                }
            }
            else if (state==1) {
                operand1+=item.textContent;
                mainText.textContent= operand1;
                console.log(operand1);
            }
        }
        else {
            if(state == 0) {
                if(parseInt(operand2) == 0) {
                    operand2= item.textContent;
                    mainText.textContent= operand1 + operator + operand2;
                    console.log(operand2);
                }
                else {
                    operand2+=item.textContent;
                    mainText.textContent=operand1 + operator + operand2;
                    console.log(operand2);
                }
            }
            else if(state == 1) {
                operand2+=item.textContent;
                mainText.textContent= operand1 + operator + operand2;
                console.log(operand2);
            }
        }
    })
})

operators.forEach((item)=>{
    item.addEventListener('click', ()=>{
        if (operator != null) {
            tempResult=operate(operand1,operand2);
            console.log(tempResult);
            operand1 = tempResult;
        }
        state=0;
        operand2= 0;
        operator=item.textContent;
        mainText.textContent =  operand1 + operator;
        console.log(operator)
    })
})


ac.addEventListener('click', ()=>{
        // operator= item.textContent;
        // console.log(operator);
        mainText.textContent= 0;
        secText.textContent=0;
        operand1=0;
        operand2=0;
        operand1=operand1.toString();
        operand2=operand2.toString();
        operator= null;
        state=0;
})

equals.addEventListener('click', ()=>{
    tempResult=operate(operand1,operand2);
    secText.textContent=`=${tempResult}`;
    console.log(tempResult);
})    

negate.addEventListener('click', ()=> {
    if (operand2 == 0) {
        operand1 = -1 * operand1;
        updateMainText(operand1);
    }
    else {
        operand2 = -1 * operand2;
        updateMainText(operand1, operand2);
    }
})

decimal.addEventListener('click', ()=> {    
    state=1;
    operand1=operand1.toString();
    operand2=operand2.toString();
    if (operator == null) {
        if (!operand1.includes('.')) {   
            operand1=`${operand1}.`;
            mainText.textContent=operand1;
        }
    }
    else {
        if (!operand2.includes('.')) {   
            operand2=`${operand2}.`;
            mainText.textContent=operand1 + operator + operand2;
        }

    }
})

function updateMainText(operand1, operand2) {
    if (operand2 == undefined){
        mainText.textContent = operand1 + operator;
    }
    else {
        mainText.textContent= `${operand1}${operator}(${operand2})`;
    }
}

function addition(op1, op2) {
    return op1 + op2;
}

function subtraction(op1, op2) {
    return op1 - op2;
}

function multiplication(op1, op2) {
    return op1 * op2;
}

function division(op1, op2) {
    return op1 / op2;
}

function modulo(op1, op2) {
    return op1 % op2;
}

function operate(op1, op2) {
    op1= parseFloat(op1);
    op2= parseFloat(op2);
    if( operator == '+') {
        tempResult=addition(op1, op2).toFixed(5);
    }
    else if( operator == '-') {
        tempResult=subtraction(op1, op2).toFixed(5);
    }
    else if( operator == '*') {
        tempResult=multiplication(op1,op2).toFixed(5); 
    }
    else if( operator == '/') {
        tempResult=division(op1,op2).toFixed(5);
    }
    else if( operator == '%') {
        tempResult=modulo(op1,op2).toFixed(5);
    }
    tempResult=formatNumber(tempResult);
    return tempResult;

}

function formatNumber(number) {
    number=number.toString();
    while(number.includes('.') && (number.endsWith('0') || number.endsWith('.'))) {
        number = number.slice(0,-1);
    }
    return number;
}


//  old code
        // if(operator ==null) {
        //     operator= item.textContent;
        //     console.log(mainText);
        //     mainText.textContent+= operator;
        // }
        // else {
        //     operator= item.textContent;
        //     mainText.textContent=mainText.textContent.slice(0,-1);
        //     mainText.textContent+=operator;
        //     console.log(mainText);

        // }
        // operand2= 0;
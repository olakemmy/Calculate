const calculate = (a, b, operator) => {
    if (operator === 'add'){
        console.log(a + b);
    }
    else if (operator === 'subtract'){
        console.log(a - b);
    }
    else if (operator === 'divide'){
        console.log(a/b);
    }
    else if (operator === 'multiply') {
        console.log(a*b);
    }
    else {
        console.log('Unknown');
    }
}

const value = calculate;

const checkValid = (isValid) => {
if (isValid){
    console.log("Input number is valid")
}
else {
    console.log("Input is not valid")
}
}

checkValid(value);
calculate(5, 3, 'add');
calculate(10, 2, 'divide');
calculate(6, 7, 'multiply');
calculate(77, 67, 'subtract');
calculate('Testing');

// switch
const calculatenew = (d, e, operation) => {
    switch (operation){
        case "add":
            return d + e;
        case "subtract":
            return d - e;  
        case "multiply":
            return d * e;
        case "divide":
            return d / e;
        default:
            return "Operation not recognized"   
    }
  }

  calculate(10, 5, 'add');
  calculate(100, 2, 'divide');
  calculate(8, 3, 'multiply');
  calculate(9, 5, 'subtract');  
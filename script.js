const switcher = document.querySelector('.switcher input[type="checkbox"]');
const textArea = document.querySelector('#textArea');
function themeSwitch(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}
switcher.addEventListener('change', themeSwitch, false);


const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};
const sum = function(arr) {
	let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return sum;
};
const multiply = function(arr) {
  let multiple = 1;
  arr.forEach(element =>
    {
      multiple*= element;
    })
  return multiple;
};
const power = function(a,b) {
	return Math.pow(a,b);
};

const backspace = function() {

  const display = textArea.textContent;
  textArea.textContent = display.slice(0, -1);
};
function divide(a, b) {

  return a / b;
}
const del = document.getElementById("delete");
const pow = document.getElementById("pow");
const clear = document.getElementById("clear");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const signSwitch = document.getElementById("pos/neg");
const zero = document.getElementById("0");
const dec = document.getElementById("decimal");
const addition = document.getElementById("add");
const subtraction = document.getElementById("subtract");
const multiplication = document.getElementById("multiply");
const division = document.getElementById("divide");
const equals = document.getElementById("equals");


const buttons = document.querySelectorAll('.buttons button');
buttons.forEach((element) => {
  if (element.id === 'delete' || element.id === 'clear' || element.id === 'pow' || element.id === 'pos/neg' || element.id === "divide") {
    return;
  }
  element.addEventListener('click', () => {
    if (element === '=')
    {
      evaluateExpression();
    } 
    else
    {
      textArea.textContent += element.textContent;
    }
    console.log(element.textContent);
    element.classList.add('clicked');

    setTimeout(() => {
      element.classList.remove('clicked');
    }, 200); 
  });
});

equals.addEventListener('click', () => {
  const expression = textArea.textContent;
  const result = evaluateExpression(expression);
  textArea.textContent = result;
});

clear.addEventListener('click', () =>{
    textArea.textContent = "";
});

del.addEventListener('click', backspace);

pow.addEventListener('click', () =>{
    textArea.textContent += "^";
});
division.addEventListener('click', () => {
  textArea.textContent += "/";
});

signSwitch.addEventListener('click', ()=>{
  (Number(textArea.textContent) * -1).toString();
});
function evaluateExpression(expression) {
  const powerRegex = /(\d+(\.\d+)?)\s*\^\s*(\d+(\.\d+)?)/g;
  const poweredExpression = expression.replace(powerRegex, function(match, base, _, exponent) {
    return power(parseFloat(base), parseFloat(exponent));
  });
  
  return evaluate(poweredExpression);
}


function evaluate(expression) {
  try {
    const sanitizedExpression = cleanExpression(expression);
    const dividedExpression = sanitizedExpression;
    const evaluatedResult = math.evaluate(dividedExpression);
    return evaluatedResult.toString();
  } catch (error) {
    console.error('Error evaluating expression:', error);
    return 'Error';
  }
}

function cleanExpression(expression) {
  return expression.replace(/[^-()\d/*+.]/g, '');
}

function handleDivision(expression) {
  const divisionRegex = /(\d+(\.\d+)?)\/(\d+(\.\d+)?)/g;
  const dividedExpression = expression.replace(divisionRegex, function (match, numerator, _, denominator) {
    return divide(parseFloat(numerator), parseFloat(denominator));
  });

  return dividedExpression;
}


const slider = document.getElementById("slide");
slider.addEventListener("click", () =>{
    const slideValue = slider.value;
    if(slideValue === dark)
    {
        slideValue = light;

    }
    else if(slideValue === light){
        slideValue = dark;
    }
});

const switcher = document.querySelector('.switcher input[type="checkbox"]');
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
const factorial = function(a) {
	let fac = 1;
  for (let index = a; index > 0; index--) {
      fac *= index;
  }
  return fac;
};
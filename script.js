// DOM elements

const input = document.getElementById('number-input');
const submit = document.getElementById('button');
const output = document.getElementById('output');
const reset = document.getElementById('reset');
const errorDiv = document.querySelector('.error');



const errorTime = () => {
    input.value = '';
    output.innerHTML = '';

}


const  numberFact = () => {
const number = input.value;
// console.log(number);

if(number !== ''){
    fetch(`http://numbersapi.com/${number}`)
    .then(resolve => resolve.text())
    .then(data => {
    
    
    output.innerHTML = `
    <p>Number Fact:-</p>
    <p id="output-text">${data}</p>
    `;
    
    });
} else {
    output.innerHTML = `
    <p id="error-text">Please insert a number</p>
    `;
  
   setTimeout(errorTime, 3000);  

}




};


// Event Listners
submit.addEventListener('click', function(event){
event.preventDefault();

 numberFact();

});

// reset btn
reset.addEventListener('click', function(event){
event.preventDefault();

input.value = '';
output.innerHTML = '';

});
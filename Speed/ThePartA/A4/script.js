//accessing circle element
const circle = document.getElementById('circle');

//handling smiley button press
document.getElementById('smiley-button').addEventListener('click', () => {
    //changing text and colour
    circle.textContent = ':)';
    circle.style.backgroundColor = 'green';
    
});

//handling emotionless button press
document.getElementById('emotionless-button').addEventListener('click', () => {
    //changing text and colour
    circle.textContent = ':|';
    circle.style.backgroundColor = 'yellow';
    
});

//handling frowning button press
document.getElementById('frowning-button').addEventListener('click', () => {
    //changing text and colour
    circle.textContent = ':(';
    circle.style.backgroundColor = 'red';
    
});
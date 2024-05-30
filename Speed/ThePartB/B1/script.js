//Accessing image in canvas
const canvasImage = document.getElementById('image-in-canvas');
const resultImage = document.getElementById('result-image');

//Handles making result image brighter
const applyBrighten = (image) => {
    image.style.filter = 'brightness(150%)';
}

//Handles making result image darker
const applyDarken = (image) => {
    image.style.filter = 'brightness(50%)';
}

//removes image from the screen
const removeImage = (image) => {
    image.src = '';
    image.alt = '';
}


const changeImage = (image, selection) => {
    //setting image's src and alt text depending on user selection
    if(selection === 'Mona lisa'){
        image.src = 'assets/monalisa.jpg';
        image.alt = 'The Mona Lisa';
        
    }else if(selection === 'Athena'){
        image.src = 'assets/athena.jpg';
        image.alt = 'Athena';
    }else if(selection === 'The Kiss'){
        image.src = 'assets/the-kiss.jpg';
        image.alt = 'The kiss';
    }else if (selection === 'Young Pearl'){
        image.src = 'assets/young-pearl.jpg';
        image.alt = 'Young Pearl';
    }

    //looking back it would have been better to use a switch statement
}



//handling change of image dropdown list
document.getElementById('photoSelector').addEventListener('change', () => {
    //getting the option the user selected 
    let selection = document.getElementById('photoSelector').value;

    //Changing the image
    changeImage(canvasImage, selection);

    //removing preexisting result image
    removeImage(resultImage);

    //changing filter dropdown list
    document.getElementById('filter').value = 'filter';
});

//handling change of filter dropdown list
document.getElementById('filter').addEventListener('change', () => {
    //getting both dropdown list values
    let image = document.getElementById('photoSelector').value;
    let filter = document.getElementById('filter').value;
    
    //changing result image based on new image value
    changeImage(resultImage, image);


    //applying filter based on selection 
    if(filter === 'brighten'){
        applyBrighten(resultImage);
    }else if(filter === 'darken'){
        applyDarken(resultImage);
    }else if(filter === 'filter'){
        removeImage(resultImage);
    }

});
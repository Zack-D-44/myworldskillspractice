document.addEventListener('DOMContentLoaded', () => {
    const imageGrid = document.getElementById('imageGrid');
    const columns = 5;  
    const rows = 3;     
    const imageWidth = 500;  
    const imageHeight = 300; 

    // Creating grid cells
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            const cell = document.createElement('div');
            cell.style.backgroundPosition = `-${(imageWidth / columns) * x}px -${(imageHeight / rows) * y}px`;
            imageGrid.appendChild(cell);
        }
    }

    
    document.querySelector('.container').addEventListener('click', () => {
        const cells = imageGrid.querySelectorAll('div');
        cells.forEach((cell, index) => {
            setTimeout(() => {
                cell.classList.add('hidden');
            }, index * 300);  
        });
    });
});

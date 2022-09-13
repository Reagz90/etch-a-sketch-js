let sizeOfGrid = 5;

const container = document.querySelector('.container'); 

const createGrid = (amtofGrids) => {
    for (let i = 0; i < amtofGrids; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < amtofGrids; j++) {
            const widthAndHeight = 960 / sizeOfGrid
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`

            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            })
            row.appendChild(gridBox)
        }

        container.appendChild(row)
    }
}

createGrid(sizeOfGrid); 

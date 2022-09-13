const resetButton = document.querySelector('button')
const container = document.querySelector('.container')

const createGrid = (amtofGrids) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    
    for (let i = 0; i < amtofGrids; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < amtofGrids; j++) {
            const widthAndHeight = 960 / amtofGrids
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`

            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            })
            row.appendChild(gridBox)
        }

        wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}

resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('What dimensions would you like for your new grid?'))

    while (userSize > 100) {
        userSize = Number(prompt('Pick a number lower than 100')) 
    }

    const wrapper = document.querySelector('.wrapper')

    if (!wrapper) {
        createGrid(userSize)
    } else {
        wrapper.remove()
    }
}); 

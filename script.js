let gridValue = 50;
let gridDimension = 960 / gridValue


function createDivs (value) {
    const grid = document.querySelector('#main');
    grid.setAttribute('style', `grid-template-columns: repeat(${value}, 0fr)`)
    const gridSize = value ** 2
    gridDimension = 960 / value

    for (let i = 0; i < gridSize; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('unactivated');
        gridDiv.setAttribute('id', 'gridDiv')
        gridDiv.setAttribute('style', `height: ${960 / value}px;
     width: ${960 / value}px;`)
        grid.appendChild(gridDiv)
        console.log(i)
    }
}
function removeDivs () {
    const gridDiv = document.querySelectorAll("#gridDiv");
    gridDiv.forEach((div) => {div.remove()})
}
function gridListener() {
const gridDivs = document.querySelectorAll('#gridDiv')

gridDivs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.setAttribute('style',`background-color: black;
            height: ${gridDimension}px; width: ${gridDimension}px`);
    });
});
}

const resetbtn = document.querySelectorAll('#resetbtn');
resetbtn.forEach((button) => {
    button.addEventListener('click', () => {
        const gridDivs = document.querySelectorAll('#gridDiv');
        gridDivs.forEach((div) => {div.setAttribute('style', `background-color: white;
            height: ${gridDimension}px; width: ${gridDimension}px`)})
    })
})

const gridbtn = document.querySelectorAll("#gridbtn")
gridbtn.forEach((button) => {
    button.addEventListener('click', () => {
    value = prompt("Enter a number to change the height to.")
        if( value >= 100 || value == "" || value <=0) {
            alert("Please try again with a number below 100 or above 0")
        }
        else {
            removeDivs()
            createDivs(value)
            gridListener()
        }
    })
})

createDivs(gridValue);
gridListener();
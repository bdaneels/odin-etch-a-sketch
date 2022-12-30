const gridHeight = 20;
const gridWidth = 20;

const gridSize = gridHeight * gridWidth;

const grid = document.querySelector('#main');
grid.setAttribute('style', `grid-template-columns: repeat(${gridWidth}, 0fr)`)

for (let i=0; i < gridSize; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('unactivated');
    gridDiv.setAttribute('id', 'gridDiv')
    grid.appendChild(gridDiv)
    console.log(i)
}

const gridDivs = document.querySelectorAll('#gridDiv')
gridDivs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.setAttribute('style','background-color: black');
    });
});

const resetbtn = document.querySelectorAll('#resetbtn');
resetbtn.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('you clicked')
        gridDivs.forEach((div) => {div.setAttribute('style', 'background-color: white')})
    })
})



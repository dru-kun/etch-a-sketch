const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnGray = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const btnReset = document.createElement('button')
const buttonsContainer = document.querySelector('.buttons')

function createDivs(col, rows){
    for(let i =0 ; i < (col * rows); i++){
        const div = document.createElement('div')
        div.style.border = '1px solid black'
        container.style.gridTemplateColumns = `repeat(${col},1fr)`;
        container.style.gridTemplateRows = `repeat(${rows},1fr)`;
        container.appendChild(div).classList.add('box')
    }
}

createDivs(16,16)

function blackColor(){
    const boxes = container.querySelectorAll('.box')
    btnBlack.textContent = 'Black'
    btnBlack.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover',()=>{
            box.style.background = 'black'
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}

function grayColor(){
    const boxes = container.querySelectorAll('.box')
    btnGray.textContent = 'Modern'
    btnGray.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover',()=>{
            let rNum = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${rNum},${rNum},${rNum})`
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn')
}

function rgbColor(){
    const boxes = container.querySelectorAll('.box')
    btnRGB.textContent = 'RGB'
    btnRGB.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover',()=>{
            let r = Math.floor(Math.random() * 255)
            let g = Math.floor(Math.random() * 255)
            let b = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${r},${g},${b})`
        }))
    })
    buttonsContainer.appendChild(btnRGB).classList.add('btn')
}

function reset(){
    const boxes = container.querySelectorAll('div')
    btnReset.textContent = 'Reset'
    btnReset.addEventListener('click', ()=>{
        boxes.forEach(box => box.style.backgroundColor = 'white')
    })
    buttonsContainer.appendChild(btnReset).classList.add('btn')
}

function wipe(){
    const boxes = container.querySelectorAll('.box')
    boxes.forEach(box => box.remove())
}

function resize(){
    btnSize.textContent = 'Grid Size'
    btnSize.addEventListener('click', () =>{
        let user = prompt('Enter grid size:')
        if (user===null|| user < 1 ) {
            wipe()
            createDivs(16,16)
            blackColor()
            grayColor()
            rgbColor()
            reset()
        } else {
            wipe()
            createDivs(user,user)
            blackColor()
            grayColor()
            rgbColor()
            reset()
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}


blackColor()
grayColor()
rgbColor()
reset()
resize()
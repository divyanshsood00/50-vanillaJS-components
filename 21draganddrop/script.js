const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

for (const empty of empties){
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop)

}

function dragStart(){
    console.log('dragstart')
    this.className += ' hold'
    setTimeout(() => {
        this.className ='invisible'
    },0)
}

function dragEnd(){
    console.log('dragEnd')
    this.className = ' fill'
}


function dragOver(e){
    console.log('dragOver')
    e.preventDefault()
    
}


function dragEnter(e){
    console.log('dragEnter')
    e.preventDefault()
    this.className +=' hovered'
    }

function dragLeave(){
    console.log('dragLeave')
    this.className = 'empty'
}

function dragDrop(e){
    // e.preventDefault()

    // console.log('dragdrop')
    this.className = 'empty'
    this.append(fill)
}


// const fill = document.querySelector('.fill')
// const empties = document.querySelectorAll('.empty')

// fill.addEventListener('dragstart', dragStart)
// fill.addEventListener('dragend', dragEnd)

// for(const empty of empties) {
//     empty.addEventListener('dragover', dragOver)
//     empty.addEventListener('dragenter', dragEnter)
//     empty.addEventListener('dragleave', dragLeave)
//     empty.addEventListener('drop', dragDrop)
// }

// function dragStart() {
//     this.className += ' hold' 
//     setTimeout(() => this.className = 'invisible', 0)
// }

// function dragEnd() {
//     this.className = 'fill'
// }

// function dragOver(e) {
//     e.preventDefault()
// }

// function dragEnter(e) {
//     e.preventDefault()
//     this.className += ' hovered'
// }

// function dragLeave() {
//     this.className = 'empty'
// }

// function dragDrop() {
//     this.className = 'empty'
//     this.append(fill)
// }
const boxes = document.querySelectorAll('.box')
checkBoxes()

window.addEventListener('scroll',checkBoxes) 

function checkBoxes(){
  const targetBottom = window.innerHeight/6*5 //height of viewport
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top //Finding top of box from elements properties
    
    if (boxTop<targetBottom){
      box.classList.add('show')
    }else{
      box.classList.remove('show')
    }
      
  })
}
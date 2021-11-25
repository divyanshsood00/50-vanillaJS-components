const progress= document.getElementById('progress')
const prev= document.getElementById('prev')
const next= document.getElementById('next')
const circles= document.querySelectorAll('.circle')

const lengthCircles = circles.length
let curr=1;

next.addEventListener('click',()=>{
  curr++
  if(curr>lengthCircles){
    curr=lengthCircles
  }
  // console.log(curr)
  update()

})

prev.addEventListener('click',()=>{
  curr--
  if(curr<1){
    curr=1
  }
  // console.log(curr)
  update()
})

function update(){
  circles.forEach((circle,i)=>{
    if(i<curr){
      circle.classList.add('active')
    }else{
        circle.classList.remove('active') 
      }
    })
  const actives = document.querySelectorAll('.active')
  const progressPercentage = ((actives.length-1)/(lengthCircles-1))*100+'%'
  progress.style.width=progressPercentage
  // console.log("updated")
  if(curr === 1) {
    prev.disabled = true
  } else if(curr === lengthCircles) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
}
}
const openeda = document.getElementById('open')
const clossed = document.getElementById('close')
const container = document.querySelector('.container')
const content = document.querySelector('.content')

openeda.addEventListener('click',()=>{
  container.classList.add('show-nav')
})

content.addEventListener('click',()=>{
  container.classList.remove('show-nav')
})


clossed.addEventListener('click',()=>{
  container.classList.remove('show-nav')
})


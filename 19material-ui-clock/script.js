const hourDiv = document.querySelector('.hour')
const minuteDiv = document.querySelector('.minute')
const secondDiv = document.querySelector('.second')
const timeDiv = document.querySelector('.time')
const dateDiv = document.querySelector('date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e)=>{
  const html = document.querySelectorAll('html')
  if (e.target.innerHTML==='Light Mode'){  
    html.classList.add('dark')
    e.target.innerHTML=''
    e.target.innerHTML='Dark Mode'
  }
  else{
    e.target.innerHTML=''
    toggle.style
    e.target.innerHTML='Light Mode'
  }
    
})
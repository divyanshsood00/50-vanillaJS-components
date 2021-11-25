const hourDiv = document.querySelector('.hour')
const minuteDiv = document.querySelector('.minute')
const secondDiv = document.querySelector('.second')
const timeDiv = document.querySelector('.time')
const dateDiv = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e)=>{
  const html = document.querySelector('html')
  if (e.target.innerHTML==='Light Mode'){  
    // e.target.innerHTML=''
    e.target.innerHTML='Dark Mode'
    html.classList.remove('dark')
  }
  else{
    e.target.innerHTML='Light Mode'
    html.classList.add('dark')
  }
    
    
})

function scale(number, inmin,inmax,outmin,outmax){
  return (number-inmin)/(inmax-inmin)*(outmax-outmin)+outmin
}

function setTime(){
  const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

  hourDiv.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
  minuteDiv.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
  secondDiv.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

  timeDiv.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
  dateDiv.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

setTime()
setInterval(setTime, 1)



const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('jokebtn')

generateJoke()
// console.log("level 1")
jokeBtn.addEventListener('click',generateJoke)

function generateJoke(){
  // console.log("level 2")

  const args = {
    headers:{
      Accept: 'application/json',
    },
  }
  fetch('https://icanhazdadjoke.com',args)
    .then((res) => res.json())
    .then((data) => {
      jokeElement.innerHTML=data.joke
    })
}


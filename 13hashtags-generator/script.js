const tagsElement = document.getElementById('tags')
const textarea = document.getElementById('textarea')
const hashtags = document.querySelector('.tagarea')

textarea.focus()

textarea.addEventListener('keyup',(e)=>{
  createTags(e.target.value)
  if (e.key==='Enter'){
    setTimeout(()=>{e.target.value=''},10)
    randomSelect()
    hashtags.innerText=""
    taggenerator()
  }
})

function createTags(input){
  const tags = input.split(",").filter(tag=>tag.trim()!=="").map(tag=>tag.trim()) 
  // console.log(tags)
  tagsElement.innerHTML = '' 
  tags.forEach(tag => {
    const tagElement = document.createElement('span')
    tagElement.classList.add('tag')
    tagElement.innerText= tag
    tagsElement.appendChild(tagElement)
  });
  
}

function randomSelect() {
  const tags = document.querySelectorAll('.tag')

  const times = tags.length*2

  const interval = setInterval(() => {
      const randomTag = pickRandomTag()

      highlightTag(randomTag)

      setTimeout(() => {
          unHighlightTag(randomTag)
          hashtags.innerHTML+=`#${randomTag.innerHTML} `

      }, 100)
  }, 100);

  setTimeout(() => {
      clearInterval(interval)

      setTimeout(() => {
          const randomTag = pickRandomTag()
          hashtags.innerHTML+=`#${randomTag.innerHTML} `
          highlightTag(randomTag)

      }, 100)

  }, times * 100)
  // setInterval(() => {
    
  // }, interval);
}

// function taggenerator(){
//   const tags = document.querySelectorAll('.tag')
//   i=0
//   setInterval(() => {
//     hashtags.innerHTML+=
//   }, 200);
// }

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}


// --------------- skill section ----------------------- //
const skillContent = document.getElementsByClassName('skill-content')
const skillHeader = document.querySelectorAll('.skill-header')

function toggleSkill(){
  let itemClass = this.parentNode.className

  for(i=0; i<skillContent.length; i++){
    skillContent[i].className = 'skill-content skill-close'
  }

  if(itemClass === 'skill-content skill-close'){
    this.parentNode.className = 'skill-content skill-open'
  }
}

skillHeader.forEach((el) => {
  el.addEventListener('click', toggleSkill)
})
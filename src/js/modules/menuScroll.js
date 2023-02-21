export const menuScroll=()=>{
  const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').slice(1)
    if(window.matchMedia('(max-width:576px)').matches){
      console.log(true)
      document.body.classList.remove('lock')
      document.querySelector('.burger').classList.remove('active')
      document.querySelector('.menu-mob__list').classList.remove('active')
    }
    
    // console.log(document.getElementById(blockID),blockID)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
}
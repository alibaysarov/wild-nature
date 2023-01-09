export const priceBlock=(volumeBtnsSelector,priceContentSelector)=>{
  const volumeBtns=document.querySelectorAll(volumeBtnsSelector)
  const priceContent=document.querySelector(priceContentSelector)
  const removeClass=()=>{
    volumeBtns.forEach(item=>item.classList.remove('active'))
  }
  volumeBtns.forEach(btn=>{
    btn.addEventListener('click',e=>{
      removeClass()
      e.target.classList.add('active')
      priceContent.innerText=`${e.target.getAttribute('data-price')} ₽`
      
    })
  })
}
export const animations=()=>{
  let Visible = function (selector,className) {
    const target=document.querySelector(selector)
    let targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
      // Получаем позиции окна
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };
  
    if (targetPosition.bottom > windowPosition.top && 
      targetPosition.top < windowPosition.bottom ) { 
      console.clear();
      console.log('Вы видите элемент :)');
      target.classList.add(className)
    }
  };
  window.onload=()=>{
    document.body.classList.add('loaded')
    function removeClassAfterTrns(selector,className){
      const elems=document.querySelectorAll(selector)
      elems.forEach(elem=>{
        elem.addEventListener('transitionend',(e)=>{
          e.target.classList.remove(className)
        })
      })
    }
    function addClassWhenScrolling(selector,className){
      const targetElem=document.querySelector(selector)
      targetElem.addEventListener('scroll',e=>{
        if(e.target.getBoundingClientRect().top>0){
          targetElem.classList.add(className)
        }
      })
      
    }
    
    removeClassAfterTrns('.scale','scale')

    



// Запускаем функцию при прокрутке страницы

  }
  window.addEventListener('scroll', function() {
    Visible ('.map','showed');
    Visible ('.map__col','translateRTL');
  });
  
  // А также запустим функцию сразу. А то вдруг, элемент изначально видно
  Visible ('.map','showed');

  const burgerLines=[document.querySelectorAll('.burger__line')[0],document.querySelectorAll('.burger__line')[2]];
  
  burgerLines.forEach(line=>{
    let count=0
    line.addEventListener('transitionend',e=>{
      
      if(count!=0){
        return
      }
      count++
      
      line.classList.toggle('rotate')
      
      console.log(count)
      
    })
    count=0
  })
  
}
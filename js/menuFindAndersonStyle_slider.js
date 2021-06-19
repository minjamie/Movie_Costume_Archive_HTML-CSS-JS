
var   menu4Slides = document.querySelector('.BulletinSlides'),
      menu4Slide = document.querySelectorAll('.BulletinSlides li'),
      currentIndex = 0,
      menu4SlideCount = menu4Slide.length,
      prevButton = document.querySelector('.FindAndersonStylePrev'),
      nextButton = document.querySelector('.FindAndersonStyleNext'),
      menu4SlideWidth = 300,
      menu4SlideMargin = 30;

//슬라이드가 클릭할 때 처음과 끝을 구분하기위해서 
// html에서 슬라이드 갯수가 늘어나면 늘어나는 걸 반영하여
// ul의 너비를 줘야한다.
// 스크립트가 작동하자마자 슬라이드의 너비를 바꿔줘야하낟.


menu4Slides.style.width = (menu4SlideWidth+menu4SlideMargin)*menu4SlideCount - menu4SlideMargin +'px';
// UL의 넓이는 CSS에서 안잡아도 된다.


function movemenu4Slide (num) {
  // 숫자가 들어오면 슬라드를 다 포함한 
  // menu4Slides의 레프트 값을 바꿔준다.
  menu4Slides.style.left =  -num * 330 +'px';
  currentIndex = num;

}

// next버튼 누르면 current 버튼에 1 더한거 

nextButton.addEventListener('click', function(){
  if(currentIndex < menu4SlideCount -3) {
    movemenu4Slide(currentIndex + 1);
  }
  else{
    movemenu4Slide(0);
  }
});

prevButton.addEventListener('click', function(){
  if(currentIndex > 0) {
    movemenu4Slide(currentIndex - 1);
  }
  else{
    movemenu4Slide(menu4SlideCount -3);
  }
});

// setInterval(function (){
//   var nextIndex = (currentIndex + 1) % menu4SlideCount;
//   // 나눈 나머지
//   movemenu4Slide(nextIndex);
// }, 2000);
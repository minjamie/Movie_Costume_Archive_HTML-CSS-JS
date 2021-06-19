
var   slides = document.querySelector('.SnsSlides'),
      slide = document.querySelectorAll('.SnsSlides li'),
      currentIndex = 0,
      slideCount = slide.length,
      prevButton = document.querySelector('.ShareAndersonStylePrev'),
      nextButton = document.querySelector('.ShareAndersonStyleNext'),
      slideWidth = 300,
      slideMargin = 30;

//슬라이드가 클릭할 때 처음과 끝을 구분하기위해서 
// html에서 슬라이드 갯수가 늘어나면 늘어나는 걸 반영하여
// ul의 너비를 줘야한다.
// 스크립트가 작동하자마자 슬라이드의 너비를 바꿔줘야하낟.


slides.style.width = (slideWidth+slideMargin)*slideCount - slideMargin +'px';
// UL의 넓이는 CSS에서 안잡아도 된다.


function moveSlide (num) {
  // 숫자가 들어오면 슬라드를 다 포함한 
  // slides의 레프트 값을 바꿔준다.
  slides.style.left =  -num * 340 +'px';
  currentIndex = num;

}

// next버튼 누르면 current 버튼에 1 더한거 

nextButton.addEventListener('click', function(){
  if(currentIndex < slideCount -3) {
    moveSlide(currentIndex + 1);
  }
  else{
    moveSlide(0);
  }
});

prevButton.addEventListener('click', function(){
  if(currentIndex > 0) {
    moveSlide(currentIndex - 1);
  }
  else{
    moveSlide(slideCount -3);
  }
});
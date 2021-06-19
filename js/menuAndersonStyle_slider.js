

// 변수 지정
var sliderWrapper = document.getElementsByClassName('AndersonStyleSliderContainer'),
    sliderContainer = document.getElementsByClassName('AndersonStyleSlider'),
    slides = document.getElementsByClassName('AndersonStyleSlide'),
    // 변수명 slides에 저장된 값들의 길이
    slideCount = slides.length,
    // 슬라이드가 끝인지 처음인지 구분할 수 있는 방법이 필요하다.
    currentIndex=0,
    topHeight = 0,
    // 슬라이드 높이 중 제일 높은 것을 가져와 콘테이너와 슬라이더의 콘테이너의 높이로 지정 해야한다.
    // 요소의 높이를 구하기 위해서 offsetHeigt를 사용해 높이를 구한다.
    navPrev = document.getElementById('AndersonStylePrev'),
    navNext = document.getElementById('AndersonStyleNext');
    // 좌우버튼도 변수로 지정 


	
//슬라이드의 높이 확인하여 부모의 높이로 지정하기
function calculateTallestSlide(){
  // 높이를 구해와서 높이는 topHeight안에다 넣을 것이다. 슬리아드의 높이가 절대값 위치로 안나오기 떄문에 
  for(var i =0; i<slideCount; i++) {
    if (slides[i].offsetHeight > topHeight) {
      topHeight =  slides[i].offsetHeight;
    }
    // 0~슬라이드갯수까지 tophieght의 높이를 넣어준다. 이중 가장 높은 것을 고르기 위해서
    // if 문을 사용한다
  }

  sliderWrapper[0].style.height = topHeight+'px';
  sliderContainer[0].style.height = topHeight+'px';
  // 초기 슬라이더의 높이를 슬라이더 중 가장 높은 슬라이더 높이로 지정한다.

};

calculateTallestSlide();


// 슬라이드가 있으면 가로로 배열하기
for (var i = 0; i <slideCount; i++) {
  slides[i].style.left = 100 * i +'%';
  // 슬라이더 하나하나가 일렬로 배치된다.

}


// 슬라이드 이동 함수 
function goToSlide(index) {
  sliderContainer[0].style.left = index * -100 +'%';
  sliderContainer[0].classList.add('animated');
  // 현재 인덱스가 끝에가면 다음버튼 처음이면 이전 버튼 없애기 위해서 초기화해야한다.
  currentIndex = index;
  
  // upDateNav();
  // 몇번째를 보여줘를 하는 입력을 해야함 
}
goToSlide(0);


// 버튼기능 업데이트 함수


// 버튼을 클릭하면 슬라이드 이동시키기
navPrev.addEventListener('click',function(event){
  // a링크가 걸려있는 속성 자체를 물고들어오기 위해서 event를 매개변수로 넣어주고
  event.preventDefault();
  // goToSlide(currentIndex - 1);
  // 처음이 아니라면   goToSlide(currentIndex - 1);이전시키기
  // 처음이면 goToSlide
  if (currentIndex>0) {
    goToSlide(currentIndex - 1);
  } else {
    goToSlide(slideCount-1)
  }

});

navNext.addEventListener('click',function(event){
  event.preventDefault();
  // goToSlide(currentIndex + 1);
  // 마지막이 아니라면 하나 이동
  // 마지막이면 처음으로
  if (currentIndex < slideCount-1) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(0)
  }

});


// 첫번째 슬라이드 먼저 보이도록 하기


// 열자마자 이전버튼이 있으면 안되니깐 

// 처음인데도 이전을 누르거나 마지막인데 다음을 누르면 로테이션돌기위해서

// 자동 슬라이드
// 4초마다 goToSlide(숫자); 0, 1, 2 ...0
// setInterval(할일, 4000)
// currentIndex 번호 0번 nextIndex번호 1번
// current 1번 nextIndex번호 2번 

setInterval(function (){
  var nextIndex = (currentIndex + 1) % slideCount;
  // 나눈 나머지
  goToSlide(nextIndex);
}, 4000);
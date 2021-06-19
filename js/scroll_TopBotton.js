let GoToButton = document.getElementById('go-to-top'),
  docElement = document.documentElement;
    // 메인페이지 html 문서 자체를 가져온다.

    // offset,
    // // // 스크롤이 올라간거에서 남은 부분을 뺀 만큼
    // scrollPos,
    // // // 전체 메인페이지의 다큐멘트 만큼 스크롤이 올라간 양 
    // documentHeight;
    // // 문서 전체의 높이

    // 문서 전체 높이 계산은

  // documentHeight = docElement.scrollHeight;
  documentHeight = Math.max(docElement.offsetHeight, docElement.scrollHeight);
  // 문서 전체의 html 스크롤 높이를 콘솔 창에 찍어준다. 그러나 브라우저에  따라 두 값이 다르다. 
  // 따라서 Math.max를 사용하여 두 가지 메소드 중 더 높은 값을 사용한다.,
  if(documentHeight != 0) {
    offset = documentHeight / 4;
    //문서의 스크롤 양이 0이 아니면
    //  남은 스크롤의 양이 전체 문의 1/4로
  }

  // scrollPos = docElement.scrollTop;
  // 문서 전체의 스크롤top을 이용하여 스크롤 양을 콘솔 창에 찍어준다.
  // console.log(scrollPos)


  // 스크롤 이벤트 

  window.addEventListener('scroll',function(){
    scrollPos = docElement.scrollTop;
    console.log(scrollPos);

    GoToButton.className=(scrollPos > offset) ? 'visible':'';
  });
  
  // 스크롤 양을 0으로 바꿔서 위로 올라가도록
  
  GoToButton.addEventListener('click',function(event){
    // GOtoButton이 a링크를 타고 가는걸 막기 위해 
    // GOtoButton기본 속성을 넣기 위해 event객체 파라미터로 전달
    event.preventDefault();
    // 링크의 본연의 기능을 막는 코드.
    // docElement.scrollTop = 0;
    scrolltoTop();


  });
    function scrolltoTop(){
    // 일정시간마다 하는 할일을 하는 함수를 만들어준다, 
    // let scrollInterval = setInterval(할일, 시간)
    // 0.0015s = 15
    // 할일 = fucnction() {실제로 할일}
    // 윈도웨 스크롤 양이 0이 아닐때 실제로 할일 window.scollBy(x,-55);
    // 윈도우에 스크롤 양을 빼는 메소드 scollBy(x축 , y축)
    // 스크롤이 0이면 setInterval 멈추는 clearInterval(이름);
      
    let scrollInterval = setInterval(function() {
      if(scrollPos != 0) {
        // 스크롤 양이 0이 아니면 윈도우 스크롤 조금씩 빼기
        window.scrollBy(0,-150)
        
      }else {
        clearInterval(scrollInterval);
      }
    }, 15)


    };


  // // 클래스명을 새로바꾼다.
  // if(scrollPos > offset){
  //   GoToButton.className= 'visible'
  // }else {
  //   GoToButton.className= '';
  // }


  // 클래스명을 새로바꾼다.
  // GotoButton객체가 scroll pos>offset 참이면 visible , 아니면 ''

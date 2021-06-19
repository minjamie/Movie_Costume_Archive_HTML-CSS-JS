$(function(){
  //변수지정
  var $menu = $('#top_menu ul li');
  var $contents = $('#contents > section');
  console.log($contents)
  

  
  //메뉴 클릭 이동
  $menu.click(function(){
    var checkIndex = $(this).index();
    console.log(checkIndex);
    var topFromSection = 
    $contents.eq(checkIndex).offset().top ;
    console.log(topFromSection);

    // 해당위치로 이동하도록 작성
    $('html,body').animate({scrollTop:topFromSection});
    // 활성화된 메뉴 표시하기
    // 모든 메뉴에서 클래스명 on을 제거하고, 클릭한 그 요소에만 on 추가하기
    // 만약 siblings('.strong')하면 형제 자매 요소 중 class명 strong있는 것들 만 선택
    // $(this).addClass('on').siblings().removeClass('on');
    // 만약 클릭한 그 요소에만 on 추가하고 나머지 형제들은 제거하면

    $(window).scroll(function (){
      var currentWindowScroll = $(this).scrollTop();
      // 현재 스크롤 양과 각각 섹션들이 가지고 있던 상단의 양과 비교해야한다.
    
      $contents.each(function(i){
        //각 섹션이 가진 스크롤 양과 현재 스크롤 위치 비교해야한다.
        //해당 i 번째의 인덱스 번호를 가지고 쓸 수 있다. 반복문과 같이
        var sectionScroll = $(this);
        if(sectionScroll.offset().top -53 < currentWindowScroll ) { //현재 스크롤을 해당 컨텐츠(섹션)가 화면 상단에서 거리보다 많이했다면
          $menu.removeClass('on');
          $menu.eq(i).addClass('on')

        }

      });
    });



  });


  //스크롤 이동 반영하기

});

//메인 페이지의 NAV 스크롤 이벤트
let lastScrollY = 0;

function onScroll() {
  const STANDARD = 250;
  // NAV바의 크기 만큼 스탠다드를 변수에 담아준다.
  const nav = document.querySelector('#top_menu');
  // NAV영역 선택
  if (window.scrollY > STANDARD) {
    // 스크롤이 250이상된다면 지정한 NAV에 클래스 shadow 값을 추가한다.
    nav.classList.add('shadow');
      // 스크롤이 250이상 아니면 지정한 NAV에 클래스 shadow 값을 제거한다.
  } else {
    nav.classList.remove('shadow');
  }
  
  if (window.scrollY < lastScrollY) { // 스크롤 방향이 윗쪽 일 때
    nav.classList.add('lift-up');
      // 직전에 스크롤이 현재 스크롤 보다 커지면 메뉴바가 올라간 내려온다./
  } else { // 스크롤 방향이 윗쪽 일 때
    nav.classList.remove('lift-up');// 스크롤 방향이 아랫쪽 일 때
  // 이 외에 현재 스크롤이 직전 스크롤 보다 더 클 경우
  // nav바가 올라가는 클래스가 제거되어 nav 바가 나타난다.
  }

  lastScrollY = window.scrollY;
  // 직전에 스크롤 이벤트에 현재 스크롤Y 프로퍼티를 담아
  // 스크롤이 위로 향하는지 아래로 향하는지에 대한 방향을 감지한다. 
}


window.addEventListener('scroll', onScroll);
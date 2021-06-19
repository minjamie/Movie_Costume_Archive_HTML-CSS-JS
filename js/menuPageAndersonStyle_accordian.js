var btnCollapse = document.getElementById('btnAll'),
    question = document.getElementsByClassName('panel-question'),
    heading = document.getElementsByClassName('panel-heading'),
    answer = document.getElementsByClassName('panel-body');
var i;
var j;
var x;
var y;
btnCollapse.addEventListener('click',function(){
for(y= 0; y < answer.length ; y++) {
    answer[y].style.display ="none";
  };
});

for(i=0; i<heading.length; i++) {
  heading[i].addEventListener('click',function(event){
    for(j=0; j<question.length; j++) {
      question[j].classList.remove('active');
      event.target.parentNode.classList.add('active')
      activateBody();
    }
    
  });
};

function activateBody() {
  for(x= 0; x<answer.length; x++) {
    answer[x].style.display ="none";
  };
// 패널에 바디가 모두 안보이도록 
// .panel-question.active.panel-body
// 패널 퀘스션 중에 액티브가 있는 자식의 패털의 바디가 나타나도록 
  var activePanel = document.querySelector('.panel-question.active .panel-body')
  activePanel.style.display ="block"
};
activateBody();
// 열자마자 닫혀있도록

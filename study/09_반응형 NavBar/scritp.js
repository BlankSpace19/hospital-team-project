const tooglebtn = document.querySelector('.tooglebtn');
const menu = document.querySelector('.menu');
const sns = document.querySelector('.sns');

tooglebtn.addEventListener('click', ()=> {
  //tooglebtn.addEventListener('click', function(){
  // tooglebtn 이 클릭 될때마다 이 함수를 호출해줘
  menu.classList.toggle('active');
  sns.classList.toggle('active');
    // active 함수를 토글해주라:있다면 빼주고 없다면 추가함

});
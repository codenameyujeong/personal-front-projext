 //const toggleBtn = document.querySelector('.navbar__toggleBtn');
 const menu = document.querySelector('.navbar__menu');
 const icons = document.querySelector('.navbar__icons');
// window.onload = function() { 
//오류떠서 구글링결과 script위치선정바꿈 안되서 위에 window써봄
//그래도 안되서 그냥 id값줘서 가지고오니까 된다..


//     console.log('안녕하세요');
// toggleBtn.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     icons.classList.toggle('active');
//     console.log
// });}

var btn = document.getElementById('submit');
//function() {}할일(함수)
btn.addEventListener('click', function() {
    //클릭하면 실제로 할일
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
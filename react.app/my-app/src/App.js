//eslint-disable 이거 쓰면 waring메세지뜨는 코드 지워줌
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//class를 jsx에서는 classname이라 정의한다 문법이다름.
function App() {

  let post = '강남 우동 맛집';
  //또 다른 변수 선언방법 보관할 자료 a에는남자코트 추천이 들어가고b는state변경하는함수
  // let [글제목1, a] = useState('남자 코트 추천')
  // let [글제목2, b] = useState('강남 우동맛집')
  // let [글제목3, c] = useState('파이썬 독학')
  
  // let [logo, setLogo] = useState('ReactBlog')
  //1.document.querySelector('h4').innerHTML = post; 원래 js에서 html쓸려하고하면
  //2.그러나 변수선언 후 변수를 중괄호{}안에 변수명을 넣으면 변수가 들어가게됨.
  //3.  style={{color:'red', fontSize:'16px'}} style 집어넣을떈 
  //style ={{이름:'값'}}font-size는 jsp에서 쓸떄 fontSize대문자
  //4.div안에 div를 써야됨.
  //state를 쓰는경우 html이 재렌더링 된다. 일반 변수선언을 쓰면 따로 코드를 쳐서html에 적용시켜야됨.

  // let num = [1, 2];
  // let a = num[0];//넘중에 첫번쨰뽑아줘
  // let c = num[1]//넘중에 두번쨰 뽑아줘
  // let [a, c] = [1, 2];//a는1 c는2
  // let [글제목, a] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);//state변경함수 따봉변경
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학', '새우깡 맛집'] );   
  let [클릭, 클릭변경] = useState(1);
  
  let [modal,setModal]= useState(false);
  let [ex,setEx]= useState(false);
  

  return (
    <div className="App">
     <div className="black-nav">
      <h4>ReactLogo</h4>
     </div>

     <button onClick={ ()=>{ 
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy)
      } }> 수정버튼 </button>

     <div className="list">
     <h4>{글제목[0]} <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
     <p>2월 17일 발행</p>
     </div>

     <div className="list">
     <h4 onClick={()=>{ setEx(!ex)}}>{글제목[1]}</h4>
     <p>2월 17일 발행</p>
     </div>
     { 
      [1,2,3].map(function(a){
        return (
          <div className="list">
     <h4>{글제목[a]}</h4>
     <p>2월 17일 발행</p>
     </div>
        )
      })
     }

     <div className="list">
     <h4 onClick={()=>{ setModal(!modal)}}>{ 글제목[2] }</h4>
     <p>2월 17일 발행</p>
     </div>
     { 
      modal == true ? <Modal/> : null
     }
    </div>
  );
}
//모달이라는 html을 알아보기 쉽게 component로 줄여쓰기 function을 앱function밖에 만들어주고 html을 밖고
//함수명을 정해준 뒤 html에 적용하면 된다.<Modal/> = <Modal></Modal>
function Modal(){
  return(
  <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
      </div>
      
  )
}

function Ex(){
  return(
  <div className='ex'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
      </div>
      
  )
}




export default App;


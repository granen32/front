/*
함수(function) :  자주 쓰는 실행 코드들을 블록단위로 묶어서 패키징 해놓은 형태
함수정의 : 미리 함수 키워드를 이용해서 자주 쓸 코드들을 묶어서 정의하는 행위
함수호출 : 정의되어 있는 함수를 호출을 해야지만 비로서 기능이 실행됨

함수의종류
선언적 함수
- 함수에 따라 미리 이름을 붙여서 정의해놓은 형태
- 자바스크립트 파일을 읽을 때 선언적 함수를 우선적으로 읽어줌
- 선언적 함수는 호출위치가 자유로움

익명함수
- 함수에 이름이 없이 정의하는 형태
- 익명함수 자체만으로는 호출이 불가능하다
- 변수에 익명함수를 대입하거나 (대입형) 특정 이벤트 객체에 대입하는 식으로 호출가능하다.

대입형 함수
- 변수에 익명함수가 대입된 형태
대입형 함수 같은 경우 변수에 익명함수가 대입된 형태라면 호출을 할시 위치에 따라 호출이되고 안되고 하는 현상이 있음\
function을 선언하고 나서 그 후에 선언하면 괜찮지만 그렇지 않다면 x

즉시실행함수
- 함수가 자기자신을 정의하자마자 바로 자신을 호출
- 특정 코드블럭 안쪽에 있던 값들이 외부로 빠져나갈 때가 있음 그럴 때 즉시실행함수를 쓰게되면 그 안쪽의 값들은 캡슐화가 되어 외부로 호출되지 않음
*/


function plus(){
  const num1 = 2;
  const num2 = 3;
  console.log(num1+num2);
}
plus();


const minus = function(){
  const num1 =  2;
  const num2 = 5;
  console.log(num1 - num2);
}
minus();

// 즉시실행함수
(function(){
  const num1 = 2;
  const num2 = 3;
  console.log(num1+num2);
})();
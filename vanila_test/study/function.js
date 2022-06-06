let width1 = 10;
let height1 = 20;
let area =width1 *height1;
console.log(area);

// 함수란?
// 함수는 자바스크립트에서 기본적인 구성 블록중의 하나이다. 함수는 작업을 수행하거나 값을 계산하는 문장 집합 같은 자바스크립트 절차 즉 뭘 하든 이거를 써야 한다.
// 함수 정의
// 함수 정의란 다음과 함수선언과 같은 의미로 구성되어 있다. 함수의 이름, 괄호 안에서 쉼표로 분리된 함수의 매개변수 목록, 중괄호 {} 안에서 정의하는 자바스크립트 표현
// 만약에 매개변수로 이것을 전달핟거나 함수가 객체의 속성을 변하게 하는 경우
function myFunc(theObject) {
  theObject.make = "Toyota";
}
// 함수 선언 및 함수정의를 하는 걸 얘기한다.
var mycar = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = mycar.make; // x 의 값은 "Honda" 입니다.

myFunc(mycar);
y = mycar.make; // y 의 값은 "Toyota" 입니다.
// (make 속성은 myFunc에서 변경되었습니다.)

// 함수 호출
// 함수를 정희하는 것은 함수를 실행하는 것이 아님! 그렇기에 함수를 정의하는 것은 간단히 함수의 일므을 지어주는 거고 함수가 호출 될 때 무엇을 할지 지정해주는 것을 함수 호출이라고 한다. 매개변수를 가지고 짖어된 행위를 수행하는 것입니다. 예를 들어, 만약 여러분이 어떤 함수를 정의 했다면 이렇게 활용해야 한다 ㅇㅇ
function square(n) { return n*n }
// 정의
console.log(square(5));
// 호출
// function이란 이 생성자를 직접 호출하여 동적으로 함수를 생성할 수도 있으나, 보안 문제 및 eval과 유사한(그러나 훨씬 덜 심각한) 성능 문제가 발생할 수 있습니다. 하지만 eval과 달리, Function 생성자는 전역 범위로 한정된 함수만 생성합니다.

// 함수의 범위
// 함수 내에서 정의된 변수는 tdz에 걸려서 함수의 범위에서만 호라용이 가능하다. 그러나 함수가 정의된 모든 변수나 함수는 접근 할 수가 있다.
// 즉 전역변수는 모든 전역변수를 액세스 할수 있고 다른 함수내에서 정의된 함수는 부모함수와 부모함수가 액세스 할수 있는 다른 변수에 정의된 모든 변수를 가져올 수 있다.


function getArea(width,height){
  let area = width *height;
  console.log(area);
  // 결과 값 같은 걸 받아보고 싶을 때는 
  return area;
  // 겟에어리어 리턴받는 값을 반환하게됨
}

let araa2 =getArea(100,200);
console.log(araa2);

// 함수 표현식
let hello = function (){
  return "안녕하세요 여러분";
}
console.log(hello);
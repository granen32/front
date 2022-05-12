/*
함수 매개변수(parameter)
- 함수 외붕에서 함수 내부로 특정값을 전달하기 위한 통로이름

인수(argument)
- 함수를 호출 때 파라미터를 통해서 전달되는 값

반환값(return)
- 함수 내부에서 만들어진 값을 함수 호출시 외부로 반환
- 함수구문 실행도중 특정시점에서 강제로 코드를 실행중단될 때
- 내부에 있는 결과값을 바깥으로 호출하는 역활
*/

// 이렇게 넣어주는 걸 매개변수라함
function plus(num1,num2){
  const result = num1+num2;
  console.log(result);
  return result;
}

plus(3,2); //함수를 호출 때 파라미터를 통해서 전달되는 값 3하고 2는 인수 아규먼트
const total = plus(3.125,5.456);
console.log(total);
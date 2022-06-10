let isSwitch = false;
// 참이나 거짓을 가지는 자료형을 불린형이라고 한다.
console.log(!true);

// !  not 부정연산자다 true 면 false false 면 true

console.log(true && true);

//  && 피연산자가 둘다 참이면 참

console.log(true || false);
// || or 연산자는 하나가 참이면 참

//노드 리콰이어 다른 js에 함수 exports를 가져와서 활용이 가능함
const calc = require("./calc");

console.log(calc);
console.log(calc.add(1,5));
console.log(calc.minus(4,5));
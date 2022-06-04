let age = 25; 
// 정수
let tall = "175.9";
let tall2 = "175.9";
// 실수

let inf =Infinity;
// 무한대
let minusinf = -Infinity;
let nan = NaN;
// 수학적 연산 실패시 나타남


console.log(age * tall);
// 지금 문자열 * 숫자형을 하였지만 결과 값은 숫자형이 나옴
// 이런 경우 묵시적인 형변환이라 한다 자바스크립트에서 묵시적으로 형변환을 연산해줌
console.log(age + tall2);
// 하지만  + 더하기 같은 경우에는 묵시적인 형변환이 아니기 때문에 문자열로 더하게 된다.

let transNumber = parseInt(tall2);
console.log(transNumber);

// parseint 는 형태를 변환을 해주고 이런 경우는 명시적인 형변환 이라 한다.
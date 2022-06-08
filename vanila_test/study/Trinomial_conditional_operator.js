// 삼항 조건 연산자
//  조건문 ? "truthy 실행" : "falsy일시 실행"
let  a = 3;
a >= 0 ? console.log("양수") : console.log("음수");


let score = 40;

const result = score >= 90 ? console.log("a입니다") : score >= 50 ?console.log("b") : console.log("f");
console.log(result);

// 단락회로평가
// 첫 연산자의 결과값에 따라 오른쪽의 연산자에 결과값이 나온다.
console.log(true && true);
// 이런 경우 왼쪽이 트루니 오른쪽 연산을 하지만
console.log(false && true);
// 이런 경우라면 왼쪽이 falsy 하니 바로 연산이 종류된다.

const getName= (person)  =>{
  const name = person && person.name;
  return name || "객체가 아닙니다.";
}
let person = null;
const name = getName(person);
console.log(name);


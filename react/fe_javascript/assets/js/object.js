/*
객체(object)
데이터를 property 라는 인덱싱을 통해 구조적으로 묶어놓은 형태
*/

let student1 = {
  name : "홍길동",
  age : 28,
  inFemale : false,
  address : 'Seoul'
}

console.log(student1.name);
console.log(student1.inFemale);
console.log(student1.address);
console.log(student1["name"]);

student1.address= "Busan";
console.log(student1.address);

// 자료형 검사
let text = "hello";
let num = 1;
let boolean = true;
let blank;
let notging = null;
let colors =["red","blue","yellow"];
let student ={
  name : '권규형',
  age : 30,
  isFemale :false,
  address:"seoul"
}

console.log(typeof text);
console.log(typeof num);
console.log(typeof boolean);
console.log(typeof blank);
console.log(typeof notging);
console.log(typeof colors);
console.log(typeof student);
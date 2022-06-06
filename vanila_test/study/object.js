// 객체형은
// Non-primitive type (비원시타입)
/*
  한번에 여러개의 값을 가질 수 있고 여러개의 고정되지 않은 동적공간을 사용
 */

  let person = new Object();
  // 객체 생성자 방식 리터럴 방식이 더 편리함

  let person2 = {
    key : "value",
    key2 : "value2",
    // 프로퍼티-> 멤버라함
    key3 : true,
    key4 : undefined,
    key5 : [1,2],
    key6 :function(){
      // 객체의 메서드라함
      console.log(`안녕 나는 ${person2["key2"]}`);
    }
  };
  console.log(person2);
  console.log(person2.key2);
  // 점 표현식으로 프로퍼티 값에 접근할 수 있다 점 표기법이라함
  // 객체 리터럴 방식 ->> 중괄호로 만드는 방법
/*
  객체는 여러가지 값들을 가질 수 있음
  중괄호 안에 있는 객체의 값을
  key : value 를 가지고 넣어야 한다. (키:벨류)
  키/벨류를 다 가지는 걸 프로퍼티라 얘기한다. 객체 프로퍼티라함
  즉 객체속성임 프로퍼티 벨류에는 무엇이 와도 상관이 없음
 */

  // 객체 접근법
  console.log(person2.key2);
  // 점 표현식으로 프로퍼티 값에 접근할 수 있다 점 표기법이라함
  console.log(person2["key4"]);
  // 괄호 표기법 저기 키부분을 문자열 형식으로 꼭 넣어줘야함
  // 네임을 변수로 인식하기 때문에 꼭 네임 변수를 만들어주든 아니라면 키값을 넣어줘야함

let person3 = {
  name : '이정환',
  age :25
}
console.log(getPropertyValue("name"));
function getPropertyValue(key){
  return person3[key];
}

person3.location = "한국";
console.log(person3);
// 프로퍼티를 추가 및 변경할 때는 점표기법을 활용할 수 있다.

// 삭제하는 법
delete person3.age;

// 기존 프로퍼티를 널로 바꿔줘도 삭제가된다!

console.log(`name : ${"name" in person2}`);
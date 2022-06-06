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
    key3 : true,
    key4 : undefined,
    key5 : [1,2],
    key6 :function(){

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

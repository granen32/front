/*
자료형(data type)
원시형 자료(primitive type) : 특정값이 메모리에 바로저장 -> 문자/숫자/논리/언디파인드

undefined(undefind) : 변수를 선언하고 값을 할당하지 않으면 언디파인드가 자동으로 할당됨

참조형 자료(reference type): 값의 위치하고 있는 참조 주소값만 메모리에 저장되는 것
-->> 값을 가지고 활용할 수 있는 기능들이(관련내장함수까지 같이 참조)
null(oject) :명시적으로 특정 변수의 값을 비워둘 때 null을 활용함
array(oject) : 연관된 값들을 그룹으로 묶어서 관리하는 자료형태
객체(oject) : 데이터를 key 라는 인덱싱을 통해 자료를 구조적으로 묶어놓은 형태

형변환 : 특정 조건이 부합되면 자료형이 강제로 변환되는 현상

Array : 연관된 값들을 그룹으로 묶어서 관리하는 자료형태
*/

let colors = ["red","blue","yellow"];
console.log(colors);
// 배열은 순서값을 가지고 인덱스를 처리함
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

colors[0]="redblue";
console.log(colors[0]);
// 반복문
// 반복을 해야 하는 작업이 필요할 때 사용하는 반복문이다.
// 프로그래밍의 반복은 같은 것을 계속 그리고 계속 반복해서 하는 것에 모든 관계가 있는데, 이는 프로그래밍 언어에서 반복(iteration)이라고 일컫어집니다.

const arr = ["a","b","c"];

// for 반복문
for (let i = 1; i <= arr.length; i++) {
  // () -> 컨디션 상태 반복을 할 컨디션 i를 선언 및 활용
  console.log("권규형");
}

// 객체를 순회하기

let person = {
  name : "이정환",
  age :25,
  tall : 178
};

const personkey = Object.keys(person);
// 객체를 배열로 반환해줌
console.log(personkey);

for(let i =0; i<personkey.length; i++){
  console.log(personkey[i]);
  // 이런 경우는 키값만 나옴
  // 벨류값까지 나오게 하고 싶다면?
  const curkey = personkey[i];
  const curvalue = person[curkey];
  console.log(`${curkey} : ${curvalue}`);
}

// 배열 내장함수
// 배열 순회

const arr4 = [1,2,3,4];
const newArr = arr4.map((item) =>{
  return item *2;
});
// for (let i =0; i < arr.length; i++){
//   console.log(arr4[i]);
//   // 너무 함수가 길어짐 그냥 배열 내장함수 사용하면됨
// }
arr4.forEach((each)=>console.log(each));
// arr4.forEach(
//   (each)=>
//   newArr.push(each*2)
// );
// console.log(newArr);

// map은 리턴값을 넣을 수 있음
// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

const arrlist = [1,2,3,4,5,6];
let number3 = 3;

arrlist.forEach((index) =>{
  if(index === number3){
    console.log(true);
  }
})
// 더 간단하게 하는방법
// 인클루드 같은 경우는 타입까지 확인을 해줌
// -> 불리언 식으로 리턴해줌
console.log(arrlist.includes(number3));

// index를 출력하는 방법
// 주어진 배열에서 인덱스를 반환하는 함수지만 일치하는 경우가 없다면 -1을 반환한다.
console.log(arrlist.indexOf(number3));

// 배열의 인덱스를 가져와줘!!
// 콜백함수를 넣어주고 엘리먼트를 가져가게됨 엘리먼트 하나하나는 객체임
const colorArr = [
  {color : "red"},
  {color : "blue"},
  {color : "black"},
  {color : "purple"}
]
// 배열에 프로퍼티에 접근하는 방법
const idx = colorArr.findIndex((index)=>{
  return index.color === "red";
  // return 을 넣어줘야지 값이 제대로 나옴
});

console.log(
  colorArr[idx]
)

//findindex 는 배열에서 같은 값이 여러개 있어도 그 요소중에 제일 가까운 값만 찾음
// findindex 는 -> 배열에 인덱스 find는 엘레먼트 자체를 반환한다.

// 배열을 필터이 해보자!
// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
const colorlist = [
  {num :1, color: "red"},
  {num :2, color: "orange"},
  {num :3, color: "blue"},
  {num :4, color: "black"},
  {num :5, color: "purple"},
]

console.log(
  colorlist.filter((index) =>{
    return index.color === "blue";
  })
);

// 배열을 자르는 방법 slice
console.log(colorlist.slice(0, 3));

// 배열을 붙이는 방법
const colorlist2 = [
  {num :6, color: "black"},
  {num :7, color: "purple"},
]
console.log(colorlist.concat(colorlist2));

let chars = ["나","다","가"];
// 문자열을 사전순으로 정리해보기
chars.sort();
console.log(chars);
let numbers = [0,1,3,2,10,30,20];
// sort는 사전순으로 정리함
// 문자로 정렬하게 되면 0 먼저 1먼저 2먼저 이렇게됨

numbers.sort();
// 이런 경우 비교함수를 만들어서 비교해야함
const compare = (a,b) =>{
  // 1. 같다/2.크다/3.작다
  if ( a >b ){
    return 1;
  }
  else if(a<b){
    return -1;
  }else{
    return 0;
  }
  // 음수가 나오면 앞으로 크면 뒤로 같으면 자리가 안바꿈 오름차순
}
numbers.sort(compare);
console.log(numbers);
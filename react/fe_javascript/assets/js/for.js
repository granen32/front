/*
for 문 : 반복문 여러가지 반복되는 업무를 
for문 전용으로 배열방법으로 돌릴 수 있는
*/

const colors = ["red","green","blue","aqua","pink"];
// for(let i=0; i<colors.length; i++){
//   console.log(colors[i]);
//   false
// }

const classA =[
  {
    name:"adny",
    age :20,
    addresss:'seoul'
  },
  {
    name:"emema",
    age :20,
    addresss:'seoul'
  },
  {
    name:"david",
    age :20,
    addresss:'seoul'
  }
]

// for(let num=0; num<classA.length; num++){
//   console.log(classA[num].name);
// }

for (let color of colors){
  console.log(color);
}
// value 값 뽑아보기
const student1 ={
  name:'david',
  age:20,
  hobby:"sports"
}

for(let human in student1){
  console.log(student1[human]);
}
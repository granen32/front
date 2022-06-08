let a = [];
// 트루가 아니여도 참 같은 값이라고 불러서 트루시라고 부름
if(a){
  console.log("true");
}else{
  console.log("false");
}
let b = null;
if(b){
  console.log("true")
}else{
  console.log("false")
}
// falsy한 값은 undefined, null, 0, -0, NaN 

const getName = (person) =>{
  if(person === undefined || person === null){
    return "객체가 아닙니다."
  }
  return person.name;
}

let person = {
  name : '이정환'
}

const name = getName(person);
console.log(name);
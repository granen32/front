// 비구조화 할당
// 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별변숭레 할당하는 것을 얘기한다.
// ex

let a ,b , rest;
[a,b] = [10,20];
console.log(a);
console.log(b);

[a,b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);


let object= { one : 'one', two : 'two', three : 'three'};
let {one, two, three} = object;
console.log(one, two, three);
console.log(object);
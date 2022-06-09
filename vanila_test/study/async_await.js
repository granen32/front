// async 와 await
// async 프로미스 처럼 비동기를 다루고 프로미스의 기능을 좀 보완해주는 역활을 함

function hello(){
  return 'hello';
}

 async function helloAsync(){
  return "hello async"
}
// 프라미스 객체가 그대로 리턴이됨

console.log(hello());
console.log(helloAsync());

// 프라미스가 호출이 되는 거면 then이 사용이 가능함

helloAsync().then((res)=>{
  console.log(res)
});
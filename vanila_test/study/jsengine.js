;// 자바스크립트 엔진
// heap(메모리할당) 과 call stack(코드 실행)이 있음

function one(){
  return 1;
}

function two(){
  return one() + 1;
}
function three(){
  return two() + 1;
}
console.log(three());
// 프링글스 통을 생각하면 된다. 먼저 가장 마지막에 호출된 원함수가 콜스택에서 빠지고

function asyncAdd(a,b, cb){
  setTimeout(()=>{
    const res = a + b;
    cb(res)
  }, 3000)
}
asyncAdd(1,3, (res) => {
  console.log("결과 : ", res);
});

/*
heap ||| call stack
         function asyncAdd(a,b, cb) -> 셋타임 아웃 비동기가 들어가 있음
         asyncAdd(); 호출 부분이 가장 먼저 들어감
         main context

         callback queue
         cb() -> 콜백큐로 옮겨짐
         그 이후 이벤트 루프로 콜스택으로 옮겨짐


web apis
setTimeout() cb()
*/
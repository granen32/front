// Promise
// 비동기 결과를 담고있다가 언제든 꺼낼수있는 변수


function isPositive(number, resolve, reject){
  setTimeout(()=>{
    if( typeof number === 'number'){
      // 성공 -> resolve
      resolve(number >=0 ? "양수" : "음수");
    }else{
      // 실패 -> reject
      reject("주어진 값이 숫자형이 아닙니다.");
    }
  }, 2000)
}


isPositive(10, (res)=>{
  console.log("성공적이다.", res)
}, (err) =>{
  console.log("실패하였음", err)
});

function isPositiveP(number){
  const executor = (resolve, reject) =>{ // executor 실행자
    setTimeout(() => {
      if( typeof number === 'number'){
        // 성공 -> resolve
        resolve(number >=0 ? "양수" : "음수");
        console.log(number);
      }else{
        // 실패 -> reject
        reject("주어진 값이 숫자형이 아닙니다.");
      }
    }, 2000);
  }
  const asyncTask = new Promise(executor);
  // 바로 프라미스 안에 넘겨주게 되면 실행이됨
  return asyncTask;
  // 이 함수는 프로미스로 반환하게 된다.
}

const res = isPositiveP(101);

res.then((res)=>{
  console.log("작업 성공:",  res);
}).catch((err)=>{
  console.log("작업 성공:",  err);
})

let myFirstPromise = new Promise((resolve, reject) => {
  // 우리가 수행한 비동기 작업이 성공한 경우 resolve(...)를 호출하고, 실패한 경우 reject(...)를 호출합니다.
  // 이 예제에서는 setTimeout()을 사용해 비동기 코드를 흉내냅니다.
  // 실제로는 여기서 XHR이나 HTML5 API를 사용할 것입니다.
  setTimeout( function() {
    resolve("성공!")  // 와! 문제 없음!
  }, 250)
})

myFirstPromise.then((successMessage) => {
  // successMessage는 위에서 resolve(...) 호출에 제공한 값입니다.
  // 문자열이어야 하는 법은 없지만, 위에서 문자열을 줬으니 아마 문자열일 것입니다.
  console.log("와! " + successMessage)
});
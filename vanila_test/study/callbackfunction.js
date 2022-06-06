// 콜백함수
// 콜백함수란? --> 다른 함수에 매개변수로 전달된 함수이며 함수내부에서 호출되어 작업을 실행한다.
// 함수의 파라매터로 함수를 넘겨주는 걸 콜백함수라 한다.
function greeting(name) {
  alert('Hello ' + name);
}
function processUserInput(callback) {
  let name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
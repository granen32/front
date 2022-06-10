// api와 fetch
// api란(응용 프로그램 인터페이스)
/*
응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻한다.
주로 파일 제어, 창제어, 화상 처리, 문자제어 등을 위한 인터페이스를 제공한다.
*/

async function getDate(){
  let rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}
getDate();
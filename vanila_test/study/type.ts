let age :number = 30;
//  숫자형 타입스크립트

let isAdult :boolean = true;
// 논리형 타입스크립트

let a : number[] = [1,2,3]
// 숫자형 배열 타입스크립트

let a2 :Array<number> = [1,2,3];

// 튜플 (Tuple)

let b : [string,number] = ["abcd", 3];
// -> 인덱스별로 타입이 다를 때 사용이 가능하다.
// 첫요소는 문자형 이고 두번 째는 숫자형인 형태이다
b[0].toLowerCase();
console.log(b);
// 첫 요소가 문자형 이라 상관이 없지만
// 두 번째 요소는 숫자형이라 안된다.

// void, never

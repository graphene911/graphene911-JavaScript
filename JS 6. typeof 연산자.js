// typeof 연산자
// 다른 개발자가 작성한 변수의 타입을 알아야하거나
// API 통신 등을 통해 받아온데이터를 타입에 따라 다른 방식으로 처리해야 할 때 많이 사용된다.
const name = "Mike";

console.log(typeof 3);  // number
console.log(typeof name); // string
console.log(typeof true); // boolean
console.log(typeof "xxx"); // string
console.log(typeof null); // object
console.log(typeof undefined); // undefined


// typeof null = object == 객체형
// 사실 null은 객체가 아니다. 자바스크립트 초기버전의 오류
// 하위 호환성을 유지하기 위해 수정하진 않는다고 함.
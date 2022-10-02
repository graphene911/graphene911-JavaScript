// alert = 경고창을 띄우는 함수 ex) alert(name);
// console.log = 로그를 띄우는 함수 ex) console.log(name);

// 기본적인 변수 지정
// name = "Mike";
// age = 30

// 위 처럼 변수를 지정하면 협업시 위험!!
// 위의 변수명이 유일하다는 보장이 없다.
// 위 처럼 변수를 지정하면 마지막에 변경된 내용으로 덮어씌워지게 된다.
// 이를 방지하기위해 let 과 const를 사용해야 한다.
// let = 한번 선언 후에 다른 값으로 바꿀 수 있다.
// 바꾸는 방법은 의도적으로 let을 생략하고 적으면 된다.
// let name = "Mike";
// name = "Jay";
// const = 절대로 바뀌지 않는 상수를 입력할 때 사용!!
// const로 선언된 변수를 변경하려하면 에러가 발생한다.
// 그렇기 때문에 보통 파이, 최대값, 생일 등 바뀌지 않는 값을 입력할 때 사용하며
// 다른 개발자들에게 상수라는 것을 알리기 위해 대문자를 사용하는 것이 좋다.

// JAVASCRIPT에서 변수를 선언 할 때는
// 변하지 않는 값은 const
// 변할 수 있는 값은 let

// 변수는 문자, 숫자, $, _ 만 사용
// 첫 글자는 숫자가 될 수 없다.
// 예약어는 사용 할 수 없다.
// 가급적 상수는 대문자로 알려줘야 한다.
// 변수명은 읽기 쉽고 이해하기 쉽게 선언한다.

let name = "Mike";
let age = 32;
const BIRTH_DAY = "1991-05-04";

console.log(BIRTH_DAY);
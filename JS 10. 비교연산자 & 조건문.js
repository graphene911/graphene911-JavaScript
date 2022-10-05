// 비교 연산자

// <   >   <=   >=   ==   !=

console.log(10 > 5);
console.log(10 == 5);
console.log(10 != 5);

// 동등 연산자

const a = 1;
const b = "1";

console.log(a == b); //true

// 일치 연산자
console.log(a === b); // false (===는 type 까지 비교하게된다)



// 조건문
// if문
age = 19

if(age > 19){
  console.log("환영합니다.");
} else if(age === 19){
  console.log("수능 잘치세요");
} else{
  console.log("안녕히가세요.");
}
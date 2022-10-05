// 논리 연산자

// || => or
// 여러개 중 하나라도 true면 true
// 즉, 모든 값이 false 일때만 false
// ex) 스티브잡스는 한국인이거나(or) 남자이다
// ex result = true
// or는 첫번째 true를 발견하는 즉시 평가를 멈춤.

// code ex)
// // 이름이 TOM 이거나, 성인이면 통과
// const name = "g";
// const age = 20;

// if(name === "TOM" || age >19){
//   console.log("환영합니다.");
// } else {
//   console.log("성인만 입장이 가능합니다.");
// }

// && => and
// 모든 값이 true 일때만 true
// 즉, 하나라도 false면 false
// ex) 스티브잡스는 한국인이고(and) 남자이다
// ex result = false
// and는 첫번째 false를 발견하는 즉시 평가를 멈춤.
// code ex)
// 이름이 Mike 이고, 성인이면 통과
// const name1 = prompt("이름을 입력하세요");
// const age1 = prompt("나이를 입력하세요");

// if(name1 === "Mike" && age1 > 19){
//   console.log("환영합니다.");
// } else {
//   console.log("입장이 불가능 합니다.");
// }

// !  => not
// ture 면 false
// false 면 true
// code ex)
// 나이를 입력받아 성인이 아니면 돌아가라고한다.

// const age = prompt("나이를 입력하세요");
// const isAge = age > 19;

// if( !isAge ){
//   console.log("돌아가...");
// } else{
//   console.log("환영합니다.")
// }

// 비교 연산자의 우선순위 and 가 or보다 높다
// 남자이고, 이름이 Mike이거나 성인이면 통과
const name = prompt("이름을 입력하세요");
const age = prompt("나이를 입력하세요");
const gen = confirm("당신은 남자입니까?")


if(gen === true && (name === "Mike" || age > 19)){
  console.log("통과");
} else {
  console.log("돌아가...");
}
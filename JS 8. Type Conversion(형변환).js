// type conversion (형변환)

// String() => 문자형으로 변환
// Number() => 숫자형으로 변환
// Boolean() => 불린형으로 변환

// 수학점수와 영어점수를 입력받아 평균을 구해보는 예시

// const mathScore = prompt("수학 점수를 입력 하세요."); // ex) 80
// const engScore = prompt("영어 점수를 입력 하세요.");  // ex) 90
// const result = (mathScore + engScore) / 2;
// console.log(result);
// result => 4540
// 이상한 값이 나오게 된다.

// 값을 넣어 코드가 잘못된건지 테스트 해보자.
// const mathScore = 80;
// const engScore = 90;
// const result = (mathScore + engScore) / 2;
// console.log(result);
// result => 85 제대로된 값이 출력 된다.


// 이유는 prompt로 입력받는 값은 문자형이다. 즉, 숫자 90이 아니라 문자 90이었던 것.
// / 2 가 동작 한 것은 숫자형이 아니어도 나누기 같은 계산식은 숫자로 인식해서 자동 계산 된다.
// 이러한 과정을 자동 형변환 이라고 한다.
// 자동 형변환은 원인을 알 수 없는 오류를 가져올 수 있기 때문에 꼭 자료형을 이용하여 형변환을 해야한다.
// 이와 같은 작업을 명시적 형변환이라고 한다.
const mathScore = prompt("수학 점수를 입력 하세요.");
const engScore = prompt("영어 점수를 입력 하세요.");
const result = (Number(mathScore) + Number(engScore)) / 2;
console.log(result);

// 1. String()
console.log(
String(3),
String(true),
String(false),
String(null),
String(undefined)
)

// 2. Number()
console.log(Number("1234")) // => 1234
// 만약 숫자가 아닌 문자가 포함 된다면 NaN이 되니 주의해야 한다.
console.log(Number(true),Number(false));
// Number는 true와 false일 경우 1과 0으로 표시된다.
// Number(null) == 0
// Number(undefined) == NaN

// 3. Boolean
// Boolean은 0, ""(빈문자열), null, undefined, NaN을 제외하고 모두 true로 표시된다.
console.log(Boolean(1), Boolean(123), Boolean("javascript"))
console.log(Boolean(0), Boolean(""), Boolean(null), Boolean(undefined), Boolean(NaN))

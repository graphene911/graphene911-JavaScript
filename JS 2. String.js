//String

const name = "Mike"; 
const age = 30;

console.log(name);
console.log(age);

const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

// 큰따옴표
const message1 = "I'm a boy";

// 작은따옴표만 사용하고 싶으면 \역슬레쉬를 넣어주면 특수문자로 인식함.
const message2 = 'I\'m a boy';

// 백틱은 문자열 내부의 변수를 표현해줄때 사용하면 편리하다
// 변수를 표현 할 땐 ${}사이에 변수를 써서 이용해야 한다.
const message3 = `My name is ${name}`;
console.log(message3);

// 표현식을 이용 할 수도 있다.
const message4 = `나는 ${30+2}살 입니다.`
console.log(message4);
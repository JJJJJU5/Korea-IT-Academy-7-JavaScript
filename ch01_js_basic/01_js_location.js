// document.write('자바스크립트 js파일에 위치<br>')
// var greeting = 'Hello World!';

// // console.log('Hello, JavaScript')
// cosole.log(greeting);

// var x =5;
// var y =6;
// var z = x + y;
// console.log(z);

// var x = 7;
// z = x + y;
// console.log(z);

// let car;
// console.log(car);

// 객체선언 및 초기화
// const person = {
//   firstName: 'Jone',
//   lastName: 'Doe',
//   age : 20,
//   eyeColor:'blue'
// };

// console.log(person);
// // 객체의 property 수정 방법 # 1
// person.firstName = '일';             // 이건 Java에서의 field 수정법
// person.lastName = '김';              // access modifier 배우기 이전
// console.log(person);
// //  객체의 property 수정 방법 # 2
// person['eyeColor'] = '검은색';              // Java에서의 Map 수정 방법
// person['age'] = 27;
// console.log(person);

// console.log(typeof x);     //string
// console.log(typeof y);     //number

// console.log(typeof {x:1, y:2}); // object
// console.log(typeof [1,2,3]); // object
// console.log(typeof null); // object

// let x = 2;
// let y = 3;
// z = x ** y;
// console.log(z)

// let x =3;
// let y = 2;
// console.log(x%=y); // x = x %y; = 3 % 2

// let a = 5;
// let b = 2;
// console.log(a**=b) // a = a ** b -> a = 5 ** 2 = 5^2 = 25

// 비교 연산자 부분
// let a = 3;
// let b = "3";
// console.log(a == b); // true
// console.log(a === b); //false
let point = 92;
let grade = (point >= 90) ? 'A' : (point >= 80) ? 'B' : 'C';
console.log(grade)

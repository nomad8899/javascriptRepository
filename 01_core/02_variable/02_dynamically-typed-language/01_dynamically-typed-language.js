/* 동적타입 언어 (dynamic / weak type language) */

var test;
console.log(typeof test); // undefind
// 선언만 해줌

test = 1;
console.log(typeof test); // number

test = 'javascript';
console.log(typeof test); // string

test = null;
console.log(typeof test); // object(o) null(X) 자바스크립트 버스 이지만 기존 코드에 영향을 줄 수 있어 수정X

test = Symbol();
console.log(typeof test); // symbol

test = true;
console.log(typeof test); // boolean

test = {};
console.log(typeof test); // object

test = [];
console.log(typeof test); // object

test = function(){};
console.log(typeof test); // function

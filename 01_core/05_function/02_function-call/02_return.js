/* 2.반환문(return) */

function hello(name) {
    console.log(name);

    return `${name}님 안녕하세요 :)`;

    //반환문 이후의 실행구문은 무시된다.
    console.log('나는 return 뒤에 나오지~~~!');
}

console.log(hello('판다'));

function func() {
    console.log('함수 호출');

    return;
}

console.log(func());
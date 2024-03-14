/* 함수 레벨 스코프 */
/* 
    var 키워드로 선언된 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정하는
    함수 레벨 스코프(function level scope)를 가진다.
    따라서 함수 외의 코드 블록(if, for , while, try/catch 등)은 지역 스코프로 인정하지 않는다.
*/

// 함수 밖에서 var 키워드로 선언된 변수는 전역 변수이다.
var i = 0;

// for 코드 블럭 내부에서 i 라는 변수를 선언하는데
// 이는 전역 변수로 이미 선언된 변수 i 가있어 중복 선언된다.
for(var i = 0; i < 10; i++) {
    console.log(`${i} 번째 실행중`);
}

// 의도와 달리 for 코드 블록 내부에서의 값 변화가 반영된다.
console.log(i);     // 0(x) 10(o)
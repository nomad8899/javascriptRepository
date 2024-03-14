/* impicit-coercion(암묵적 타입 변환) */

/* 02. 숫자 타입으로 변환 */

// 산술연산자의 피연산자는 모두 숫자여야 하므로 
// 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환
// (문자열 연결 연산 제외)

console.log(1 + '24');      //124
console.log(1 - '24');      // -23
console.log(1 * '24');      //24
console.log(1 / '24');      // 0.0416
console.log(1 % 'Javascript'); // NaN

// 대소 비교 연산자로 크기를 비교할 때도 피연산자는 모두 숫자여야 하므로
// 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환
console.log(10 > '5');

console.log('=========================');

// + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면
// 숫자 타입으로 암묵적 타입 변환 수행
console.log(+'');                   // 0
console.log(+'1');                  //1
console.log(+'JavaScript');         // NaN
console.log(+true);                 
console.log(+false);
console.log(+null);
console.log(+undefined);
console.log(+Symbol());
console.log(+{});
console.log(+[]);
console.log(+function(){});

/* 
    빈 문자열, 빈 배열, null, false = 0으로 암시적 형변환
    true는 1로 암시적 형변환,
    객체와 undefined, function은 변환되지 않아 NaN 
*/


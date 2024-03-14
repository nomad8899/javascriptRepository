/* 3. 에러 상황 */

// 1. 암묵적 전역
(function() {
    // 'use strict';
    x = 2;
    console.log(x);  // ReferenceError: x is not defined
})();

// 2. 변수, 함수, 매개변수의 삭제
(function() {
    // 'use strict'
    var x = 1;
    // 엄격모드에서는 식별자에 대해 'delete'를 호출할 수 없습니다.
    delete x;
})();

// 3. 매개변수 이름의 중복
(function(){
    'use strict'
    function test(x, x){
        return x + x; //SyntaxError: Duplicate parameter name not allowed in this context
    }

    console.log(test(1,2));
})();
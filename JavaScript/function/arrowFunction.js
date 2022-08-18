// 화살표 함수
// () => {} vs function () {}

// function 키워드 사용 
const double = function(x) {
    return x*2;
}

console.log('double: ', double(7))

// 화살표 함수 사용 
// 축약형으로 사용 가능하다. const doubleArrow = (x) => x*2
// 매개변수가 1개이면 소괄호도 생략할 수 있다. 
const doubleArrow = (x) => ({
     name : 'mark'
})

console.log('doubleArrow', doubleArrow(7))


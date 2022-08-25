const heropy = {
    // 속성 + 메서드 = 멤버 
    // fistName, lastName은 속성(프로퍼티)
    firstName: 'mark',
    lastName: 'pingu',
    // getFullName은 메서드
    getFullName: function() {
        return `${this.firstName} ${this.lastName}` //this란 객체를 지칭하는 것, 여기서는 heropy를 의미한다. 
    }
}

console.log(heropy)

// getFullName 함수 실행 
console.log(heropy.getFullName())

// 클래스 실습
// 생성자 함수란? new 라는 키워드를 통해서 user라는 함수를 실행, user 함수가 생성자 함수
// 생성되는 것은? 객체 데이터 
// 함수 이름이 파스칼케이스(대문자로 시작)되면 new라는 키워드와 함께 쓰인 생성자 함수라고 생각하면 된다. 
function User(first, last) {
    this.firstName = first;
    this.lastName = last;
}

// prototype 속성에 getFullName을 할당해주면 어떤 객체가 들어가던지 함수는 여러개가 아닌 1번만 만들어지게 된다. 
// mark.getFullName() 과 neo.getFullName은 getFullName()을 참조하게 된다. 
User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// 인스턴스란? new라는 키워드를 통해서 실행한 생성자 함수의 결과를 반환해서 할당된 변수 예) mark, neo변수들은 인스턴스가 된다.
const mark = new User('mark', 'park')
const neo = new User('neo', 'smith')

console.log(mark) // user { firstName: 'mark', lastName: 'park' } user 객체 데이터가 출력됨 
console.log(neo) 
console.log(mark.getFullName()) // mark park
console.log(mark.getFullName()) // neo smith


// 리터럴 방식? 특정한 기호를 사용해서 데이터를 만들어 내는 것
// 예) 중괄호를 사용하는 객체 데이터, 배열 데이터 등등 


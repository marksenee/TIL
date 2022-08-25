// 전개 연산자(spread)

// 배열에서의 전개 연산자 
// 쉼표로 구분된 각각의 아이템들이 전개되어 출력된다. 
const fruits = ['Apple', 'Banana', 'Orange']
console.log(fruits);
console.log(...fruits) // 'Apple', 'Banana', 'Orange' 문자데이터로 출력된다. 

function toObject(a, b, c) {
    return {
        a: a,
        b: b,
        c: c
    }
}
console.log(toObject(fruits)) // { a: [ 'Apple', 'Banana', 'Orange' ], b: undefined, c: undefined }
console.log(toObject(...fruits)); // { a: 'Apple', b: 'Banana', c: 'Orange' }

// 전개 연산자를 사용하지 않을 경우 -> 수동으로 처리해야 함 -> 비효율적 -> 전개 연산자를 사용하는 이유
console.log(toObject(fruits[0], fruits[1], fruits[2]))


// 나머지 매개변수 구문(rest parameter)
// ...c라는 매개변수는 'Orange'와 'Kiwi'를 배열형태로 받게된다. 
const fruits2 = ['Apple', 'Banana', 'Orange', 'Kiwi']

function toObject2(a, b, ...c) {
    return {
        a: a,
        b: b,
        c: c
    }
}
console.log(toObject2(...fruits2)) // { a: 'Apple', b: 'Banana', c: [ 'Orange', 'kiwi' ] }

// 축약형 : 속성의 이름과 변수의 이름이 같으면 하나만 남겨둘 수 있다. 
function toObject3(a,b, ...c) {
    return { a, b, c };
}
console.log(toObject3(...fruits2)) // { a: 'Apple', b: 'Banana', c: [ 'Orange', 'Kiwi' ] }

// 축약형 : 화살표 함수 ver
// 객체 데이터를 화살표 함수에서 축약형으로 반환하고 싶을 경우에는 소괄호를 열고, 소괄호 안에서 객체 데이터를 정의 ({ a, b, c })
const toObject4 = (a, b, ...c) => ({ a, b, c })
console.log(toObject4(...fruits2)) // { a: 'Apple', b: 'Banana', c: [ 'Orange', 'Kiwi' ] }

// 객체에서의 전개 구문
const person = {
    id: 1,
    name: "tomas",
    age: 10
}
const newPerson = { ...person };
console.log(person); // { id: 1, name: 'tomas', age: 10 }
console.log(newPerson); // { id: 1, name: 'tomas', age: 10 }
console.log(person === newPerson) // false

// 기존 객체 이용해서 값 변경한 새로운 객체 생성
const newPerson2 = {...person, name: "tom" };
console.log(newPerson2) // { id: 1, name: 'tom', age: 10 }

// 기존 객체를 이용해서 새로운 key-value를 추가한 새로운 객체 생성 
const newPerson3 = {...person, location: "Korea" }
console.log(newPerson3) // { id: 1, name: 'tomas', age: 10, location: 'Korea' }


// 객체 데이터 나머지 매개변수 
const user = {
    id: 1,
    name: "tommy",
    age: 10
}

const { name, ...rest } = user;
console.log(rest) // { id: 1, age: 10 } 구조분해 할당을 한 정보(name)를 제외한 나머지 값을 보여준다.


// 1. 구조 분해 할당(Destructuring assignment) == 비구조화 할당 
const user = {
    name: "mark",
    age: 10,
    email: "abcd@abcd.com"
}

// 객체 데이터를 구조 분해해서 각각의 변수로 만들어서 활용할 수 있다. 
// 정의되어 있지 않은 속성은 undefined
// 필요한 요소만 꺼내서 사용할 수 있다. 즉, name과 age만 필요하다면 const { name, age } = user로 값을 추출할 수 있다.
// address에 기본값 지정(undefined라면 기본값을 지정해줄 수 있다.)
// name이라는 변수를 mark로 변경시켜주고 싶다면 name: mark로 정의해주면 된다. 
const { name, age, email, address = 'Korea' } = user
// E.g user.name나 user['name'] 과 동일하다. 

console.log(name);
console.log(age);
console.log(email);
console.log(address); // undefined가 출력, address라는 변수는 user객체에 없기 때문이다.

console.log(user.name);
console.log(user['name'])


// 2. 배열데이터의 구조분해 할당
// key-value 형태가 아닌 배열은 순서대로 꺼내오면 된다. 
// 이름으로 구조분해 하는 것이 아닌 순서대로 구조분해 시켜준다. 
const fruits = ['Apple', 'Banana', 'Orange']
const [a, b, c, d] = fruits
console.log(a,b,c,d) // d는 존재하지 않는 값이기 때문에 undefined로 출력된다. 

// banana만 추출하고 싶을 경우
// const [, b] = fruits로 (,) 쉼표를 남겨줘야 한다 -> 배열에서는 순서가 중요하기 때문! 

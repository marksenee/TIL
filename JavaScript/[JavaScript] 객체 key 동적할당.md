# [TIL] 객체 생성 시 key 값 동적 할당
> ES6 이전에는 객체를 생성할 때 키를 동적으로 설정할 수 없었다. 즉, 객체를 생성하고 나서 키를 설정해야 했다.
> 
<br /><br />

## 객체 생성 시 key 값 동적 할당하는 방법

```jsx
const field = 'name';
const value = 'tom'
const user = {
    field : value
}

console.log(user) // { field: 'tom' }
```

해당 코드에서 콘솔 로그를 확인해 보면 value 값은 지정해 준 “tom”이 잘 반영된 것을 확인할 수 있지만 field를 ‘name’으로 지정해줬는데도 user객체의 key가 field로 되어 있는 것을 확인할 수 있다. value는 함수, string, 변수도 사용할 수 있지만 key는 이런 처리가 허용되지 않는다. 
<br /><br />

## ES6 이전 객체 키를 설정하는 방법

### 1. 점 접근자

아래 방법의 문제점은 객체 키를 동적으로 설정할 수 없다는 것이다. 

- `objectName.propertKey = value;`
- user라는 객체를 생성한다.
- name이라는 새로운 키를 생성하고 점 접근자를 통해 [user.name](http://user.name)으로 name이라는 key를 생성해준다.
- value 값으로 “tommy” 라는 값을 부여한다.

```jsx
// user라는 객체 생성 
const user = {};
user.name = "tommy";

console.log(user) // { name: 'tommy' }
```

### 2. 대괄호 접근자

- `objectName['propertyName'] = propertyValue;`

```jsx
const user = {};
const key = 'name'
user[key] = 'tom';

console.log(user); // { name: 'tom' }
```
<br /><br />

## ES6 이후 동적으로 키 설정하기

- `[ ]` 방식으로 프로퍼티를 설정하면 키 값을 동적으로 설정할 수 있다.

```jsx
const key = 'name';
const value = 'tommy';
const user = {
   [key]: value
};
console.log(user); // { name: 'tommy' }
```

- 예시 (todo 리스트를 구현하는 중에 해당 코드에서 이해가 안갔었다.)
    - 여러 개의 input에 값을 입력하고 변경시켜줘야 하는 경우 input 태그에서 설정한 name을 가져오고 inputs 객체에서 name이라는 key를 변경해줘야 하므로 대괄호 방식을 사용하여 동적으로 키를 변경시켜준다. 즉, 키를 동적으로 변경시켜주고 싶을 경우 `[ ]` 대괄호를 사용하면 된다.

```jsx
setInputs({
  ...inputs,
  [name]: value
});
```
<br /><br />

### 참고 자료

- [https://www.c-sharpcorner.com/blogs/how-to-set-dynamic-javascript-object-property-keys-with-es6](https://www.c-sharpcorner.com/blogs/how-to-set-dynamic-javascript-object-property-keys-with-es6)
- [https://sassun.tistory.com/148](https://sassun.tistory.com/148)
- [https://blog.outsider.ne.kr/675](https://blog.outsider.ne.kr/675)
- [https://medium.com/@bretdoucette/understanding-this-setstate-name-value-a5ef7b4ea2b4](https://medium.com/@bretdoucette/understanding-this-setstate-name-value-a5ef7b4ea2b4)
- [https://xiubindev.tistory.com/97](https://xiubindev.tistory.com/97)
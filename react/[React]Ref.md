## Ref

> DOM 요소에 접근하기 위해 ref를 주로 사용한다. render 메서드에서 생성된 DOM노드나 React 엘리먼트에 접근하는 방법을 제공한다. 
예를 들어, input 박스에서 텍스트를 가져오고 싶을 경우, 리액트 요소에서 가져오면 된다.
> 
<br /><br />

## domcument.getElementsByClassName 등을 쓰는 게 아니라 ref를 쓰는 이유

리액트는 실제 dom이 아니라 가상 dom을 사용해서 document.getElementsByClassName처럼 접근하면 안된다. 즉 r`ef를 사용하는 이유는 가상 DOM에 접근하기 위함`이다. 
<br /><br />

## Ref를 사용해야 하는 경우?

- 자식을 직접적으로 수정해야 하는 경우 (React 컴포넌트의 인스턴스 이거나 DOM 엘리먼트 일 때)

일반적으로 React에서 props는 부모 컴포넌트가 자식과 상호작용할 수 있는 유일한 수단이다.

자식을 수정하려면 새로운 props를 전달하여 자식을 다시 렌더링해야한다. 그런데 일반적인 데이터 플로우에서 벗어나서 자식을 직접적으로 수정해야 하는 경우도 있다. 이럴 경우 수정할 자식은 React 컴포넌트의 인스턴스일 수도 있고, DOM 엘리먼트 일 수도 있다. 이 경우의 해결책이 Ref이다. 
<br /><br />

## React 요소를 가져오는 방법1.

- Ref 선언 방식1 `React.createRef()`
- Ref 생성하기

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // ref 생성
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

- Ref 접근하기
    - render 메서드 안에서 ref가 엘리먼트로 전달되었을 때, 그 노드에 대한 참조는 ref의 current 어트리뷰트에 담기게 된다.
    - ref 어트리뷰트가 클래스 컴포넌트에 쓰였다면, ref 객체는 마운트된 컴포넌트의 인스턴스를 current 프로퍼티의 값으로 받는다.
    - 함수 컴포넌트는 인스턴스가 없기 때문에 ref 어트리뷰트를 사용할 수 없다.

```jsx
const node = this.myRef.current;
```

- input 태그에서 값 가져오기

```jsx
<input type="text" ref={this.text} />
```

<aside>
👉 컴포넌트가 마운트 될 때 리액트는 current 프로퍼티에 DOM 엘리먼트를 대입하고, 컴포넌트의 마운트가 해제되면 current 프로퍼티를 다시 null로 돌려 놓는다. ref를 수정하는 작업은 componentDidMount 또는 componentDidUpdate 생명주기 메서드가 호출되기 전에 이루어진다.

</aside>
<br /><br />

## React 요소를 가져오는 방법2.

<aside>
👉 useRef()
 useRef()는 리액트 훅 중 하나이다.

</aside>

```jsx
function CustomTextInput(props) {
  // textInput은 ref 어트리뷰트를 통해 전달되기 위해서
  // 이곳에서 정의되어야만 합니다.
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={textInput} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
}
```

```jsx
const BucketList = ({ list }) => {
  const my_lists = list;
  const my_wrap = React.useRef(null);

  console.log(my_wrap); 

  window.setTimeout(() => { // 1초 뒤에는?!
    console.log(my_wrap);
  }, 1000);
  return (
    <div ref={my_wrap}>
      {my_lists.map((list, index) => {
        return <ItemStyle key={index}>{list}</ItemStyle>;
      })}
    </div>
  );
};
```

- console.log(my_wrap)을 확인해보면 null이 출력된다.
- 그리고 setTimeout을 걸어서 1초 뒤에 확인해보면return해준 리액트 요소들을 가상돔에서 진짜 돔으로 다 보내서 div가 잘 출력되는 것을 확인할 수 있다.
<br /><br />

### 참고 자료

- [https://velog.io/@mrobo3/domcument.getElementsByClassName-등을-쓰는-게-아니라-ref를-쓰는-이유](https://velog.io/@mrobo3/domcument.getElementsByClassName-%EB%93%B1%EC%9D%84-%EC%93%B0%EB%8A%94-%EA%B2%8C-%EC%95%84%EB%8B%88%EB%9D%BC-ref%EB%A5%BC-%EC%93%B0%EB%8A%94-%EC%9D%B4%EC%9C%A0)
- [https://ko.reactjs.org/docs/refs-and-the-dom.html](https://ko.reactjs.org/docs/refs-and-the-dom.html)
- 스파르타 코딩클럽 리액트 기초반 강의
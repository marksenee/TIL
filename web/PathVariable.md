# [TIL] Path Variable이란?

<br>

## Path Variable이란?

- query string과 같이 데이터를 넘기는 방법 중 하나이다.
- 경로를 변수로서 사용한다.
- 예를 들어, 게시물이 존재하고 각각의 게시물을 보기 위해서 id를 서버에 넘겨줘야 한다. 이를 path variable로 나타내면 아래처럼 나타낼 수 있다.

```jsx
/post/6
```

<br>

## Query String vs Path Variable

- resource를 식별하고 싶을 경우 Path Variable을 사용
  - 어떤 resource를 식별해야 하는 상황에서 서버는 어느 방식으로 넘어오던지 받은 resource의 id로 쿼리를 날리게 된다.
  - 만약 존재하지 않는 resource의 id가 들어올 경우, path variable은 경로에 존재하는 페이지가 없으므로 404에러를 발생하지만 query string은 서버로 데이터가 넘어가고 쿼리를 날리며 해당하는 데이터가 없을 경우 따로 에러 핸들링을 해줘야 한다.
- 정렬이나 필터링을 해야하는 경우 Query String을 사용하는 것이 적합하다.

```jsx
/users  # 사용자 목록을 가져온다.
/users?occupation=programer  # 프로그래머인 사용자 목록을 가져온다.
/users/1  # 아이디가 1인 사용자를 가져온다.
```

- Path Variable은 특정 인덱스에 대한 조회
  - 아이디가 10번인 유저 조회 : /user/:userId
- Query String은 특정 값으로 필터링
  - 이름이 tommy이고 10세인 유저 조회 : /user?userName=tommy&age=10

<br>

## 참고 자료

- [https://ssungkang.tistory.com/entry/Web-Path-Variable-VS-Query-Parameter](https://ssungkang.tistory.com/entry/Web-Path-Variable-VS-Query-Parameter)
- [https://velog.io/@knuckles6974/TIL-Path-Variable-와-Query-Parameter](https://velog.io/@knuckles6974/TIL-Path-Variable-%EC%99%80-Query-Parameter)
- [https://ryan-han.com/post/translated/pathvariable_queryparam/](https://ryan-han.com/post/translated/pathvariable_queryparam/)
- [https://yusang.tistory.com/70](https://yusang.tistory.com/70)

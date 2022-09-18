# [TIL] Mock API

## Mock API란?

mocking api는 실제로 REST API가 구축되어 있지 않더라도, 있는 것처럼 테스트 환경을 만들어주는 것이다. 실제로 저장되는 것이 아니라 흉내만 되기 때문에 프로덕션 레벨에서는 사용할 수 없다.

만약 API가 준비가 덜 된 상태에서 개발을 진행하거나, 공부할 때 사용하기에 좋다.

<br>

## 실습해보기

### 1. 폴더 생성

- 실습할 폴더 생성을 위해 폴더를 생성하고자 하는 경로에 다음과 같이 입력해준다.

```
mkdir my_mock_api
```

### 2. 프로젝트 초기화

```
cd my_mock_api
```

```
yarn init -y
```

### 3. json-server 설치

- json-server는 json 파일으로 REST API mock server구축을 해주는 패키지이다.

```
yarn add json-server
```

### 4. json-server로 일주일 수면 시간을 알려주는 API 만들기

- `db.json` 파일 생성
  - 프로젝트 경로에 `db.json` 파일을 생성한다.
  - `db.json` 파일에 다음과 같이 `json` 데이터를 복붙한다.
  ```json
  {
    "sleep_times": [
      {
        "id": 0,
        "day": "월",
        "sleep_time": "10:00"
      },
      {
        "id": 1,
        "day": "화",
        "sleep_time": "10:00"
      },
      {
        "id": 2,
        "day": "수",
        "sleep_time": "10:00"
      }
    ]
  }
  ```

### 5. json-server 실행

- DB만들었기 때문에 json-server가 db를 보고 있도록 해야한다.
- `—watch`로 db.json을 보도록 해줄 수 있고, 실행할 포트는 `—port`를 사용해서 지정할 수 있다.
  - port를 지정하지 않을 경우 기본값은 3000포트이다.

```jsx
yarn json-server --watch db.json --port 5001
```

### 6. json-server 실행 커멘드 추가

- 매번 실행 명령어를 입력하기 귀찮기 때문에 실행 명령어를 추가해보자

```jsx
// package.json
...
"scripts": {
		...
    "server-start": "json-server --watch db.json --port 5001"
},
...
```

### 7. API 테스트

- post man으로 api 테스트를 해보자
  - 포스트맨이 설치되어 있어야 한다.
- GET 요청 보내기
  - 메서드에 GET을 넣는다.
  - 실행된 주소를 넣어주면 된다.
- POST 요청 보내기
  - 메서드에 POST를 선택해준다.
  - 주소를 넣어준다.
  - Body 항목을 선택하고, Body 항목에서 raw로 체크한다음 JSON 형식으로 선택해준다.
  - 그 다음 추가할 데이터를 넣어준다.
  - 하나의 객체 형태로 아래 사진처럼 값을 넣어주면 응답이 잘 오는 것을 확인할 수 있다.

<br>

### 참고 자료

- 스파르타 코딩클럽 [리액트 심화반] 강의

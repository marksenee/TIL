# [TIL] URI, URL, URN

## URI란?

`Uniform Resource Identifier`이며 이를 해석하면 자원의 식별자라는 뜻을 가지고 있다.

`URI`는 `URL`과 `URN`의 상위 개념이며 이를 포함하고 있다.

웹 서버의 리소스 또한 각자의 이름을 가지고 있다. (클라이어느가 요청을 하면 찾아야 하기 때문에 Id같은 고유한 식별값이 필요하다.) 이 때 서버 리소스 이름을 `Uniform Resource Identifier` 즉 URI라고 부른다.

### URI예시

- `http://www.class.com/student?name=mark`
- `http://www.class.com/student/1`

<br>

## 리소스란?

웹 서버는 웹 리소스를 관리하고 제공한다. 어떤 종류의 콘텐츠도 리소스가 될 수 있다.

리소스는 텍스트파일, html파일, 워드, JPEG 이미지 파일 등의 정적 파일이 될 수도 있고, 인터넷 검색 엔진 등 요청에 따라 콘텐츠를 생산하는 프로그램도 모두 리소스가 될 수 있다.

<br>

## URL(Uniform Resource Locator)

- URI의 하위 개념 중 **URL은 자원의 위치**라는 뜻을 가지고 있다. 인터넷 상에서 어떤 자원을 식별할 때 **자원의 위치를 활용하여 특정 자원을 식별**하겠다는 것이다. (오늘날 대부분의 uri는 url이다.)

### URL 표준 포맷

- 대부분의 url 스킴의 문법은 9가지로 구분된다.
  - 이 중 url에서 가장 중요한 컴포넌트는 스킴, 호스트, 경로이다.
  - `<스킴>://<사용자 지름>:<비밀번호>@<호스트>:<포트>/<경로>;<파라미터>?<질의>#<프레그먼트>`
  - 예시) `http://www.class.com/student?name=mark`
  - `http://` : 스킴(scheme)이다. 리소스에 접근하기 위해 사용되는 프로토콜이다.
    - 웹 클라이언트가 리소스에 어떻게 접근하는지 알려준다. (보통 HTTP)
    - 대표적인 스킴 종류 : ftp(file transfer protocol), rtsp(real time streaming protocol, 비디오 서버), smtp(메일) 등
  - `www.class.com` : 서버의 인터넷 주소이다. (리소스가 어디에 호스팅되었는지)
  - `/student` : 웹서버의 리소스(리소스 경로)
  ```
  💡 그럼 name=mark 는 url에 해당이 안되는 것인가?
   student 다음 쿼리문은 name 값에 따라 자원의 결과가 다르게 도출될 수 있기 때문에
   자원의 위치 역할을 한다기보다는 url와 같이 자원의 식별자 역할을 하므로 name 이전까지가 URL이다.
  ```

### URL 정리

- URI의 경우 문자열 주소 전체에 해당하지만 **URL은 파라미터 이전 경로**까지만 포함된다!!

<br>

## URN(Uniform Resource Name)

- urn은 uri의 두번째 종류이며 자원의 이름이라는 뜻을 가지고 있다.
- 인터넷 상에서 어떤 자원을 식별할 때 자원의 이름을 활용하여 특정 자원을 식별하겠다는 뜻이다.
- 여기서 자원의 이름은 특정 자원을 얻을 수 있는 위치 정보를 포함하지 않고, 자원의 위치에 상관없이 고유한 이름만으로 특정 자원을 식별하려는 목적이다.
- urn에는 리소스 접근방법과 웹 상의 위치가 표기되지 않는다.
- 실제 자원을 찾기 위해서는 urn을 url로 변환하여 사용한다.
- http와 같은 프로토콜을 제외하고 리소스의 name을 가리키는데 사용된다.

<br>

### 참고 자료

- [https://velog.io/@syoung125/개념공부-URI는-무엇이고-URL은-무엇일까](https://velog.io/@syoung125/%EA%B0%9C%EB%85%90%EA%B3%B5%EB%B6%80-URI%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B4%EA%B3%A0-URL%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)
- [https://juyeop.tistory.com/48](https://juyeop.tistory.com/48)
- [https://incomeplus.tistory.com/252](https://incomeplus.tistory.com/252)
- [https://jeongkyun-it.tistory.com/157](https://jeongkyun-it.tistory.com/157)
- [https://jeongkyun-it.tistory.com/157](https://jeongkyun-it.tistory.com/157)
- [https://hanamon.kr/네트워크-기본-url-uri-urn-차이점/](https://hanamon.kr/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EA%B8%B0%EB%B3%B8-url-uri-urn-%EC%B0%A8%EC%9D%B4%EC%A0%90/)

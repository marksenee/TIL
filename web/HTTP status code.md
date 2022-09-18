# HTTP status code

HTTP status code 상태 코드는 HTTP 요청이 성공했는지, 실패했는지를 서버에서 알려주는 코드이다.

<br>

## status code

- 10x : 정보 확인
- 20x : 통신 성공
- 30x : 리다이렉트
- 40x : 클라이언트 오류
- 50x : 서버 오류

<br>

## 200번대 : 통신 성공

- 클라이언트가 요청한 작업을 서버가 성공적으로 수행했다는 상태라는 것을 알려주는 코드

| 상태 코드 | 이름        | 의미                       |
| --------- | ----------- | -------------------------- |
| 200       | OK          | 요청 성공(GET)             |
| 201       | Create      | 생성 성공(POST)            |
| 202       | Accepted    | 요청 접수 O, 리소스 처리 X |
| 204       | No Contents | 요청 성공 O, 내용 없음     |

<br>

## 300번대 : 리다이렉트

- 이 요청을 완료하기 위해서는 리다이렉션이 이루어져야 한다는 의미이다.

| 상태 코드 | 이름             | 의미                          |
| --------- | ---------------- | ----------------------------- |
| 300       | Multiple Choice  | 요청 URI에 여러 리소스가 존재 |
| 301       | Move Permanently | 요청 URI가 새 위치로 옮겨감   |
| 304       | Not Modified     | 요청 URI의 내용이 변경X       |

<br>

## 400번대 : 클라이언트 오류

- 이 요청은 올바르지 않다는 의미이다.

| 상태 코드 | 이름               | 의미                              |
| --------- | ------------------ | --------------------------------- |
| 400       | Bad Request        | API에서 정의되지 않은 요청 들어옴 |
| 401       | Unauthorized       | 인증 오류                         |
| 403       | Forbidden          | 권한 밖의 접근 시도               |
| 404       | Not Found          | 요청 URI에 대한 리소스 존재X      |
| 405       | Method Not Allowed | API에서 정의되지 않은 메소드 호출 |
| 406       | Not Acceptable     | 처리 불가                         |
| 408       | Request Timeout    | 요청 대기 시간 초과               |
| 409       | Conflict           | 모순                              |
| 429       | Too Many Request   | 요청 횟수 상한 초과               |

<br>

## 500번대 : 서버 오류

- 서버가 응답할 수 없다는 의미이며, 요청이 올바른지 여부는 알 수 없다.

| 상태 코드 | 이름                  | 의미                 |
| --------- | --------------------- | -------------------- |
| 500       | Internal Server Error | 서버 내부 오류       |
| 502       | Bad Gateway           | 게이트웨이 오류      |
| 503       | Service Unavailable   | 서비스 이용 불가     |
| 504       | Gateway Timeout       | 게이트웨이 시간 초과 |

<br>

### 참고 자료

- [https://sanghaklee.tistory.com/61](https://sanghaklee.tistory.com/61)
- [https://namu.wiki/w/HTTP/응답 코드](https://namu.wiki/w/HTTP/%EC%9D%91%EB%8B%B5%20%EC%BD%94%EB%93%9C)
- [https://gyoogle.dev/blog/web-knowledge/HTTP status code.html](https://gyoogle.dev/blog/web-knowledge/HTTP%20status%20code.html)

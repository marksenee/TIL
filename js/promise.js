/*
1. 프라미스 객체 생성
2. 인자로는 (resolve, reject) => {} 를 (excutor 실행자 혹은 실행 함수라고 부른다.) 를 받는다.
3. 이 실행자는 비동기 작업이 끝나면 바로 2가지 콜백 중 하나를 실행한다.
4. - resolve : 작업이 성공한 경우 호출할 콜백
   - reject : 작업이 실패한 경우 호출할 콜백 

5. 프라미스 상태값
- pending :비동기 처리 수행 전(resolve, reject가 아직 호출되지 않음)
- fulfilled : 수행 성공(resolv가 호출된 상태)
- rejected : 수행 실패(reject가 호출된 상태)
- settled: 성공 or 실패(resolve, reject가 호출된 상태)
*/

/* 에제1 */
const promise = new Promise((resolve, reject) => {
  let status = 1;
  if (status == 1) {
    resolve("성공");
  } else {
    reject("실패");
  }
});

console.log(promise); // Promise { '성공' }

/* 에제2 */
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("완료"), 1000);
});

// resolve
promise2.then(
  (result) => {
    // 첫 번째 인자는 성공 시 실행
    console.log(result); // 성공시 -> 완료
  },
  (error) => {
    // 두 번째 인자는 실패 시 실행
    console.log(error); // 실패시 -> 실행되지 않음
  }
);

/* 에제3 */
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("오류")), 1000);
});

promise3.then(
  (result) => {
    console.log(result); // 실행되지 않음
  },
  (error) => {
    console.log(error); // Error: 오류
  }
);

/* 에제4 에러 처리 */
let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("오류")), 1000);
});

promise4.catch((error) => {
  console.log(error); // Error: 오류
});

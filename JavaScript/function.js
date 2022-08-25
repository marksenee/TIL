/* 지역 변수 */
// 함수 내에서 선언한 지역 변수는 함수 안에서만 접근할 수 있다.
function showMessage() {
  let message = "안녕? 나는 mark야";
  console.log(message);
}
showMessage();

/* 외부 변수 */
// 함수 내부에서 함수 외부의 변수인 외부 변수에 접근 및 수정할 수 있다.
let userName = "mark";

function showMessage2() {
  userName = "holland";
  console.log("hello! " + userName);
}

showMessage2();

/* 매개 변수 */
function showMessage3(from, text) {
  console.log(from + " " + text);
}
showMessage3("mark", "hello!");

function showMessage4(from, text) {
  from = "*" + from + "*";
  console.log(from + " " + text);
}
let from = "mark";
showMessage4(from, "hello"); // *mark* hello
console.log(from); // mark

/* 기본 값1. */
// 값을 전달하지 않으면 undefined가 출력된다. 따라서 기본 값을 준다.
function showMessage5(from, text = "hello!") {
  console.log(from + " " + text); // mark hello!
}
showMessage5("mark");

/* 기본 값2. */
// 선언부에서 매개변수 기본 값을 설정하는 것이 아닌 함수 실행 되중 기본값을 설정하는 경우
function showMessage6(from, text) {
  if (text == undefined) {
    text = "give text";
  }
  console.log(from + " " + text);
}
showMessage6("mark");
// if 문을 쓰지 않는 경우 : 매개변수가 생략 or 빈 문자열이 넘어오면 변수에 빈 문자열이 할당
function showMessage7(from, text) {
  text = text || "빈 문자열";
  console.log(from + " " + text);
}
showMessage7("mark");

/* 반환 값 
- 함수를 호출했을 때 함수를 호출한 곳에서 특정 값을 반환하게 할 수 있다. (return value)
- return은 함수 내 어디서든 사용할 수 있다.
- return을 만나면 함수 실행은 즉시 중단되고 함수를 호출한 곳에 값을 반환
*/

function sum(a, b) {
  return a + b;
}
let result = sum(3, 7);
console.log(result); //10

// 함수 여러개의 return문이 올 수도 있다.
function checkAge(age) {
  if (age >= 20) {
    return true;
  } else {
    return false;
  }
}
console.log(checkAge(21));

// return만 명시 : 함수가 즉시 종료됨
function showMovie(age) {
  if (!checkAge(age)) {
    return; //age가 false이면 함수 실행이 종료된다.
  }
  console.log("영화 상영");
}
showMovie(21);

// return 문이 없거나 return 지시자만 있는 함수는 undefined를 호출한다.
function doNoting() {}
console.log(doNoting()); // undefined

function doNoting2() {
  return;
}
console.log(doNoting2());

// return 지시자가 있는 줄에서 작성해야지 인식함
function returnTest(nickName) {
  return "My Name Is" + " " + nickName;
}
console.log(returnTest("mark"));

let a = 3 + 7;

/* 예제1. break문이 있음 */
switch (a) {
  case 9:
    console.log("비교 값보다 작음");
    break;
  case 10:
    console.log("비교 값과 일치함");
    break;
  case 11:
    console.log("비교 값보다 큼");
    break;
  default:
    console.log("어떤 값을 제대로 입력해주세요");
}

/* 예제2. break문이 없음 -> 이어지는 모든 case문을 실행함 */
switch (a) {
  case 9:
    console.log("비교 값보다 작음");
  case 10:
    console.log("비교 값과 일치함");
  case 11:
    console.log("비교 값보다 큼");
  default:
    console.log("어떤 값을 제대로 입력해주세요");
}

/* 예제3. 인수에 어떤 표현식이든 올 수 있음 */
let b = "1";
let c = 0;

switch (
  +b // +b를 하면 String -> Number로 형변환
) {
  case c + 1:
    console.log("표현식 +b는 1, 표현식 c+1은 1이므로 코드 실행됨");
    break;
  default:
    console.log("코드 실행 안됨");
}

/* 예제4. 실행하려는 코드가 같은 case묶기 */

let d = 3;

switch (d) {
  case 4:
    console.log("계산이 맞습니다!");
    break;

  case 3: // (*) 두 case문을 묶음
  case 5:
    console.log("계산이 틀립니다!");
    console.log("수학 수업을 다시 들어보는걸 권유 드립니다.");
    break;

  default:
    console.log("계산 결과가 이상하네요.");
}

[Git] issue란?
===============

👩🏻‍💻 해당 글은 스파르타 코딩클럽  '****핵심 쏙쏙 Git****' 강의 및 내용 정리사항을 바탕으로 개인 공부차원에서 정리 및 작성한 글입니다. 

✏️ 수강 중인 교육과정 [https://spartacodingclub.kr/online/drill_git](https://spartacodingclub.kr/online/drill_git)
<br/><br/>

## 1. Issue란?

### 1) Issue 정의

- 누가 이 작업을 할 것인지 정하는 것

### 2) Issue 예시

- 버그를 신고
- 기능 추가 등의 프로젝트 개선 제안
- 위 문제들을 해결하기 위한 작업 단위

### 3) Issue 생성

- Assigness(담당자) : 이 이슈를 작업하거나 연관된 사람 적기
- Labels : 이 issue가 어떤 것인지 분류
    - 기본 라벨을 사용할 수 있음
    - 내가 직접 만들 수 있음
    - `enhancement(추가 기능 개선), good first issue(처음 프로젝트에 참여하는 사람이 작업하기 쉬운 이슈)`
- github에서 내 repo에 들어감
- 내 프로젝트에 `issue→New issue`
- 내용을 적고 `Submit new issue`

### 4) Issue의 장점

- Issue를 잘 적어두면 스스로 어떤 작업을 해야할지 쉽게 파악할 수 있음
<br/><br/>

## 2. Issue 완료

- 더 이상 남겨둘 이슈가 없거나 작업이 완료 한 경우
- Issue 페이지 하단에 `close Issue` 누르면 이슈 종료

<aside>
👉 이슈가 왜 종료되었는지 이유를 적어주면 나중에 프로젝트 관리할 때 편하답니다!

</aside>
<br/><br/>

## 3. Issue 다시 열기

### 1) Issue 다시 열기

- `Reopen` or `Reopen and comment` 버튼 누르기

### 2) Issue와 관련된 commit 만들기

- commit 메세지를 작성 시, 이슈가 무엇인지 번호로 알려 줄 수 있음

### 3) commit 메세지 작성 시 이슈 번호 작성

`git commit -m “이슈 작성 test #2"` 

### 4) repo issue 에서 확인
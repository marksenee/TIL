# [TIL] 질문 & 답변 사항 정리

### Q1. Delete Todo시, 데이터가 아예 삭제되는 것인지?

delete todo를 할 때 삭제시킬 id값을 인자로 받아오고, filter 메서드로 todo.id값과 전달받은 id값이 다른 데이터들만 새로운(filter) 배열로 나타나게 구현했음
이럴 경우 이전 데이터들도 메모리 주소 값도 아예 사라지게 되는 것인지? 즉 필터링한 데이터들만 뽑아서 업데이트 시켜서 보여주고 데이터는 남아있는 것인지?

### A. 어떻게 구현했는 달라질 수 있음

나처럼 구현한 경우라면, 이전 데이터는 메모리에 남아있는 상태일 것.

<br>

### Q2. id값에 length로 구현하면 안되는 이유?

- 배열의 length를 key로 사용하면 안되는 이유?
- id++이런 식으로도 구현하면 안되는 것인지?

### A. 어떻게 구현했는 달라질 수 있음

- id++로 사용하거나 length로 사용하게 되면 중간에 데이터가 삭제되거나 추가되는 경우 배열에서 index값이 겹칠 수 있기 때문에 uuid나 shortid 등 고유 키를 줄 수 있는 것을 사용하는 걸 권장함
- 다른 답변) 데이터에 고유 값이 없을 경우 global 변수를 이용해서 id를 생성하고 이를 key로 사용할 수 있음 id++ 이런식으로, 다만 production 모드에서는 권장하지 않음
- 다른 답변) Id 값을 서버로 부터 받아오는 것이 좋긴함
- 출처 : https://medium.com/sjk5766/react-%EB%B0%B0%EC%97%B4%EC%9D%98-index%EB%A5%BC-key%EB%A1%9C-%EC%93%B0%EB%A9%B4-%EC%95%88%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3ce48b3a18fb

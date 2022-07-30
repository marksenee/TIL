## 1. branch 생성 후 commit 
- branch 생성 후 처음 commit 할 경우 
- git init : 프로젝트에 git 시작
- git add. : 전체 파일 add 
- git add [파일이름] : 해당 파일만 git에 add하고 싶을 경우
- git remote origin [레포지토리 주소] : git 저장소 연결 

```
git init
git add *
git commit -m '커밋 메세지'
git branch -M main
git remote add origin git "레퍼지토리 주소"
git push -u origin main
```
<br/><br/>
## 2. 코드 수정 후 commit 할 경우
```
git add . 
git commit -m "커밋 메시지"
git push
```
<br/><br/>

## 3. .git 파일 삭제 
```
rm -rf .git
```





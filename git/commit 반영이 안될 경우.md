[GitHub] commit 반영안되는 경우/ contribution 표기 안될 경우
=============
```
문제상황
- commit을 했음에도 불구하고 github에 잔디가 심어지지 않았음
- 커밋이 반영안되고 있었음 
- 아래대로 수행하면 잔디가 심어짐!
```

## 1. Contribution 그래프가 채워지기 위한 조건 
- GitHub 계정의 이메일 주소와 commit시 사용한 이메일 주소가 같아야 한다.
- commit은 독립적은 repository에서 이루어져야 한다.
- 커밋은 다음으로 만들어져야 합니다.
    - repository의 default branch (보통은 master)
    - `gh-pages` [branch](https://help.github.com/en/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites) (github page branch)

<br/><br/>

## 2. Commit시 사용한 이메일 주소 확인 
- 터미널에 해당 명령어 입력하여 확인
```
git config --list
git config user.email
```
<br/><br/>

## 3. Github 계정 이메일 주소 확인
- Github 홈페이지 들어가서 아래 순서대로 계정 확인
- setting -> Access -> Emails -> GitHub 계정 이메일 확인 
<br/><br/>


## 4. 이메일 주소 재설정 
- GitHub 이메일과 commit시 사용한 이메일이 다를 경우 재설정 해준다. 
```
$ git config --global user.email "GitHub 이메일"
```

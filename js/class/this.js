// this
// 일반 함수는 호출 위치에 따라서 this 정의
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의 

const heropy = {
    name: 'heropy',
    normal: function() {
        console.log(this.name) 
    },
    arrow: () => {
        console.log(this.name)
    }
}

// normal과 arrow 메소드 실행
heropy.normal() // heropy
heropy.arrow() // undefined




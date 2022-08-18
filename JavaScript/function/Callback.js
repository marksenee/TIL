// 콜백(CallBack)
// 함수의 인수로 사용되는 함수 
// 특정한 위치를 보장해주는 방법으로 콜백함수를 활용할 수 있다. 

function timeout(callback) { // callback이라는 매개변수 생성 
    setTimeout(() => {
        console.log('hello!')
        callback() // timeout이라는 함수에 실행을 보장하고 싶은 곳에 함수를 실행시켜 줌 
    }, 3000)
}

timeout(() => {
    console.log('done!')
})



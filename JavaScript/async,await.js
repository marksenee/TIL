async function myFunc() {
  return "프라미스를 반환한다.";
}

myFunc().then((result) => {
  console.log(result);
});

async function myFunc2() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료"), 1000);
  });

  let result = await promise; // (*) 프라미스가 이행될 땨까지 기다림

  console.log(promise);
}

myFunc2();

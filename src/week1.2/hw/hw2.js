//hw2: calculate the time it takes between a setTimeout call and the inner function actually running

function syncFunc() {
  let sum = 0;
  for (let i = 0; i < 100_000_000; i++) {
    sum += i;
  }
  console.log(sum);
}

const start = new Date().getTime();

setTimeout(() => {
  syncFunc();
  const end = new Date().getTime();
  const timeDifference = end - start;
  console.log(`Time difference: ${timeDifference} milliseconds`);
}, 1000);

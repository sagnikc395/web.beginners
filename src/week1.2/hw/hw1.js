//hw1:create a counter in js that counts down from 30 to 0

//stopping a setInterval from this
//https://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript

function Counter(timer) {
  const currentId = setInterval(() => {
    if (timer === 0) {
      clearInterval(currentId);
      console.log(`Time Over!`);
      //stop the interval
    } else {
      console.log(`Current count is ${timer}`);
      timer -= 1;
    }
  }, 1 * 100);
}

Counter(30);

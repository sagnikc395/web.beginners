//hw3: create a terminal clock(hh:mm:ss)

function terminalClock() {
  setInterval(() => {
    const date = new Date();
    console.log(
      `Current Time is : ${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`
    );
  }, 1 * 1000);
}

terminalClock();

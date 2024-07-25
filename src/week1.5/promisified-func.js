function promisifiedOwnSetTimeout(duration) {
  const p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, duration);
  });

  return p;
}

//promise
const ans = promisifiedOwnSetTimeout(1000);
ans.then(() => {
  console.log("timeout is done");
});

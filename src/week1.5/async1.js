function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum(100));
}

let start = new Date().getTime();
//making this sync using busy waiting
//thread isnt doing anything , its just synchronously very busy here
function syncSleep() {
  let a = 1;
  for (let i = 0; i < 1000_000_000; i++) {
    a++;
  }
}

syncSleep();
let end = new Date().getTime();
// setTimeout(findSumTill100, 1 * 1000);
console.log("Sync Func Done");
console.log(`Time Taken in ms : ${end - start}`);

start = new Date().getTime();
//calling our async func
setTimeout(syncSleep, 2 * 1000);
console.log(`Async Func called`);
end = new Date().getTime();

console.log(`Time taken after invoking async func ms: ${end - start}`);

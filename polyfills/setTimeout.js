/// this requestIdleCallback is browser api it wont run in environment (here we have nodejs) to run this we can try on browser

let timerID = 0;
const timers = {};
function mySetTimeout(callback, delay, ...args) {
  let currTimerID = timerID++;

  timers[currTimerID] = {
    callback: callback,
    delay: Date.now() + delay,
    args: [...args],
  };

  if (Object.entries(timers).length === 1) {
    requestIdleCallback(processTimers);
  }

  return currTimerID;
}

function processTimers() {
  Object.keys(timers).forEach(execute);
  function execute(key) {
    if (!timers[key]) return;
    const { callback, args, delay } = timers[key];
    if (Date.now() >= delay) {
      callback(...args);
      delete timers[key];
    } else {
      requestIdleCallback(processTimers);
    }
  }
}
function myClearTimeout(timer) {
  if (timers[timer]) {
    delete timers[timer];
  }
}

const timer = mySetTimeout(fun, 2000, "harshal", 23);
const timer1 = mySetTimeout(fun, 3000, "harshal1", 23);
const timer2 = mySetTimeout(fun, 4000, "harshal2", 23);

function fun(name, age) {
  console.log(name, age);
}

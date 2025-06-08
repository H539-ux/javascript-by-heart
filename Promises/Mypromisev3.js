// chaining promises

class Mypromisev3 {
  constructor(executor) {
    const resolve = (value) => {};
    const reject = (value) => {};

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  
}

const p = new Mypromisev3((resolve, reject) => {
  const val = 1;
  setTimeout(() => {
    if (val < 0) {
      reject("less than 0");
    } else {
      resolve(val);
    }
  }, 1000);
});

p.then((val) => {
  return val + 1;
})
  .then((val2) => {
    return val2 + 1;
  })
  .then((val3) => {
    return val3 + 1;
  })
  .catch((err) => {
    console.log(err);
  });

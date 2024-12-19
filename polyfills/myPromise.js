/**
 *
 */

class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.error = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (val) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = val;
        this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
      }
    };
    const reject = (err) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.error = err;
        this.onRejectedCallbacks.forEach((callback) => callback(this.error));
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onResolve, onReject) {
    onResolve = typeof onResolve === "function" ? onResolve : (value) => value;
    onReject =
      typeof onReject === "function"
        ? onReject
        : (reason) => {
            throw reason;
          };

    return new MyPromise((resolve, reject) => {
      if (this.state === "fulfilled") {
        queueMicrotask(() => {
          try {
            const result = onResolve(this.value);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        });
      }

      if (this.state === "rejected") {
        queueMicrotask(() => {
          try {
            const result = onReject(this.error);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        });
      }

      if (this.state === "pending") {
        this.onFulfilledCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const result = onResolve(this.value);
              resolve(result);
            } catch (err) {
              reject(err);
            }
          });
        });

        this.onRejectedCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const result = onReject(this.error);
              resolve(result);
            } catch (err) {
              reject(err);
            }
          });
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return this.then(
      (value) => {
        onFinally();
        return value;
      },
      (err) => {
        onFinally();
        throw err;
      }
    );
  }

  static resolve(val) {
    return new MyPromise((resolve) => resolve(val));
  }

  static reject(err) {
    return new MyPromise((_, reject) => reject(err));
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("Resolved!"), 1000);
});

// console.log(promise);
promise
  .then((value) => {
    console.log(value);
    // "Resolved!"
    return "Chained Value";
  })
  .catch((error) => {
    console.error(error);
  })
  .then((value) => {
    console.log(value);
    // "Chained Value"
  })
  .finally(() => {
    console.log("Promise settled.");
  });

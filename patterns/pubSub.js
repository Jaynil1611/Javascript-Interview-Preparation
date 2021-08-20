function pubSub() {
  // publisher method
  // subscriber method
  // subscribers object to store array  of subsribers of each event method
  const subscribers = {};

  function publish(eventName, data) {
    // no subscribers
    if (!Array.isArray(subscribers[eventName])) {
      return;
    }

    // call a function for each subscriber of event
    subscribers[eventName].forEach((callback) => callback(data));
  }

  function subscribe(eventName, callback) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }

    subscribers[eventName].push(callback);
    const indexOfSubscriber = subscribers[eventName].length - 1;

    return {
      unsubscribe() {
        return subscribers[eventName].splice(indexOfSubscriber, 1);
      }
    }
  }

  return {
    publish,
    subscribe
  }
}

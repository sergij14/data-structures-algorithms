export class Eventing {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  trigger(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((cb) => cb());
    }
  }

  off(eventName) {
    this.events[eventName] = [];
  }
}


function singleEventEmitter() {
  const handlers = [];

  return {
    on(fn) {
      handlers.push(fn);
    },
    emit(data) {
      handlers.forEach((handler) => handler(data));
    },
  };
}

const mySingleEmitter = singleEventEmitter();

mySingleEmitter.on((data) => console.log(data + ' handler 1'));
mySingleEmitter.on((data) => console.log(data + ' handler 2'));
mySingleEmitter.on((data) => console.log(data + ' handler 3'));

mySingleEmitter.emit('Hi from event to');

// Hi from event to handler 1
// Hi from event to handler 2
// Hi from event to handler 3



function multiEventEmitter() {
  const handlers = {};

  return {
    on(event, fn) {
      handlers[event]
        ? (handlers[event] = [...handlers[event], fn])
        : (handlers[event] = [fn]);
    },
    emit(event, data) {
      handlers[event].forEach((handler) => handler(data));
    },
  };
}

const myMultiEmitter = multiEventEmitter();

myMultiEmitter.on('event1', (data) => console.log(data + ' handler 1'));
myMultiEmitter.on('event1', (data) => console.log(data + ' handler 2'));
myMultiEmitter.on('event2', (data) => console.log(data + ' handler 3'));
myMultiEmitter.on('event2', (data) => console.log(data + ' handler 4'));
myMultiEmitter.on('event2', (data) => console.log(data + ' handler 5'));

myMultiEmitter.emit('event1','Hi from event 1 to');
myMultiEmitter.emit('event2','Hi from event 2 to');

// Hi from event 1 to handler 1
// Hi from event 1 to handler 2
// Hi from event 2 to handler 3
// Hi from event 2 to handler 4
// Hi from event 2 to handler 5



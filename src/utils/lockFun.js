export default function lockFun(callback, booleanState) {
  let lock = Boolean(booleanState);

  function getLock() {
    return lock;
  }

  function setLock(newLockState) {
    lock = newLockState;
  }
  return (...args) => {
    callback({ getLock, setLock }, ...args);
  };
}

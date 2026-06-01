// Blocking Sychronous

function delayBlocking() {
  alert("Fetching user Data");
  return "blocking has compeleted";
}
  console.log("delay block has started");
  console.log(delayBlocking());
  console.log("this message is blocked untill Delay Blocking is completed");


//Non-Blocking Asynchronous

function delayNonblocking(callback) {
  setTimeout(() => {
    callback("Non-Blocking is completed");
  }, 2000);
}
console.log("start the Non-blocking delay");
delayNonblocking((message) => {
  console.log(message);
});
console.log("this mssg isnot blocked runs efficently");

onmessage = function (event) {
    postMessage("Worker received: " + event.data);
};
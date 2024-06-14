function findRequestsInQueue(wait) {
  let queue = wait.map((w, index) => ({ time: w, index: index + 1 }));
  let result = [];
  let time = 0;

  while (queue.length > 0) {
    result.push(queue.length);
    queue.shift();
    time++;
    queue = queue.filter((request) => request.time > time);
  }
  result.push(0);
  return result;
}

const wait = [2, 2, 3, 1];

console.log(findRequestsInQueue(wait));

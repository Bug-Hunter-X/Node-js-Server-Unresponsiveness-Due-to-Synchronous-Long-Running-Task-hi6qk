const http = require('http');

const server = http.createServer(async (req, res) => {
  // Simulate a long-running task asynchronously
  const start = Date.now();
  const sum = await longRunningTask();
  const end = Date.now();
  console.log(`Long task took ${end - start}ms`);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

async function longRunningTask() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  return sum;
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
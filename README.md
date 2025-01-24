# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where a long-running synchronous task blocks the event loop, causing the server to become unresponsive. The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution using asynchronous operations.

## Problem

Node.js is single-threaded.  When a long-running task is executed synchronously, it occupies the main thread, preventing the server from handling other requests. This leads to unresponsiveness and a poor user experience.

## Solution

The solution involves using asynchronous programming techniques, such as promises or async/await, to allow other operations to continue while the long-running task is in progress.  This prevents blocking the event loop and maintains server responsiveness.
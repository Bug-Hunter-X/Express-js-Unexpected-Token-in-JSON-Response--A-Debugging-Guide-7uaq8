# Express.js Unexpected Token in JSON Response

This repository demonstrates a common yet often overlooked error in Express.js applications: the "Unexpected token" error within JSON responses. This usually stems from subtle syntax errors in the JSON data being sent by the server.

## Problem

The `bug.js` file contains an Express.js server with a route that's designed to return JSON data.  However, due to a trailing comma in the JSON object, the server produces an invalid JSON response, leading to the "Unexpected token" error on the client side.

## Solution

The `bugSolution.js` file corrects the error by removing the trailing comma.  This ensures that the JSON data is correctly formatted, preventing the error from occurring. The solution focuses on preventing the server from sending an invalid JSON response in the first place.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js`.
4. Send a request to `/data`. You should encounter an error.
5. Run `node bugSolution.js`. Send a request to `/data`. This should return valid JSON.

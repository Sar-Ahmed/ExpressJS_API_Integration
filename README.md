# Chilli API code repo

This repo contains code used in this guided project: https://cognitiveclass.ai/courses/course-v1:IBM+GPXX0U2FEN+v1

REST: Representational State Transfer

The res object has several methods for sending various types of responses such as:
1. res.json() for sending JSON objects,
2. res.sendfile() to send a file as a stream, 
3. res.send() can send responses of various types.
4. If no match is found, res.sendStatus() is used to send an appropriate HTTP code and status.


HTTP Status Code | Message
200              | Request Ok
400              | Bad Request 
403              | Forbidden Request
404              | Not Found
500              | Internal Server Error

Note: res.send() automatically populates a status code of 200 if there are no errors in the server application.

Javascript follows a ‘same origin policy’ that controls the interactions between different origins for security reasons. The policy disallows cross origin requests (CORS) however in some cases, allowing CORS is useful.

Note: Make sure the app.use() is above the routing methods as it should be placed before the routing methods in the request response cycle.

app.all("/", (req, res) => {
  res.sendStatus("404");
});
=> the special all method, which is not an HTTP verb but instead serves as a catch all for all request types.
Further, the route ‘/‘ refers to all possible paths. If a request does not match one of the previously defined endpoints, It matches with this catch-all endpoint that provides an error message indicating the request path is not a valid one.
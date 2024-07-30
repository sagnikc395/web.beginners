## Databases and Auth

- How to trigger requests on clicking of button ?
- 99.9 % website will return need to return to the backend servers.
- browsers returns fetch -> to fetch data from the backend.
- until now we have sent requests using

  - postman/hoppscotch
  - URL bar

- there is a third way:

  - using the fetch api call.

- write this frontend code, hit the endpoint and renders that on the browser -> i.e GET requests on the endpoint.
- fetch will by default send GET requests, we can customize and send POST requests as

```js
fetch(url,{
  method:"POST",
  ...
});
```


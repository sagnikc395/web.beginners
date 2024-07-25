## week2.2 | Express and Backend Development

- Nodejs runtime , HTTP and how does it work.
- HTTP protocol and how to communicate between frontend with backends.
- building HTTP servers.

### Nodejs and its runtime :

- ECMAScript / Javascript ?

  - ECMAscript is a specfication based on which JS is based upon.
  - Every new things, new things are added, the compiler should support.

- What is Javascript ?

  - Is the implementation of the ECMAScript in the browser. Mostly used and widely known specification of ECMAScript.
  - Different specification are there, need a bundler to roll down new changes to old version for old browsers.
  - DOM is not part of the ECMAScript specification , but part of JS.
  - setTimeout,setInterval etc. also part of it.

  - Common JS runtimes:
    - V8 -> Google Chrome (c++) -> converts JS into binary -> open source -> JIT Compiler for JS
    - SpiderMonkey -> Firefox (c++,rust) -> converts JS into binary

### Nodejs

- some people realized that some parts of the js engines can be extracted and run as a runtime for the JS. (2011-12 ish)
- take v8 engine, add some extra functionality on top of it and make it a backend language.
- its a JS runtime, that can run JS code .

### Bun

- Bun is a Javascript runtime , which is written in Zig, it is significantly faster than the Nodejs runtime.
- eventually , people will move to this as it has excellent backward compatibility with nodejs

### What can we create with Nodejs ?

- CLIS
- create a video player
- create a game
- create an HTTP server -> most of the time we make use of this.

### what is an HTTP server ?

- Protocol -> set of rules that both the parties know on how to talk to each other.

- HTTP:(Hypertext Transfer Protocol)

  - a protocol that is defined for machines to communicate.
  - specifcially for websites, it is the most common way for our website's frontend to talk to the backend.

- basically machines talking to each other.

- Frontends:

  - just the frontend and UI
  - also called as clients.

- Backends:

  - write servers, business logic and connect with the servers.

- fullstack :

  - frontend + backends

- 90% of the time protocol used is HTTP, sometimes else like websockets(continuous changing backend apps) or webrtc(yt)

### HTTP protocol gist

- Client throws some information at a server
- server doing something with that information
- server responding back with the final result

- think of them as function where :

  1. arguments are something that the client sends
  2. rather than calling a function using its name, the client uses a URL.
  3. rather than the function body, the server does something with the request.
  4. rather than the function returning a value, the server responds with some data.

- think of HTTP as RPC(remote procedure calls) -> we call then remotely residing over a server.

### Things client needs to worry about :

- what protocol they are exposed on -> HTTP/HTTPS(secure version)
- address/URL of the backend server
- IP/Port
- Route / Headers/ Body/ Query Parameters
- Methods

### Things server needs to worry about :

- respons handlers
- response body
- status codes

### URL has a few parts:

- Protocol -> http:/ https:/
- domain -> chat.openai.com
- route -> /backend.api/conversation

### body :

- arguments that we send to the server.
- i.e message to be sent to the openai server

### method :

- what action we want ?
- get, put,post,delete etc.

### status code, responsebody, response header :

- status code -> what is the status server responds with
- response body -> the output
- response header -> header response that we are getting

### Lifecycle when we fire the request in a browser:

- Browser parses the URL
- Does a DNS lookup -> convert domain name to a IP
- establishes a connection to the IP -> handshake

- DNS Resolution / Lookup ?
  - URLs are just like contact list on phone.
  - kv pairs of name to number
  - here in the end map a string(domain name) to an IP.
  - if we ever buy a URL of our own, well need to point to it to the IP of our server.

###

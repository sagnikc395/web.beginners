## Async Javascript , Real Use of Callbacks and JS Browser Architecture , Promises and Async - Await

- how does js work in the browser ?
- why async and await ?

- what does sync and async means ?

  - sync -> toegether, one after the other, seqeuntial i.e only one thing is happening at a time
  - async -> opposite of sync, happens in parts,
    multiple things are context switching with each other.

- Intuition of Async

  - humans brain and body is single threaded.
  - we can only execute one thing at a time.
  - but we can context switch b/w tasks, or we can delegate tasks to other people.
  - decrease the total time to execute some functions, single JS thread can delegate other "parts" to delegate to use other things.

Eg: file I/O is async by nature.

- Gist: even if you are single threaded, you can do things parallely by delegating. you can also context switch b/w tasks if need be(the net time to do both of the things would still be the same).

  - net amount of time taken to do a task can be decreased, by doing these two things (delegating and context switching).

## How does JS use async functions ?

- eg: setTimeout , setInterval is a asynchronous function.
- pre-made function js made for us available to use.
- what makes this async ?
  - when the pointer reaches the line on setTimeout funciton call, it does not wait for the function to complete before going to next line, rather pushes it into the stack.

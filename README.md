# Currency exchange test task

[![Build Status](https://travis-ci.org/Finesse/currency-exchange-test-task.svg?branch=master)](https://travis-ci.org/Finesse/currency-exchange-test-task)

The goal was to make a React application that simulates the currency exchange screen functionality of the given application:
https://www.youtube.com/watch?v=c0zPSiKYipc&t=29s

The task is described more detailed here:
[task.pdf](task.pdf)

## How to run the application

Just open http://finesse.github.io/currency-exchange-test-task.
The application supports all the modern browsers (IE is not at the party).

If you want to run it locally:

1. Download the repository
2. Open a terminal and go to the project directory
3. Run `npm install`
4. Run `npm start`
5. Open http://localhost:3000 in a browser

If you want to deploy it on a server, do steps 1-3 and then run `npm run build`.
A `build` directory will be created in the project directory. Serve the content of the directory with your web server.

## How to test

Run `npm test` to perform the tests. Another checks are performed during running `npm start` and `npm run build`.

## Architecture concepts

- [Redux](http://redux.js.org) is used to manage the application state
- [Redux-Saga](redux-saga.js.org) is used to manage asynchronous actions because it allows to write very testable code
- The architecture may seem overcomplicated.
    I chose it to show my skills and because it fits for complex applications (which financial applications usually are).
- [Big.js](http://github.com/MikeMcl/big.js) is used for precise money calculations (e.g. for the famous `0.1 + 0.2`)
- The "beutiful" React components are stored in `src/view/components`, the "clever" React components are stored in `src/view/containers`
- Select field is a more convenient way than slider to pick from many currencies
- The [FloatRates](http://floatrates.com) website is used to get exchange rates because it doesn't require an API key.
    Not requiring an API key makes the application much easier to install.

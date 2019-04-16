Repository to show issue with `stopOnError` property of [xclap](https://github.com/jchip/xclap)

## Description
There are two tasks, that are running concurrently and both of them exit with process code not equal 0.

### Steps
* Run `npm i`
* Run `npm run no-flag`
* Run `npm run flag`

### Expected Behaviour
Same result expected for both `no-flag` and `flag` command, as `stopOnError` is defined inside `xclap.js` file

### Current Behaviour
`no-flag` command will stop fully after error in first exited tasks, no matter that `stopOnError` is defined with `soft` inside `xclap.js`

// when we require a file, node executes that file, and then RETURNS whatever the value of module.exports is.
var allTheData = require('./helloNode.js')

console.log(allTheData.other)
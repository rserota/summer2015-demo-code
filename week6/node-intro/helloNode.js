// console.log('hello node!')

// console.log(process)

// ARGument Vector - lists all the arguments to the script. Most important arguments are arguments 3 through infinity
// console.log(process.argv[2].split('').reverse().join(''))
// console.log(process.env.USER)

// var allTheData = [1,2,3]
// var allTheOtherData = ['a', 'b', 'c']

// // the exports property on the module object is the only thing that is accessible outside of this file.
// module.exports = {
//     data : allTheData,
//     other : allTheOtherData
// }

// var fs = require('fs') // require the file-system module

// // // fs.writeFileSync('output.txt', 'This is text') // 2 arguments: filename, and the file contents.

// var contents = fs.readFileSync('./notes.txt', 'utf-8')
// fs.writeFileSync('output.txt', contents) // absolute paths start with `/`
// // console.log(contents)

// any module in the node modules folder can be required
var _ = require('underscore')

console.log(_.max([1,2,3]))
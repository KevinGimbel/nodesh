'use strict';

let helper = require('./helper.js')

function Nodesh () {}

let P = Nodesh.prototype

P.sayHello = (name = "world") => {
    return `Hello, ${name}!`
}

P.add = (...numbers) => {
    let result = 0
    
    numbers.forEach( (i) => {
        if (!helper.typeof(i, 'number')) {
            result = null
            return null
        }
        result += i
    })
    
    return result
}

module.exports = Nodesh
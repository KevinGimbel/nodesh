'use strict';

function NodeshHelper () {}
let NH = NodeshHelper.prototype

NH.typeof = (obj, desired) => {
    if(obj) {
        return (obj.constructor.toString().toLowerCase().indexOf(desired) > -1)
    }
    
    return false
}

module.exports = NH
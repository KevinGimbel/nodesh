'use strict';

function Parser() {}
let P = Parser.prototype

const arg_regex = /(^\-)[a-zA-z0-9]/gi

P.parse = (args) => {
    let argmap = {}

    args.forEach( (item, i) => {
        if (item.charAt(0) == '-') {
            argmap[item] = {
                cmd: item,
                arg: args[i+1]
            }
        }
    })

    return argmap
}

module.exports = Parser
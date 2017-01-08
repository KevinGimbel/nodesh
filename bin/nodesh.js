#!/usr/bin/env node
'use strict';

// Used to run Mocha tests from the command line
const spawn = require( 'child_process' ).spawn

// used to get the test directory
const path = require('path')

// Main script code
const Nodesh  = require('../lib/index.js')
// CLI parser
const Parser = require('../lib/parse.js')
// program data from package.json
const appData = require('../package.json')

// initialize nodesh and parser
const n = new Nodesh()
const p = new Parser()

/**
 * process.argv holds the command line arguments as array
 * Predefined values
 * 0 => nodejs executable
 * 1 => program path
 */
// Process arguments
const args = process.argv
// Argument map created from Parse.js
const argmap = p.parse(args)
// All passed argument-keys, e.g. -v, -d
const arglist = Object.keys(argmap)

const exit = (code = 0) => {
    process.exit(code)
}

const version = () => {
    console.log(`${appData.name} - v${appData.version}`)
    console.log(`Example node cli app.`)
    console.log(`\n(c) 2017 by ${appData.author.name} <${appData.author.url}>`)
    console.log(`Report issues to ${appData.bugs.url}`)

    exit()
}

const usage = () => {
console.log(`USAGE: ${appData.name} [OPTION ["arguments"]]

OPTIONS:
    -n "name"   Greet someone or say "Hello, world!"
    -u          Show usage message
    -v          Show version
    -t          Run mocha tests for ${appData.name}

EXAMPLE:
    $ ${appData.name} -n "Kevin"
    $ ${appData.name} -v
    $ ${appData.name} -u`)
    
    exit()
}

const errorTest = () => {
    console.error(`This is a simulated ${appData.name} error`)
    exit(1)
}

const runTest = () => {
    const testDirectory = path.join(__dirname, '..', 'test')
    const testRunner = spawn('mocha', [ `${testDirectory}` ])

    testRunner.stdout.on( 'data', data => {
        console.log(`${data}`)
    })
    
    testRunner.stderr.on( 'data', data => {
        console.error(`${data}`)
    })

    testRunner.on( 'close', code => {
        console.log(`Test runner failed with code ${code}`)
    })
}

// Loop through the parameters
arglist.forEach( (arg) => {
    switch(arg) {
        case '-n':
            let funcArgs = argmap['-n'].arg
            console.log( n.sayHello(funcArgs) )
            break

        case '-u':
            usage()
            break

        case '-v':
            version()
            break

        case '-e':
            errorTest()
            break

        case '-t':
            runTest()
            break
    }
})

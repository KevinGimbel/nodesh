'use strict';

const assert = require('assert')
const nodesh = require('../lib/index.js')
const n = new nodesh()

describe('Nodesh test suite', () => {
    describe('Nodesh.sayHello tests', () => {
        it('should return "Hello, world!', () => {
            assert.equal('Hello, world!', n.sayHello())
        })

        it('should return "Hello, $name!" when run with arguments', () => {
            let names = ['Kevin', 'Tim', 'Nika', 'Haroen', 'Luky']

            names.forEach( person => {
                assert.equal(`Hello, ${person}!`, n.sayHello(person))
            })
        })
    })

    describe('Nodesh.add tests', () => {
        it('should return "2" for "1 + 1"', () => {
            assert.equal(2, n.add(1,1))
        })

        it('should add two or more numbers', () => {
            assert.equal(12, n.add(3,4,3,2))
            assert.equal(30, n.add(13,6,1,9,1))
            assert.equal(37, n.add(10,30,-3))
            assert.equal(-5, n.add(12,-12,-5))
        })

        it('should work with math operations', () => {
            assert.equal(13, n.add(3, 7, (12 - 6 + 3 - 6)))
            assert.equal(3, n.add((2*5), -7))
            assert.equal(16, n.add(1,3, new Number(12)))
        })

        it('should fail for non-numeric values', () => {
            assert.equal(null, n.add(0,1, "test"))
            assert.equal(null, n.add(0,2, undefined))
            assert.equal(null, n.add(0,3, null))
            assert.equal(null, n.add(0,4, function() {}))
        })
    })
})
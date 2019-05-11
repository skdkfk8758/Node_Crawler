
const assert = require('assert')
const first_1_second_2 = require('.').first_1_second_2
const first_1_second_3 = require('.').first_1_second_3
const first_2_second_1 = require('.').first_2_second_1
const first_2_second_3 = require('.').first_2_second_3
const first_3_second_1 = require('.').first_3_second_1
const first_3_second_2 = require('.').first_3_second_2

describe('App test!', () => {
    it('sayHello should return hello', () => {
        assert.equal(first_1_second_2(), (1,2))
    });

    it('sayHello should return hello', () => {
        assert.equal(first_1_second_3(), (1,3))
    });

    it('sayHello should return hello', () => {
        assert.equal(first_2_second_1(), (2,1))
    });

    it('sayHello should return hello', () => {
        assert.equal(first_2_second_3(), (2,3))
    });

    it('sayHello should return hello', () => {
        assert.equal(first_3_second_1(), (3,1))
    });

    it('sayHello should return hello', () => {
        assert.equal(first_3_second_2(), (3,2))
    });
});
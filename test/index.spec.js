// const sayHello = require('./index').sayHello;
//
// describe('App test!', function () {
//     it('sayHello should return hello', function (done) {
//         if (sayHello() === 'hello') {
//             done();
//         }
//     });
// });

var assert=require('assert')
var test1=require('./index').test1
var test2=require('./index').test2
var test3=require('./index').test3
var test4=require('./index').test4
var test5=require('./index').test5
var test6=require('./index').test6

describe('Test suit',function(){
    it('test1',function(){
        assert.equal(test1(),(1,2))
    })
    it('test2',function(){
        assert.equal(test2(),(1,2))
    })
    it('test3',function(){
        assert.equal(test3(),(1,3))
    })
    it('test4',function(){
        assert.equal(test4(),(2,2))
    })
    it('test5',function(){
        assert.equal(test5(),(2,3))
    })
    it('test6',function(){
        assert.equal(test6(),(3,3))
    })
})


var { sum } = require('./sum.js')
console.log(sum.sum())

test("Adds 1 + 2 to equal 3", function(){
    expect(sum(1,2)).toBe(3)
})
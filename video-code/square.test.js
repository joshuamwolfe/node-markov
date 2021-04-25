const { square } = require('./square');

test('should return a squared number', function(){
    const res = square(3)
    expect(res).toEqual(9)
})
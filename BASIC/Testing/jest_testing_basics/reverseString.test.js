const reverseString = require('./reverseString');

// CHECK if the function exists
test('reverseString funciton exists', () => {
    expect(reverseString).toBeDefined();
});

// Check if the string reverses
test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});


// Check if the string is valid for uppercases
test('String reverses', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});




const functions = require('./functions.js');

test('adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4)
});


test('adds 2 + 2 to NOT equal 5', () => {
    datatest = [
        {filterA: 2, FilterB:2 ,Result:4},
        {filterA: 1, FilterB:0 ,Result:1},
        {filterA: 1, FilterB:2 ,Result:3},
        {filterA: 1, FilterB:3 ,Result:4},
        {filterA: 1, FilterB:4 ,Result:5},
    ]
    datatest.forEach(element => {
        expect(functions.add(element.filterA,element.FilterB)).toBe(element.Result)
    });
});

test('Divide(numA,numB) Should return correctly all operations',()=>{
    datatest = [
        {filterA: 2, FilterB:2 ,Result:1},
        {filterA: 1, FilterB:0 ,Result:0},
        {filterA: 0, FilterB:2 ,Result:0},
        {filterA: 10, FilterB:2 ,Result:5},
        {filterA: 0, FilterB:0 ,Result:0},
    ]
    datatest.forEach(element => {
        console.log(`testing divide(${element.filterA}, ${element.FilterB})`);
        expect(functions.divide(element.filterA,element.FilterB)).toBe(element.Result)
    });
})

test('Should be null',() => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('Should be a Vilchez', () => {
     expect(functions.createUser())
     .toEqual({firstName:'Hans',lastName:'Vilchez'})
});

test('Should be under or equal to 1600',()=>{
    const load1 = 800;
    const load2 = 700;

    // expect(functions.add(load1,load2)).toBeLessThan(1600)
    expect(functions.add(load1,load2)).toBeLessThanOrEqual(1500)
});

//Regex
test('There is no I in team', () =>{
     expect('team').not.toMatch(/I/);
});

test('Admin should be in userNames',()=>{
    const user = ['Hans', 'Vilchez', 'Buker']
    expect(user).toContain('Vilchez')
});

// working with async data
test('API https://jsonplaceholder.typicode.com/users/1 should get name: Leanne Graham', async () => {
    expect.assertions(1) //verify the numbers of assertions called.
    const data = await functions.fetchUser()
    expect(data.name).toBe('Leanne Graham')

})
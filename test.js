const inputArray  = require ('./server.js');

// En global variabel som används på 4 av 5 funktioner
const todo = {todos: "test", id: 1};

// Kollar om arrayen är tom.
test('Test if array exist and is empty', () => {
    expect(inputArray).toMatchObject({});
});

// Lägger till en todo i arrayen.
test('Test push a todo to the array', () => {
    if (Array.isArray(inputArray)) {
    inputArray.push(todo);
    expect(inputArray).toMatchObject(todo);
    }
});

// Testar att hämya en todo från arrayen.
test('Test get a todo from the array', () => {
    if (Array.isArray(inputArray)) {
    expect(inputArray).toMatchObject(todo);
    }
});

// Testar att uppdatera en todo i arrayen.
test('Test update a todo from the array', () => {
    if (Array.isArray(inputArray)) {
    inputArray.push(todo);
    expect(inputArray).toMatchObject(todo);
    }
} );

// Testar att ta bort en todo från arrayen.
test('Test delete a todo from the array', () => {
    if (Array.isArray(inputArray)) {
    inputArray.pop(todo);
    expect(inputArray).toMatchObject({});
    }
} );


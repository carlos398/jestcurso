const text = "Hola Mundo";
const fruits = ["manzana", "melon", "banana"];

test("debe contener un texto", () => {
  expect(text).toMatch(/Mundo/);
});

test("tenemos una banana?", () => {
  expect(fruits).toContain("banana");
});

test("Mayor que", () => {
  expect(10).toBeGreaterThan(2);
});

test("Verdadero", () => {
  expect(true).toBeTruthy();
});

// pruebas de un callback
const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("probar un callback", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  });
});

// pruebas unitarias con promesas
const reverseString2 = str => {
    return new Promise(( resolve, reject) => {
        if(!str) {
            reject(Error('Error'))
        }
        resolve(str.split('').reverse().join(''))
    });
};

// usnado then
test('promise test', () => {
  return reverseString2('hola')
  .then(string => {
      expect(string).toBe('aloh')
  });
});

// usando async y await
test('probar async/await', async() => {
  const string = await reverseString2('Hola');
  expect(string).toBe('aloH')
});


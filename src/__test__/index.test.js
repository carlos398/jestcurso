// podemos probar un archivo especifico con jest pero debemos instalarlo de forma global
// jest src/__test__/index.test.js (con este comando podemos ejecutar un archivo especifico)

//llamamos nuestro archivo index para tener acceso a sus datos
const randomStrings = require('../index')


// podemos manejar una suite para hacer pruebas de una respectiba parte
describe('Probar funcionalidades de randomString', () => {
    //probamos que lo que nos regrese sean strings
    test('Pueba de funcionalidad', () => {
        expect(typeof(randomStrings())).toBe('string');
    });

    test('Comprobar que no existe una ciudad', () => {
      expect(randomStrings()).not.toMatch(/Manizales/);
    });
    
})

// npm run test:watch (para que este observando y se ejecute en automatico el testo, debe ser configurado)
// configurado en package json ("test:watch": "jest --watch")  de esa forma
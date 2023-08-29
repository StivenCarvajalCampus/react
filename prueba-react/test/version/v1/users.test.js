import { saludar } from "../../../version/v1/users"

// eslint-disable-next-line no-undef
describe("test del archivo user.js", () => {
    // eslint-disable-next-line no-undef
    test('la funcion saludar devuelve "hola mundo"', () => {
        // eslint-disable-next-line no-undef
        expect(saludar()).toBe("Hola mundo")
    })
    
})

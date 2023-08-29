import { notas } from "../../../version/v1/notas"



// eslint-disable-next-line no-undef
describe("test del archivo notas.js", () => {
    const app= notas(2,3,5)
    // eslint-disable-next-line no-undef
    test('la funcion notas cuando se pierde el promedio(Estudie)', () => {
        // eslint-disable-next-line no-undef
        expect(app ).toBe("Estudie")
    })
    // eslint-disable-next-line no-undef
    test('la funcion notas cuando se pasa el promedio(Becado)', () => {
        const app= notas(5,3,5)
        // eslint-disable-next-line no-undef
        expect(app ).toBe("Becado")
    })
})

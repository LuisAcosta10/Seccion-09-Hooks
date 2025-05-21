import { renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'  // Ajusta la ruta a tu hook

describe('Pruebas en el useCounter', () => {
    const { result } = renderHook(() => useCounter())
    const { counter, decrement, increment, reset } = result.current
    test('Debe de retornar los valores por defecto counter 10', () => {
        expect ( counter ).toBe(10)
    })
    test('Debe de retornar los valores por defecto decrement', () => {
        expect ( decrement ).toEqual( expect.any( Function))
    })
    test('Debe de retornar los valores por defecto increment', () => {
        expect ( increment ).toEqual( expect.any( Function))
    })
    test('Debe de retornar los valores por defecto reset', () => {
        expect ( reset ).toEqual( expect.any( Function))
    })
    
    //! tarea
    test('debe de generar el counter con el valor de 100', () => {
        // para poder darle el valor de 100 tenemos que tomar el render y pasarle el valor pero por .current
        const { result } = renderHook(() => useCounter(100))
        expect ( result.current.counter ).toBe(100)
    })
    
})

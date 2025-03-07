import React from 'react'
import { ProductCard } from '../../src/components'
import { fireEvent, render } from '@testing-library/react'
import { product1 } from './data/product'

describe('ProductCard', () => {
    test('Debe de mostrar el componente', () => {
        const { container } = render(<ProductCard product={product1}>
            {
                () => (
                    <h1>Product card</h1>
                )
            }
        </ProductCard>)
        expect(container).toMatchSnapshot()
    })

    test('Debe de incrementar el contador', () => {
        const increaseByNumber = 1
        const { asFragment, container } = render(<ProductCard product={product1}>
            {
                ({ count, increaseBy }) => (
                    <>
                        <h1>Product card</h1>
                        <span>{count}</span>
                        <button onClick={() => increaseBy(increaseByNumber)}></button>
                    </>
                )
            }
        </ProductCard>)

        expect(asFragment()).toMatchSnapshot()

        const initialCount = container.querySelector('span')
        expect(initialCount?.textContent).toBe('0')

        fireEvent.click(container.querySelector('button')!)
        const updateCount = container.querySelector('span')
        expect(updateCount?.textContent).toBe(increaseByNumber.toString())
    })
})

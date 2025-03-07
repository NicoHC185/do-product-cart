import React from 'react'
// import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components'
import { render } from '@testing-library/react'
import { product1 } from './data/product'



describe('ProductTitle', () => {
    test('Debe de mostrar el componente con el titulo personalizado', () => {
        const { container } = render(<ProductTitle title={'Custom Product'} className='custom-class'></ProductTitle>)
        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar el componente con el nombre del producto', () => {
        const { container } = render(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle></ProductTitle>
                    )
                }
            </ProductCard>
        )
        expect(container).toMatchSnapshot()

    })
})

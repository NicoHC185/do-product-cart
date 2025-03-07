import React from 'react'
import { render } from '@testing-library/react';
import ProductCard, { ProductImage } from '../../src/components'
import { product1, product2 } from './data/product';

describe('ProductImage', () => {
    test('Debe de mostrar el componente con la imagen personalizada', () => {
        const customImg = 'https://sm.ign.com/ign_es/news/m/monster-hu/monster-hunter-wilds-mod-already-gives-unlimited-character-a_z9ga.jpg'
        const { container } = render(
            <ProductImage img={customImg} />
        )
        expect(container).toMatchSnapshot()
    })
    test('Debe de mostrar el componente con la imagen del product2', () => {
        const { container }  = render(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )
        expect(container).toMatchSnapshot()

    })
    test('Debe de mostrar el componente con la imagen del product1 (sin imagen)', () => {
        const { container }  = render(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )
        expect(container).toMatchSnapshot()

    })
})

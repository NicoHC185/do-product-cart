import React from 'react'
import { createContext, CSSProperties, JSX } from 'react'
import { InitialValues, onChangeType, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/product.interface'
import { useProducts } from '../hooks/useProducts'
import styles from '../styles/styles.module.css'

export interface Props {
    product: Product,
    children: (Props: ProductCardHandlers) => JSX.Element,
    className?: string
    style?: CSSProperties
    value?: number
    onChange?: onChangeType
    initialValues?: InitialValues
}

export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export const ProductCard = ({
    product,
    children,
    className,
    style,
    value,
    onChange,
    initialValues
}: Props) => {

    const { counter, maxCount, increaseBy, isMaxCountReached, reset }
        = useProducts({ product, value, onChange, initialValues })

    return (
        <Provider value={{ counter, maxCount, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({
                    count: counter,
                    maxCount,
                    product,
                    increaseBy,
                    isMaxCountReached,
                    reset,
                })}
            </div>
        </Provider>
    )
}

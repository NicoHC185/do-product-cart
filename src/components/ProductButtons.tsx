import React from 'react'

import { CSSProperties, useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'
import { IncreaseBy } from "../interfaces/product.interface"

export interface Props {
    className?: string;
    style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {

    const { counter, maxCount, increaseBy } = useContext(ProductContext)

    const isMaxReached = useCallback(() => counter === maxCount, [counter, maxCount])

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <ProductButtonMinus increaseBy={increaseBy} />
            <div className={styles.countLabel}> {counter} </div>
            <ProductButtonAdd increaseBy={increaseBy} disabled={isMaxReached()} />
        </div>
    )
}

interface ButtonProps {
    increaseBy: IncreaseBy,
    disabled?: boolean
}

export const ProductButtonMinus = ({ increaseBy, disabled }: ButtonProps) => {
    return (
        <button
            className={`${styles.buttonMinus} ${disabled && styles.disabled}`}
            onClick={() => !disabled && increaseBy(-1)}
        >
            -
        </button>
    )
}

export const ProductButtonAdd = ({ increaseBy, disabled }: ButtonProps) => {
    return (
        <button
            className={`${styles.buttonAdd} ${disabled && styles.disabled}`}
            onClick={() => !disabled && increaseBy(1)}
        >
            +
        </button>
    )
}

export default ProductButtons
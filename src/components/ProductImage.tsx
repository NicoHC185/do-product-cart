import React from 'react'
import { CSSProperties, useContext, useMemo } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export interface Props {
    img?: string,
    className?: string
    style?: CSSProperties
}

export const ProductImage = ({ img, className, style }: Props) => {

    const { product } = useContext(ProductContext)

    const imgSrc = useMemo(() => {
        return product?.img || img || '../assets/no-image.jpg'
    }, [product, img])

    return (
        <img
            className={`${styles.productImg} ${className}`}
            style={style}
            src={imgSrc}
            alt={'Product img'}
        />
    )
}

export default ProductImage
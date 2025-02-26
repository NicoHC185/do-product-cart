import React from 'react'
import { CSSProperties, useContext, useMemo } from "react"
import { ProductContext } from "./ProductCard"
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface Props {
    img?: string,
    className?: string
    style?: CSSProperties
}

export const ProductImage = ({ img, className, style }: Props) => {

    const { product } = useContext(ProductContext)

    const imgSrc = useMemo(() => {
        return product?.img ?? img
    }, [product, img])

    return (
        <img
            className={`${styles.productImg} ${className}`}
            style={style}
            src={imgSrc || noImage}
            alt={imgSrc ? 'Product img' : 'no image'}
        />
    )
}

export default ProductImage
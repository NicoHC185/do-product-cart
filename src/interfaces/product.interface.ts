import { JSX } from "react"
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardImage } from "../components/ProductImage";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductCardTitleProps } from "../components/ProductTitle";

export type IncreaseBy = (value: number) => void

export interface Product {
    id: string,
    title: string,
    img?: string
}

export interface ProductContextProps {
    counter: number;
    maxCount?: number,
    product: Product;
    increaseBy: IncreaseBy;
}

export interface ProductCardHOCProps {
    ({ product, children, className }: ProductCardProps): JSX.Element,
    Title: (Props: ProductCardTitleProps) => JSX.Element,
    Image: (Props: ProductCardImage) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element,
}

export type onChangeType = (args: onChangeArg) => void

export interface onChangeArg {
    product: Product,
    count: number
}

export interface useProductArgs {
    product: Product,
    value?: number,
    onChange?: onChangeType
    initialValues?: InitialValues
}
export interface ProductInCart extends Product {
    count: number
}

export interface ShoppingCart {
    [key: string]: ProductInCart
}

export interface InitialValues {
    count?: number,
    maxCount?: number
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}
import { useEffect, useRef, useState } from "react"
import { useProductArgs } from "../interfaces/product.interface"

export const useProducts = ({ product, value = 0, onChange, initialValues }: useProductArgs) => {

    const isMounted = useRef(false)

    const [counter, setCounter] = useState<number>(initialValues?.count || value)

    const increaseBy = (valueIncrease: number): void => {
        let newValue = Math.max(counter + valueIncrease, 0)
        if (initialValues?.maxCount) newValue = Math.min(newValue, initialValues.maxCount)
        setCounter(newValue)
        onChange && onChange({ product, count: newValue })
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return
        setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true
    }, [])

    return {
        count: counter,
        counter,
        maxCount: initialValues?.maxCount,
        increaseBy,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        reset,
    }
}

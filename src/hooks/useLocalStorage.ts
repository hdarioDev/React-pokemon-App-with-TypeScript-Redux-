import { useState } from 'react'

export function useLocalStorage(key: any, initialValue: any) {

    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key)
            return item != null ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    //customHook
    const setLocalStorage = (value: any) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
            setValue(value)
        } catch (error) {
            console.log("error ", error)
        }
    }
    return [value, setLocalStorage]
}
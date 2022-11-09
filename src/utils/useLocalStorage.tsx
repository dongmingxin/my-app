import { useEffect, useState } from 'react'


interface useLocalStorageProps {
    initalValue?: string,
    key: string
}
const useLocalStorage = ({initalValue,key}:useLocalStorageProps) => {
    const [value, setValue] = useState(()=>{
      if(typeof window !== "undefined") {
        const jsonValue = localStorage.getItem(key);
        if(jsonValue) return JSON.parse(jsonValue);
      }
      return initalValue
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key,value])

    return [value, setValue]
}

export default useLocalStorage
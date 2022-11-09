import { useState, useEffect } from 'react'

const useCheckMobileScreen = ():boolean => {
    const [width, setWidth] = useState(810);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    //nextJS windows undefined
    useEffect(()=>{
        setWidth(window.innerWidth);
    },[])

    useEffect(()=>{
        window.addEventListener('resize',handleWindowSizeChange);
        return () => {
            removeEventListener('resize', handleWindowSizeChange);
        }
    },[])

    if(width < 800) {
        return true
    }

    return false

}

export default useCheckMobileScreen
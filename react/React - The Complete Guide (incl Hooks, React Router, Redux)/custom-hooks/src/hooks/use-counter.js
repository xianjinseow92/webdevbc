import { useState, useEffect } from "react";

const useCounter = () => {
    /**
     * Custom hooks have THEIR OWN state. Not a shared state. 
     * So in this example, while it may seem like the 2 timers share the same counter variable 
        * Becasuse they both increment at the same time
    * They DO NOT share the same counter state variable.
     */
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000)

        // cleanup timer 
        return () => clearInterval(interval);
    }, []);

    return counter;
}

export default useCounter;
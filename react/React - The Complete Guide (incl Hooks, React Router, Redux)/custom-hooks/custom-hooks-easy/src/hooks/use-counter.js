import { useState, useEffect } from "react";

const useCounter = (forwards = true) => {
    /**
     * Custom hooks have THEIR OWN state. Not a shared state. 
     * So in this example, while it may seem like the 2 timers share the same counter variable 
        * Becasuse they both increment at the same time
    * They DO NOT share the same counter state variable.
     */
    const [counter, setCounter] = useState(0);
    let signModifier;

    // Set interval
    if (forwards) {
        signModifier = 1;
    } else {
        signModifier = -1;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + (1 * signModifier));
        }, 1000)

        // cleanup timer 
        return () => clearInterval(interval);
    }, [signModifier]);

    return counter;
}

export default useCounter;
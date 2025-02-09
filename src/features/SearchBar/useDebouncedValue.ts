import { useState, useEffect } from 'react';

// Custom hook returns the debounced value after delay.
export const useDebouncedValue = (value: string, delayMs = 300): string => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler: number = setTimeout(() => {
            setDebouncedValue(value);
        }, delayMs);

        // Clean-up
        return () => {
            clearTimeout(handler);
        };
    }, [value, delayMs]);

    return debouncedValue;
};

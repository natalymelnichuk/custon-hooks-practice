import { useState, useEffect } from "react";

export interface DebounceInputs {
    value: string;
    delay: number;
}

export interface DebounceReturn {
    debouncedValue: string;
}

export function useDebounce({ value, delay = 500 }: DebounceInputs): DebounceReturn {
    const [debouncedValue, setDebouncedValue] = useState<string>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return { debouncedValue };
}
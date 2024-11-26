import React, { useCallback, useState } from 'react';
import { TextInput } from 'react-native';

const debounce = (fn: (q: string) => void, delay: number = 500) => {
    let timerId: any;
    return (arg: string) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn(arg);
        }, delay);
    };
};

export function SearchComponent() {
    const [query, setQuery] = useState('');

    const debounceSearchApi = useCallback(debounce((text: string) => {
        // Mock API call
        console.log(`Searching for ${text}`);
    }), []);

    const handleChangeText = (text: string) => {
        setQuery(text);
        debounceSearchApi(text);
    };

    // Implement debouncing logic here

    return (
        <TextInput
            value={query}
            onChangeText={handleChangeText}
            placeholder="Type to search"
        />
    );
}

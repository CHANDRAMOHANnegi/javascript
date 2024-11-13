import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export const useAsyncStorage = <T>(key: string, initialState: T) => {
    const [data, setData] = useState<Record<string, object> | null>(null);

    useEffect(() => {
        AsyncStorage.setItem(key, JSON.stringify(data));
    }, [data, key]);

    useEffect(() => {
        AsyncStorage.getItem(key, (error, value) => {
            if (error) { return null; }
            if (value) {
                setData({ ...initialState, key: JSON.parse(value) });
            }
        });
    }, [key, setData, initialState]);

    const setItem = (itemKey: string, value: any) => {
        setData(prevData => ({ ...(prevData ?? {}), [itemKey]: value }));
    };

    const clear = () => {
        setData(null);
        // clear localStorage also
        AsyncStorage.removeItem(key).catch(error =>
            console.error('Error clearing data in AsyncStorage:', error)
        );
    };

    return [
        data,
        setItem,
        clear,
    ] as const;
};

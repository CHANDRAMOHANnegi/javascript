import React from 'react';
import { StyleSheet, Text } from 'react-native';

export type TextProps = {
    style?: string
    text?:string|number
}

export const ZText = ({ text}: TextProps) => {
    return (
        <Text style={{ ...styles.text }}
        >{text}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
    },
});

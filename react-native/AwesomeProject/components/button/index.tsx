import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';

type ButtonProps = {
    text: string
    textStyle?: TextStyle
    buttonStyle?: ViewStyle
    onPress: () => void
}

const Button = ({ text, onPress, buttonStyle, textStyle }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.button, ...buttonStyle }}>
            <Text style={{ ...styles.text, ...textStyle }}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'gray',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
    },
});

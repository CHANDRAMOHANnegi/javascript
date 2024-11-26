

import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

type ButtonVariant = 'default' | 'primary'

export type ButtonProps = {
    title: string,
    titleStyle?: object
    onPress: () => void
    loading?: boolean
    btnContainerStyle?: object//StyleProp<ViewProps>
    variant?: ButtonVariant
}

const variantStyles = {
    default: {
        containerStyle: {},
        textStyle: {},
    },
    primary: {
        containerStyle: {
            borderColor:'green',
        },
        textStyle: {
            color:'green',
        },
    },
};

const Button: React.FC<ButtonProps> = ({ title, loading, onPress, variant = 'default', btnContainerStyle, titleStyle }) => {
    const handleOnPress = () => {
        if (!loading) {
            onPress();
        }
    };
    const { containerStyle, textStyle } = variantStyles[variant];
    return (
        <TouchableOpacity
            style={{ ...styles.buttonContainer, ...containerStyle, ...btnContainerStyle }}
            onPress={handleOnPress}
        >
            <Text style={{ ...styles.titleStyle, ...textStyle, ...titleStyle }}>{loading ? '..loading' : title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 1,
        padding: 5,
        width: 100,
        borderRadius: 10,
    },
    titleStyle: {
        textAlign: 'center',
    },
});



{/* <Button
  variant="primary"
  loading={isLoading}
  onPress={handlePress}
  title="Submit"
/> */}



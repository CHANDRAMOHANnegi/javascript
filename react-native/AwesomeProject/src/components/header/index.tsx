/* eslint-disable */

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../button';

export type HeaderProps = {
    title: string
    onBackPress: () => void
    showBackIcon?: boolean
}

const Header = ({ title, onBackPress, showBackIcon = true }: HeaderProps) => {
    return (
        <View style={styles.header}>
            {showBackIcon && <Button text={'<='} onPress={onBackPress} buttonStyle={{ borderRadius: '50%' }} />}
            <View style={styles.titleView}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "gray",
        paddingVertical: 10
    },
    titleView: {
        paddingLeft: 10,
        display: 'flex',
        flex: 1
    },
    text: {
    },
});

/* eslint-disable */

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../button';

export type HeaderProps = {
    title: string
    onBackPress: () => void
}

const Header = ({ title, onBackPress }: HeaderProps) => {
    return (
        <View style={styles.header}>
            <Button text={'<-'} onPress={onBackPress} />
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
    },
    titleView: {
        backgroundColor: 'blue',
        display: 'flex',
        flex: 1
        // alignItems: 'center',
    },
    text: {
        paddingVertical: 10,
        // alignItems: 'center',
    },
});

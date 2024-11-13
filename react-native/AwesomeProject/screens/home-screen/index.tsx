import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HomeScreen = () => {
    return (
        <View style={styles.home}>
            <Text>Home</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    home: { backgroundColor:'red'},
});

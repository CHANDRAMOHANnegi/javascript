/* eslint-disable */

import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../../components/header';
import { useNavigation } from '@react-navigation/native';

const TITLE = "Profile";

const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.home}>
            <Header
                title={TITLE}
                onBackPress={() => { navigation.canGoBack() && navigation.goBack(); }} />
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    home: {},
});

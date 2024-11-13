/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../../components/header';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/button';
import { SCREENS } from '../../navigation/contants';

const TITLE = 'HomeScreen';

const HomeScreen = ({ }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.home}>
            <Header title={TITLE} onBackPress={() => { navigation.goBack(); }} showBackIcon={false} />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
                <Button
                    buttonStyle={{ borderWidth: 1, borderRadius: 50 }}
                    text="Go To TODO-screen"
                    onPress={() => navigation.navigate(SCREENS.TODO_SCREEN as never)}
                />
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        display: 'flex',
        // backgroundColor:'red'
    },
});

import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../../components/header';
import { useNavigation } from '@react-navigation/native';

const TITLE = 'TODO APP';

const TodoScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.home}>
            <Header title={TITLE} onBackPress={() => navigation.goBack()} />
        </View>
    );
};

export default TodoScreen;

const styles = StyleSheet.create({
    home: { backgroundColor: 'gray' },
    headingStyle: {

    },
});

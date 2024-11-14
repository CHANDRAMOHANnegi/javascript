import React, { useRef } from 'react';
import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native';
import { TodoProp } from '../../types';
import Button from '../../../../components/button';

export const Item = ({ item, index = 0, removeTodo }: { item: TodoProp, index: number, removeTodo: (id: number) => void }) => {
    const { id, label, description } = item;

    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: pan.x }]),
            onPanResponderRelease: (_, state) => {
                if (state?.dx > 50) {
                    removeTodo(id);
                }
                pan.extractOffset();
            },
        }),
    ).current;

    return <Animated.View key={id} style={{ ...styles.item, transform: [{ translateX: pan.x }], }} {...panResponder.panHandlers}>
        <View style={styles.text}>
            <Text style={styles.index}>{index + 1}</Text>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.label}>{description}</Text>
        </View>
        <Button text="remove" onPress={() => { removeTodo(id); }} buttonStyle={styles.buttonStyle} />
    </Animated.View>;
};


const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        // marginBottom: 5,
        paddingVertical: 5,
    },
    label: {},
    buttonStyle: {
        width: 100,
    },
    index: {
        width: 10,
    },
    text: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 15,
        //  width: 100,
        // backgroundColor: 'red',
    },
});

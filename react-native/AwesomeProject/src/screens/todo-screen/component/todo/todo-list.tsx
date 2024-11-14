import React, { } from 'react';
import { Item } from './todo';
import { TodoProp } from '../../types';
import { FlatList, View, StyleSheet, } from 'react-native';

export const TodoList = ({ todos, removeTodo }: { todos: TodoProp[], removeTodo: (id: number) => void }) => {

    function renderItem({ item, index }: { item: TodoProp, index: number }) {
        return <Item item={item} index={index} removeTodo={removeTodo} />
    }
    return <View style={styles.listContainer}>
        <FlatList
            data={todos}
            renderItem={renderItem}
            keyExtractor={({ id }) => `${id}`}
        />
    </View>;
};


const styles = StyleSheet.create({
    todo: {
        flex: 1,
        // backgroundColor: 'red'
    },
    headingStyle: {
    },
    item: {
        flexDirection: 'row',
    },
    listContainer: {
        flex: 1,

    },
});

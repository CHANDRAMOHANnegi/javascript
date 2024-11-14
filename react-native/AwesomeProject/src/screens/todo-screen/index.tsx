
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/header';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TITLE, TODOS } from './constants';
import { TodoProp } from './types';
import { TodoList } from './component/todo/todo-list';
import { AddTodoModal } from './component/todo/add-todo-modal';
import Button from '../../components/button';
import AutoCompleteApp from '../../components/auto-complete';

const { height } = Dimensions.get('screen');

const TodoScreen = () => {
    const navigation = useNavigation();
    const routes = useRoute();
    console.log(routes.params);

    const [todos, setTodos] = useState<TodoProp[]>(TODOS);
    const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);

    const addTodo = (todo: TodoProp) => {
        setTodos(t => [...t, todo]);
    };

    const removeTodo = (id: number) => {
        setTodos(t => t.filter(({ id: todoId }) => id !== todoId));
    };

    const handleModal = (bool: boolean) => {
        setIsTodoModalOpen(bool);
    };

    return (
        <ScrollView style={styles.todo} keyboardShouldPersistTaps="always">
            <Header title={TITLE} onBackPress={() => navigation.goBack()} />
            <AutoCompleteApp />
            <TodoList todos={todos} removeTodo={removeTodo} />
            <AddTodoModal addTodo={addTodo}
                visible={isTodoModalOpen}
                setVisible={handleModal} />
            <Button text="+" onPress={() => setIsTodoModalOpen(true)} buttonStyle={styles.addButton} />
        </ScrollView>
    );
};

export default TodoScreen;

const styles = StyleSheet.create({
    todo: {
        flex: 1,
        position: 'relative',
        display: 'flex',
    },
    headingStyle: {
    },
    item: {
        flexDirection: 'row',
    },
    listContainer: {
        flex: 1,
    },
    addButton: {
        width: 50, height: 50,
        borderRadius: '50%',
        justifyContent: 'center',
        position: 'absolute',
        top: height - 120,
        right: 10,
    },
});

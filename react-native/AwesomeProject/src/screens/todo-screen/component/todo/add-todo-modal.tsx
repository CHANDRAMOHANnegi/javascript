/* eslint-disable react-native/no-inline-styles */
import { Modal, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { TodoProp } from '../../types';
import Button from '../../../../components/button';

type TodoModalProp = {
    addTodo: (todo: TodoProp) => void
    visible?: boolean
    setVisible: (val: boolean) => void
}

export const AddTodoModal = ({ addTodo, setVisible, visible }: TodoModalProp) => {
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const [labelRef, descriptionRef] = [useRef<TextInput>(null), useRef<TextInput>(null)];

    const handleAddTodo = () => {
        setError('');
        if (text.trim()) {
            addTodo({ id: Date.now(), label: text, description });
        } else {
            setError('enter valid todo');
        }
        handleDismiss();
    };

    const handleDismiss = () => {
        setText('');
        setDescription('');
        setVisible(false);
    };

    return <Modal style={styles.modal}
        transparent
        visible={visible} onRequestClose={handleDismiss}
        animationType='fade'
    >
        <TouchableOpacity style={styles.overlay} onPressOut={() => { setVisible(false); }}>
            <View style={styles.content}>
                <TextInput onChangeText={setText} value={text}
                    ref={labelRef}
                    placeholder="Enter title"
                    onSubmitEditing={() => {
                        descriptionRef.current?.focus();
                    }}
                    style={{ ...styles.input, borderColor: error ? 'red' : 'gray' }} />
                <TextInput onChangeText={setDescription} value={description}
                    placeholder="Enter description"
                    numberOfLines={5}
                    multiline
                    ref={descriptionRef}
                    style={{ ...styles.input, borderColor: error ? 'red' : 'gray' }} />
                <Button onPress={handleAddTodo} text="+" buttonStyle={{ width: 100, backgroundColor: 'gray', borderRadius: 10, marginBottom: 10 }} />
            </View>
        </TouchableOpacity>
    </Modal>;
};


const styles = StyleSheet.create({
    modal: {
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    content: {
        height: 200,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'flex-end',
    },
    input: {
        borderWidth: 1,
        borderColor: 'red',
        width: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
});

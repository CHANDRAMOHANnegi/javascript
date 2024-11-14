
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DropdownMenu } from './dropdown-menu'; // Adjust the import path based on your project structure
import { MenuOption } from './menu-option';

export const AutoCompleteApp = () => {
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>
            <DropdownMenu
                visible={visible}
                handleOpen={() => setVisible(true)}
                handleClose={() => setVisible(false)}
                trigger={
                    <View style={styles.triggerStyle}>
                        <Text style={styles.triggerText}>Actions</Text>
                    </View>
                }
            >
                <MenuOption onSelect={() => {
                    setVisible(false);
                }}>
                    <Text>View Details</Text>
                </MenuOption>
                <MenuOption onSelect={() => {
                    setVisible(false);
                }}>
                    <Text>Delete</Text>
                </MenuOption>
            </DropdownMenu>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    triggerStyle: {
        height: 40,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    triggerText: {
        fontSize: 16,
    },
});

export default AutoCompleteApp;

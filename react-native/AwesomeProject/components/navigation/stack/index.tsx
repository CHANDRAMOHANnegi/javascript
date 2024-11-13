// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../../../screens/profile-screen';
import SignInScreen from '../../../screens/sign-in-screen';
import SignUpScreen from '../../../screens/sign-up-screen';
import HelpScreen from '../../../screens/help-screen';
import InviteScreen from '../../../screens/invite-screen';
import { HomeTabs } from '../tabs';
import TodoScreen from '../../../screens/todo-screen';
import { SCREENS } from '../contants';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
    const isLoggedIn = true
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                {isLoggedIn ? (
                    // Screens for logged in users
                    <Stack.Group>
                        <Stack.Screen
                            name={SCREENS.HOME_SCREEN}
                            component={HomeTabs}
                        />
                        <Stack.Screen name={SCREENS.PROFILE_SCREEN} component={ProfileScreen} />
                        <Stack.Screen name={SCREENS.TODO_SCREEN} component={TodoScreen} />
                    </Stack.Group>
                ) : (
                    // Auth screens
                    <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                    </Stack.Group>
                )}
                {/* Common modal screens */}
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen name="Help" component={HelpScreen} />
                    <Stack.Screen name="Invite" component={InviteScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};


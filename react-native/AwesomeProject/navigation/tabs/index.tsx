import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home-screen';
import ProfileScreen from '../../screens/profile-screen';
import { SCREENS } from '../contants';

const Tab = createBottomTabNavigator();

export function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen name={SCREENS.HOME_SCREEN} component={HomeScreen} options={{}} />
            <Tab.Screen name={SCREENS.PROFILE_SCREEN} component={ProfileScreen} />
        </Tab.Navigator>
    );
}

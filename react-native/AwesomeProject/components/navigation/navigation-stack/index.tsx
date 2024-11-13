import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../../screens/home-screen';
import ProfileScreen from '../../../screens/profile-screen';
import { createStaticNavigation } from '@react-navigation/native';

const RootStack = createNativeStackNavigator({
    screens: {
        Home: HomeScreen,
        Profile:ProfileScreen,
    },
});

export const AppNavigation = createStaticNavigation(RootStack);

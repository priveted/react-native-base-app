import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import { ScreenHome } from '../screens/home';
import { ScreenTest } from '../screens/test';
import { ScreenTestStack } from '../screens/test-stack';

//import { Icon } from 'react-native-elements';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Init = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarLabelStyle: { fontSize: 14, fontWeight: "900" }, tabBarActiveTintColor: "#000", tabBarInactiveTintColor: 'rgba(153, 153, 153, 0.4)' }} >

            <Tab.Screen name="home"
                component={ScreenHome}
                options={
                    {
                        headerShown: false, title: "HOME_SCREEN", tabBarIcon: ({ focused, color, size }) => {
                            return <Text>Home</Text>;
                        }
                    }
                }
            />

            <Tab.Screen name="test"
                component={ScreenTest}
                options={
                    {
                        headerShown: false, title: "TEST_SCREEN", tabBarIcon: ({ focused, color, size }) => {
                            return <Text>Test</Text>;
                        }
                    }
                }
            />
        </Tab.Navigator >
    );
}


export const Navigation = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen name="index" component={Init} options={{ headerShown: false }} />
                    <Stack.Screen name="test_stack" component={ScreenTestStack}options={({ route }) => ({ title: "Title demo stack" })}/>
                </Stack.Navigator >
            </NavigationContainer>
        </Fragment>
    )
}
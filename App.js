import 'react-native-gesture-handler'

import React, { Fragment } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//screens
import Home from './screens/Home'
import About from './screens/About'
import ReviewDetails from './screens/ReviewDetails'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
    return(
        <Fragment>
            
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home" component={Home}
                        options={{
                            title: 'Home',
                            headerStyle:{
                                backgroundColor: 'orange'
                            }
                            }}>
                    </Stack.Screen>
                    <Stack.Screen
                        name="About" component={About}
                        options={{
                            title: 'About us',
                            headerStyle:{
                                backgroundColor: 'orange'
                            }
                            }}>
                    </Stack.Screen>
                    <Stack.Screen
                        name="ReviewDetails" component={ReviewDetails}
                        options={{
                            title: 'Review details',
                            headerStyle:{
                                backgroundColor: 'orange'
                            }
                            }}>
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
            
            {/*
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen
                        name="Home" component={Home}>
                    </Drawer.Screen>
                    <Drawer.Screen
                        name="About" component={About}>
                    </Drawer.Screen>
                </Drawer.Navigator>
            </NavigationContainer>
            */}
            
        </Fragment>
    )
}

export default App
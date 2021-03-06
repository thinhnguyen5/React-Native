import React, { Component } from 'react';
import { View, Text, Navigator} from 'react-native';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Authentication from './components/Authentication/Authentication';
import SignIn from './components/Authentication/SignIn';
import Main from './components/Main/Main';
import AddPost from './components/AddPost/AddPost';
import { Ionicons } from 'react-native-vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './components/Main/Details';

StatusBar.setHidden(true);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default class App extends Component {

    render (){
      createMainStack = () =>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} 
            options={{headerShown: false}}
          />
          <Stack.Screen name="Details" component={Details} 
            options={{headerShown: false}}
          />
          <Stack.Screen name="Authentication" component={Authentication} 
          />
          <Stack.Screen name="AddPost" component={AddPost} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>

        return (
            <NavigationContainer> 
              <Tab.Navigator>
                <Tab.Screen 
                  name="Main" 
                  children={createMainStack}
                  options={{ 
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="ios-home" color={color} size={size} />)
                  }}
                />
                <Tab.Screen 
                  name="Authentication" 
                  component={Authentication} 
                  options={{ 
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="person-outline" color={color} size={size} />)
                    }}
                />
                <Tab.Screen 
                  name="AddPost" 
                  component={AddPost}  
                  options={{ 
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="add-circle-outline" color={color} size={size} />)
                    }}
                />  
              </Tab.Navigator>
            </NavigationContainer>
          )
    };
}



  



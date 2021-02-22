import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Authentication from './components/Authentication/Authentication';
import ChangeInfo from './components/ChangeInfo/ChangeInfo';
import Main from './components/Main/Main';
import OrderHistory from './components/OrderHistory/OrderHistory';
import AddPost from './components/AddPost/AddPost';
import { Ionicons } from 'react-native-vector-icons';

StatusBar.setHidden(true);

const Tab = createBottomTabNavigator();

export default class App extends Component {

    render (){
        return (
            <NavigationContainer> 
              <Tab.Navigator>
                 <Tab.Screen 
                  name="Main" 
                  component={Main} 
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
                  name="ChangeInfo" 
                  component={ChangeInfo} 
                  options={{ 
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="settings-outline" color={color} size={size} />)
                    }}
                />
                <Tab.Screen 
                  name="OrderHistory" 
                  component={OrderHistory}  
                  options={{ 
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="shirt-outline" color={color} size={size} />)
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



  



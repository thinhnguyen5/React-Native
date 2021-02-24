import React, { Component } from 'react';
import { View, Text, Navigator} from 'react-native';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Authentication from './components/Authentication/Authentication';
import Main from './components/Main/Main';
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
                  }}>
                </Tab.Screen>
                
                <Tab.Screen 
                  name="Profile" 
                  options={{ 
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="person-outline" color={color} size={size} />)
                    }}>
                      {props => <Authentication
                      {...props}
                      apiURI='https://shopping-api-app.herokuapp.com/users'
                      userLogin={this.userLogin}
                      successScreen="Profile"
                      token={this.state.token}
                      user={this.state.user}
                      userLogout={this.userLogout}
                      products={this.state.products}
                    />}
                </Tab.Screen>
               
                <Tab.Screen 
                  name="AddPost" 
                  options={{ 
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="add-circle-outline" color={color} size={size} />)
                    }}>
                      {props => <AddPost
                      {...props}
                      apiURI='https://shopping-api-app.herokuapp.com/products'
                      userLogin={this.userLogin}
                      successScreen="postProduct"
                      token={this.state.token}
                      user={this.state.user}
                    />}
                </Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
          )
    };
}



  



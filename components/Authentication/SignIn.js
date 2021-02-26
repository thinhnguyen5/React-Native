import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import saveToken from '../../api/saveToken';


export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            myURL: 'https://shopping-api-app.herokuapp.com/users',
            tam: []
        };
    }

    /////////////Fetch api
    componentDidMount() {
        fetch(this.state.myURL)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                tam: responseJson
            })
            console.log("array tam: ",this.state.tam);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    onSignIn() {
        const { username, password } = this.state;
        if(username.length == 0 | password.length == 0) {
            alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
        }
        else {
            alert("login successful!");
            
        }
       
        
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        const { username, password } = this.state;
        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your username"
                    value={username}
                    onChangeText={text => this.setState({ username: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry
                />
                <TouchableOpacity style={bigButton} onPress={this.onSignIn.bind(this)}>
                    <Text style={buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#000000',
        fontWeight: '400'
    }
});

import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import register from '../../api/register';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            rePassword: ''
        };
    }

    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign up successfully',
            [
                { text: 'OK', onPress: this.props.gotoSignIn() }
            ],
            { cancelable: false }
        );
    }

    registerUser() {
        const { name, password } = this.state;
        register(name, password)
        .then(res => {
            if (res === 'Success') return this.onSuccess();
            this.onFail();
        });
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        return (
            <View>
                <TextInput 
                    style={inputStyle} 
                    placeholder="Enter your name" 
                    value={this.state.name}
                    onChangeText={text => this.setState({ name: text })}
                />
                <TextInput 
                    style={inputStyle} 
                    placeholder="Enter your password" 
                    value={this.state.password}
                    secureTextEntry
                    onChangeText={text => this.setState({ password: text })}
                />
                <TextInput 
                    style={inputStyle} 
                    placeholder="Re-enter your password" 
                    value={this.state.rePassword}
                    secureTextEntry
                    onChangeText={text => this.setState({ rePassword: text })}
                />
                <TouchableOpacity style={bigButton} onPress={this.registerUser.bind(this)}>
                    <Text style={buttonText}>SIGN UP NOW</Text>
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

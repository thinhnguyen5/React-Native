import React, { Component, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native';
import register from '../../api/register';

const SignUp = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [rePassword, setrePassword] = useState('');
    const registerUser = () => {
        if(password != rePassword) {
            alert("it is not the same!");
        }
        else {
            alert("register successful!");
        }
    }
    return (
        <View>
                <TextInput 
                    style={styles.inputStyle} 
                    placeholder="Enter your name" 
                    value={username}
                    onChangeText={(txtUsername) => setusername(txtUsername)}
                />
                <TextInput 
                    style={styles.inputStyle} 
                    placeholder="Enter your password" 
                    value={password}
                    secureTextEntry
                    onChangeText={(txtPassword) => setpassword(txtPassword)}
                />
                <TextInput 
                    style={styles.inputStyle} 
                    placeholder="Re-enter your password" 
                    value={rePassword}
                    secureTextEntry
                    onChangeText={(txtRepassword) => setrePassword(txtRepassword)}
                />
                <TouchableOpacity style={styles.bigButton} onPress={() => registerUser()}>
                    <Text style={styles.buttonText}>SIGN UP NOW</Text>
                </TouchableOpacity>
                {/* 
                <Button title="test" 
                    style={styles.bigButton}
                    onPress= {() => this.registerUser()}
                />
                */}
                
            </View>
    )
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
        borderRadius: 50,
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

export default SignUp;
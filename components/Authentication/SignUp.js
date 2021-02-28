import axios from 'axios';
import React, { Component, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native';


const SignUp = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [rePassword, setrePassword] = useState('');
    const registerUser = () => {
        
        const req = {
            "username": username,
            "password": password
        }
        axios.post("https://shopping-api-app.herokuapp.com/users/register", req)
        .then(
            res => {
                console.log(res);
                
            },
            err => {
                alert("Username or password is wrong");
            }
        )
        if(password != rePassword) {
            alert("It is not the same!");
        }
        else {
            alert("Register successful!");
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


    
//     const req = {
//       title: title,
//       category: category,
//       images: images,
//       price: price,
//       brand: brand,
//       description: description,
//       dateofposting: dateofposting,
//       location: location,
//       Deliverytype: Deliverytype,
//       username: username,
//       phone: phone,
//   }
//   axios.post("https://shopping-api-app.herokuapp.com/products")
//   .then(
//     res => {
//         console.log(res);
//     }
//   )
// }
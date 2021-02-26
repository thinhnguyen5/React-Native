import axios from 'axios';
import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import saveToken from '../../api/saveToken';


// export default class SignIn extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: ''
//         };
//     }


//     onSignIn() {
//         const { username, password } = this.state;
//         const req = {
//                         "username": username,
//                         "password": password
//                     }
//                     axios.get("https://shopping-api-app.herokuapp.com/users/login", req)
//                     .then(
//                         res => {
//                             this.props.navigation.navigate();
//                         }
//                     )
//                     if(username.length == 0 | password.length == 0) {
//                         alert('Wrong Input!, Username or password field cannot be empty.');
//                     }
//                     else {
//                         alert("login successful!");
//                     }
//                 }
            
        
    

//     render() {
//         const { inputStyle, bigButton, buttonText } = styles;
//         const { username, password } = this.state;
//         return (
//             <View>
//                 <TextInput
//                     style={inputStyle}
//                     placeholder="Enter your username"
//                     value={username}
//                     onChangeText={text => this.setState({ username: text })}
//                 />
//                 <TextInput
//                     style={inputStyle}
//                     placeholder="Enter your password"
//                     value={password}
//                     onChangeText={text => this.setState({ password: text })}
//                     secureTextEntry
//                 />
//                 <TouchableOpacity style={bigButton} onPress={this.onSignIn.bind(this)}>
//                     <Text style={buttonText}>SIGN IN NOW</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }
const SignIn = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    
    const onSignIn = () => {
        const req = {
            "username": username,
            "password": password
        }
        axios.get("https://shopping-api-app.herokuapp.com/users/login", req)
        .then(
            res => {
                console.log(res);
            }
        )
        if(username.length == 0 | password.length == 0) {
            alert('Wrong Input!, Username or password field cannot be empty.');
        }
        else {
            alert("login successful!");
        }
    }

    
    return (
        <View>
//              <TextInput 
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
                <TouchableOpacity style={styles.bigButton} onPress={() => onSignIn()}>
                    <Text style={styles.buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
        </View>
    );
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
        // fontFamily: 'Avenir',
        color: '#000000',
        fontWeight: '400'
    }
});


export default SignIn;
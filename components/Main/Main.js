import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import profileIcon from '../../media/temp/profile.png';
import saveToken from '../../api/saveToken';
import items from '../../data';
import { FlatList, ScrollView, TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import FontAwesome5 from '@expo/vector-icons';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { user: null,
            productOrigin: items,
            products: [],
            strSearch: ''
        };
        global.onSignIn = this.onSignIn.bind(this);
    }
    onSignIn(user) {
        this.setState({ user });
    }

    onSignOut() {
        this.setState({ user: null });
        saveToken('');
    }

    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }
    gotoAddPost() {
        const { navigator } = this.props;
        navigator.push({ name: 'ADD_POST'});
    }

    handleSearch(txtSearch) {
        // console.log(txtSearch);
        let {productOrigin} = this.state;
        let tempProduct = [];
        if(txtSearch.length > 0) {
            tempProduct = productOrigin.filter(p => p.title.match(txtSearch))
            if(tempProduct) {
                this.setState({
                    products: tempProduct
                })
            }
            else {
                alert("No Results");
            }
        }
        else {
            this.setState({
                products: productOrigin
            })
            console.log("Old Array: ", this.state.products);
        }
    }
    
    render() {
        // console.log(this.state.productOrigin);
        const { 
            container, profile, btnStyle, btnText, 
            btnSignInStyle, btnTextSignIn, loginContainer,
            username
        } = styles;
        const { user } = this.state;
        const logoutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={btnStyle} onPress={this.gotoAuthentication.bind(this)}>
                    <Text style={btnText}>Sign In</Text>
                </TouchableOpacity>
                
            </View>
        );
        
        const loginJSX = (
            <View style={loginContainer}>
                <Text style={username}>{user ? user.name : ''}</Text>
                <View>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.gotoAddPost.bind(this)}>
                        <Text style={btnTextSignIn}>AddPost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.onSignOut.bind(this)}>
                        <Text style={btnTextSignIn}>Sign out</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );
        const mainJSX = this.state.user ? loginJSX : logoutJSX;

        //get products//
        const Card = ({product}) => {
            return (
                <TouchableHighlight
                    // onPress={(navigation) => navigation.navigate('Details', product)}
                    onPress={() => alert("Main Page")}
                >
                    <View style={styles.ItemContainer}>
                        <View>
                            <Image
                                style={{
                                    height: 130, width: 250,
                                    margin: 5, resizeMode: 'stretch'
                                }}
                                source={{ uri: product.image[0] }}
                            />
                        </View>
                        <View>
                            <Text>{product.title}</Text>
                        </View>                    
                    </View>
                </TouchableHighlight>
            )
        }
        return (
            <ScrollView>
                <View style={container}>
                    {/*<Image source={profileIcon} style={profile} />
        { mainJSX } */}
                    <View style={styles.SearchContainer} >
                        <TextInput style={styles.InputContainer}
                            placeholder="what are you looking for?"
                            defaultValue= {this.state.strSearch}
                            onChangeText= {(txt) => this.handleSearch(txt)}
                        />
                    </View>
                    <FlatList 
                        showsVerticalScrollIndicator={false}
                        numColumns={1}
                        data={this.state.products}
                        renderItem={({ item }) => <Card product={item} />}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(201, 76, 76, 0.3)',
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center'
    },
    profile: {
        width: 120,
        height: 120,
        borderRadius: 5,
        marginVertical: 100
    },
    btnStyle: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal:100
    },
    btnText: {
        color: '#000000',
        fontFamily: 'Avenir', 
        fontSize: 20
    },
    btnSignInStyle: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 200,
        marginBottom: 10,
        justifyContent: 'center',
        paddingLeft: 10
    },
    btnTextSignIn: {
        color: '#34B089',
        fontSize: 15
    },
    loginContainer: {
        flex: 1, 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    username: {
        color: '#fff', 
        fontFamily: 'Avenir', 
        fontSize: 15
    },
    SearchContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 20,
        margin: 5,
        alignItems: 'center',
        height: 50
    },
    InputContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#7F7F7F',
        borderRadius: 5,
        marginRight: 5,
        padding: 3,
        fontSize: 18
    },
    ItemContainer: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default Main;
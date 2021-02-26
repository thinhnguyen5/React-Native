import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import profileIcon from '../../media/temp/profile.png';
import saveToken from '../../api/saveToken';
import items from '../../data';
import { FlatList, ScrollView, TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import FontAwesome5 from '@expo/vector-icons';
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { user: null,
            productOrigin: [],
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

    /////////////Fetch api
    componentDidMount() {
        const myURL = "https://shopping-api-app.herokuapp.com/products"
        axios.get(myURL)
        .then(response => {
            this.setState({
                productOrigin: response.data
            })
            console.log("fetch data: ", this.state.productOrigin);
        })
        .catch(error => {
            console.log(error);
        })
    }

    /////////////Search
    handleSearch(txt) {
        this.setState({
            strSearch: txt
        })
    }
    
    render() {
        let {productOrigin} = this.state;
        let products = [];
        let {strSearch} = this.state;
        products = productOrigin.filter(p => p.title.match(strSearch));
        // console.log("this is product: ", products);
        
        //get products//
        const Card = ({product}) => {
            return (
                <TouchableHighlight
                    onPress={(navigation) => this.props.navigation.navigate('Details', product)}
                    // onPress={() => alert("Main Page")}
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
                <View style={styles.container}>
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
                        data={products}
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
        paddingHorizontal:100,
        marginBottom: 30
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
        width: 300,
        marginBottom: 10,
        justifyContent: 'center',
        paddingLeft: 10
    },
    btnTextSignIn: {
        color: '#000000',
        fontSize: 15
    },
    loginContainer: {
        flex: 1, 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    username: {
        color: '#000000', 
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
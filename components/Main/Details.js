import React, { useState } from 'react';
import { Image, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'react-native-gesture-handler';

const Details = ({navigation, route}) => {
    const item = route.params;
    console.log(item);
    const [logged, setlogged] = useState(true);

    const handleDelete = (id) => {
        alert(id);
    }

    const ListImages = () => {
        return (
            <ScrollView horizontal
                showsHorizontalScrollIndicator={false}>
                {item.image.map((i, index) => {
                    return (
                        <Image source={{ uri: i }}
                            style={{
                                height: 200, width: 300,
                                resizeMode: 'contain', margin: 10
                            }}
                            key={index}
                        />
                    )
                })}
            </ScrollView>
        );
    };

    return (
        <SafeAreaView style={{ backgroundColor: Colors.white }}>
            <View style={styles.header}>
                <FontAwesome5 name="backspace" size={28}
                    onPress={navigation.goBack}
                    style={{ marginRight: 5 }}
                />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ProductScreen</Text>
            </View>

            <ScrollView>
                <View>
                    <ListImages />
                </View>
                <View style={styles.details}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                            {item.title}
                        </Text>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Price: {item.price} $
                        </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Brand: {item.brand}
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Poster: {item.username}
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Phone: {item.phone}
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Location: {item.location}
                    </Text>
                    <View style={{ marginTop: 70 }}>
                        <Button title="Buy" 
                        disabled = {logged === false}
                            onPress= {() => handleDelete(item.id)}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    details: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 60,
        backgroundColor: '#76a6ef',
        // borderTopRightRadius: 40,
        // borderTopLeftRadius: 40
    }
})

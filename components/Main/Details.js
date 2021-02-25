import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Details = ({navigation, route}) => {
    const item = route.params;
    console.log(item);
    return (
        <View>
            <Text>Details Page</Text>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({})

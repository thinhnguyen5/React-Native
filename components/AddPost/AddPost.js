import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native';
import { PinchGestureHandler, ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState([]);
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [dateOfPosting, setdateOfPosting] = useState('');
  const [location, setLocation] = useState('');
  const [DeliveryType, setDeliveryType] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const Object = {
    title: title,
    category: category,
    image: image,
    price: price,
    brand: brand,
    description: description,
    dateOfPosting: dateOfPosting,
    location: location,
    DeliveryType: DeliveryType,
    username: username,
    phone: phone
  };
  const postPressed = () => {
      axios.post('https://shopping-api-app.herokuapp.com/products/addproduct', Object)
      .then(res => {
        console.log(res);
        alert("Create successful");
      })
      .catch(err => {
        console.log(err);
        console.log(Object);
      })
  }


  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topBar}>
        <Text style={styles.header}>Create New Item</Text>
      </View>
      <ScrollView style={{ flex: 5 }}>
        <View style={styles.screen}>

          <View style={styles.inputBox}>
            <Text style={styles.text}>Title</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={value => setTitle(value)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.text}>Category</Text>
            <TextInput
              style={styles.input}
              value={category}
              onChangeText={value => setCategory(value)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.text}>Images</Text>
            <TextInput
              style={styles.input}
              value={image}
              onChangeText={value => setImage(value)}
            />

            {/* <TouchableOpacity onPress={() => openImagePickerAsync()} style={{ borderWidth: 1, borderColor: 'black' }}>
                <Text>Pick a photo</Text>
              </TouchableOpacity> */}
          </View>
          {/* {picture()} */}
          <View style={styles.inputBox}></View>
          <View style={styles.inputBox}>
            <Text style={styles.text}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={value => setPrice(value)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.text}>Brand</Text>
            <TextInput
              style={styles.input}
              value={brand}
              onChangeText={value => setBrand(value)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.text}>Description</Text>
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={value => setDescription(value)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.text}>Date Of Posting</Text>
            <TextInput
              style={styles.input}
              value={dateOfPosting}
              onChangeText={value => setdateOfPosting(value)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.text}>Location</Text>
            <TextInput
              style={styles.input}
              value={location}
              onChangeText={value => setLocation(value)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.text}>Delivery</Text>
            <TextInput
              style={styles.input}
              value={DeliveryType}
              onChangeText={value => setDeliveryType(value)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.text}>User Name</Text>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={value => setUsername(value)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.text}>Phone Number</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={value => setPhone(value)}
            />
          </View>
          <TouchableOpacity onPress={() => postPressed()}>
            <View style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Add post</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  inputBox: {
    height: 70,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 35
  },
  topBar: {
    backgroundColor: 'rgba(201, 76, 76, 0.3)'
  },
  screen: {
    backgroundColor: 'rgb(255, 255, 255)',
    flex: 6,
    paddingTop: 20
  },
  header: {
    fontSize: 40,
    marginTop: 20,
    color: 'white',
    alignSelf: 'center'
  },
  text: {
    fontWeight: '500',
    fontSize: 15,
    color: 'black'
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: 'rgba(201, 76, 76, 0.3)',
    textAlign: 'left',
    fontSize: 18,
    marginTop: 0,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#9399ad'
  },
  primaryButton: {
    backgroundColor: 'rgba(201, 76, 76, 0.3)',
    height: 60,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center'
  },
  primaryButtonText: {
    color: 'black',
    fontSize: 20

  }
});
export default AddPost;

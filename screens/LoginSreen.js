import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import LinkingConfiguration from '../navigation/LinkingConfiguration';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';

import { DataStore } from '@aws-amplify/datastore';
import { User } from '../models';
const Stack = createStackNavigator();

const LoginScreen = props => {
// function LoginScreen({navigation}) {

  let [UserPhone, setUserPhone] = useState('');
  let [userPassword, setUserPassword] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');

  const handleSubmitPress = () => {
    setErrortext('');
    if (!UserPhone) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    var dataToSend = { username: UserPhone, password: userPassword };
    Auth.signIn(dataToSend)
    .then(async data => {
        console.log(data);
        await DataStore.save(
          new User({
              cognitoId: data.username,
              firstName: data.attributes['phone_number'],
              lastName: data.attributes['phone_number']
          })
        );
        Auth.currentAuthenticatedUser({
          bypassCache: false  
        }).then(
          (user)=>{
            console.log(user);
          })
        .catch(err => console.log(err));
        setLoading(false);
        props.navigation.navigate('Navigator')
    }).catch(error => {
        setLoading(false);
        setErrortext(error.message);
        console.error(error);
    });
  };

  return (
    <View style={styles.mainBody}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ marginTop: 100 }}>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: 'center' }}>
                
                <View>
                    <Text style={styles.header}>LOGIN</Text>
                </View>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPhone => setUserPhone(UserPhone)}
                underlineColorAndroid="#FFFFFF"
                placeholder="Enter your phone number" //dummy@abc.com
                placeholderTextColor="#828483"
                autoCapitalize="none"
                keyboardType="phone-pad"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                underlineColorAndroid="#FFFFFF"
                placeholder="Enter Password" //12345
                placeholderTextColor="#828483"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => props.navigation.navigate('Register')}>
              If you don't have an account, please register first
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        marginBottom : 30,
        fontWeight: 'bold',
        color: '#3AB397'
    },
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        // color: '#828483',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: '#3AB397',
        borderWidth: 0,
        // color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 50,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 40,
        marginBottom: 20,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        height: 50,
        // color: '#828483',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        // borderColor: 'white',
        borderColor: '#F4F8F7',
        backgroundColor :'#F4F8F7'
    },
    registerTextStyle: {
        // color: '#FFFFFF',
        color: '#828483',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});
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

const CodeScreen = props => {
  let [UserCode, setUserCode] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');

  const handleSubmitPress = () => {
    setErrortext('');
    if (!UserCode) {
      alert('Please fill Code');
      return;
    }
    setLoading(true);
    Auth.confirmSignUp(props.route.params.username,UserCode)
    .then(async data => {
        setLoading(false);
        console.log(data);
        const store = await DataStore.save(
          new User({
              cognitoId: props.route.params.id,
              firstName: props.route.params.username,
              lastName: props.route.params.username
          })
        );
        props.navigation.navigate('Login')
    }).catch(error => {
        //Hide Loader
        setLoading(false);
        setErrortext(error.message);
        console.error(error);
    });
  };
  const resend = () => {
    Auth.resendSignUp(props.route.params.username)
  };

  return (
    <View style={styles.mainBody}>
      {/* <Loader loading={loading} /> */}
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ marginTop: 100 }}>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: 'center' }}>
                <View>
                    <Text style={styles.header}>CHECK CODE</Text>
                </View>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserCode => setUserCode(UserCode)}
                underlineColorAndroid="#FFFFFF"
                placeholder="Enter your verification code" //dummy@abc.com
                placeholderTextColor="#828483"
                autoCapitalize="none"
                keyboardType="phone-pad"
                blurOnSubmit={false}
              />
            </View>
            
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Validate</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onClick={resend}>
              Resend code
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default CodeScreen;

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
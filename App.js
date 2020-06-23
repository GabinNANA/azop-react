import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
// import Amplify, { Auth } from 'aws-amplify';
import Amplify from '@aws-amplify/core';
import awsConfig from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native'
import LoginScreen from './screens/LoginSreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import CodeScreen from './screens/CodeScreen';
import { Auth } from 'aws-amplify';

Amplify.configure(awsConfig);


const Stack = createStackNavigator();
const username = '';
function isAuthenticated(){
  Auth.currentAuthenticatedUser({
    bypassCache: false  
  }).then((user) => {
    username= user.username;
    // console.log(username);
  })
  .catch(err => console.log(err));
}

export default function App(props) {
  const isLoadingComplete = useCachedResources();
 
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            {username !='' ? (
              <>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
              <Stack.Screen name="Home" component={HomeScreen} />
              </>
            ) : (
              <>
              <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login',headerShown: false}}/>
              <Stack.Screen name="Register" component={RegisterScreen} options={{title: 'Register',headerShown: false}}/>
              <Stack.Screen name="Code" component={CodeScreen} options={{title: 'Code',headerShown: false}}/>
              <Stack.Screen name="Navigator" component={BottomTabNavigator} options={{headerLeft: null}} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
//         <NavigationContainer linking={LinkingConfiguration}>
//           <Stack.Navigator>
//             <Stack.Screen name="Login" component={LoginScreen} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </View>
//     );
//   }
// }

// export default withAuthenticator(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

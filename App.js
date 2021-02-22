//import 'react-native-gesture-handler'
////import { StatusBar } from 'expo-status-bar'
//import React, { Component } from 'react'
//import { NavigationContainer } from '@react-navigation/native'
//import { createStackNavigator } from '@react-navigation/stack'
//import Login from './screens/login'
//import Home from './screens/home'
//import Sign from './screens/sign'
//import Test from './screens/test'
//const Stack = createStackNavigator()
//
//
//class App extends Component  {
//render () {
//  return (
//    <NavigationContainer>
//        <Stack.Navigator>
//            <Stack.Screen name="Test" component={Test} />
//            //<Stack.Screen name="Login" component={Login} />
//            //<Stack.Screen name="Sign" component={Sign} />
//            //<Stack.Screen name="Home" component={Home} />
//         </Stack.Navigator>
//
//    </NavigationContainer>
//  );
//  }
//  }
//export default App
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home'
import Signup from './screens/sign'
import Login from './screens/login'
//import Map from './screens/map'
//import Menu from './screens/menu'

const Stack = createStackNavigator(); // -Creates a stack variable for navigating through pages


class App extends Component {
 render(){



   return (
     <NavigationContainer>
      <Stack.Navigator>
           <Stack.Screen name= "Log In" component={Login} />
           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="Sign Up" component={Signup} />


      </Stack.Navigator>

     </NavigationContainer>
   );
 }
}

export default App


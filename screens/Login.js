//import { StatusBar } from 'expo-status-bar';
//import React, { Component }from 'react';
//import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//
//
//class Login extends Component () {
//constructor(props){
//super(props);
//}
//render() {
//const navigation = this.props.navigation;
//  return (
//
//  <View style={{padding:80}}>
//    <View>
//    <Text style={write.title}> CoffiDa </Text>
//        <View style={styles.boxSpacing}>
//            <TextInput
//            placeholder="Username"
//            style={styles.txtBox}
//             />
//         </View>
//        <View style={styles.boxSpacing}>
//            <TextInput
//            placeholder="Password"
//            style={styles.txtBox}
//             />
//         </View>
//         <View style={styles.boxSpacing}>
//            <Button
//             title="Login"
//             onPress={() => navigation.navigate('Home')}
//             />
//         </View>
//
//         <View style={styles.boxSpacing}>
//                     <Button
//                      title="Sign Up"
//                      onPress={() => navigation.navigate('Sign')}
//                      />
//                  </View>
//           <Text style={{padding:30}}> No account? Sign up here! </Text>
//    </View>
//   </View>
//
//);
//}
//}
//const styles = StyleSheet.create({
//       txtBox: {
//            borderColor:'black', borderWidth:1, padding:8
//       }
//       ,boxSpacing: {
//                   padding:8
//              }
//
//     });
//const write = StyleSheet.create({
//  title: {
//    textAlign: "center",
//    fontSize: 25,
//    padding:20}
//  });
//
//  export default Login
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


class Login extends Component{
  render(){

    const navigation = this.props.navigation;

    return(
        <View>
        <Text style={write.title}> CoffiDa </Text>
                <View style={styles.boxSpacing}>
                    <TextInput
                    placeholder="Email"
                    style={styles.txtBox}
                     />
                 </View>
                  <View style={styles.boxSpacing}>
                    <TextInput
                    placeholder="Password"
                    style={styles.txtBox}
                     />
                 </View>

          <View style={styles.boxSpacing}>
          <Button title="Sign up" onPress={() => { navigation.navigate('Sign Up');}}
          />
          <Button title="Log in" onPress={() => { navigation.navigate('Home');}}
          />
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
       txtBox: {
            borderColor:'black', borderWidth:1, padding:8
       }
       ,boxSpacing: {
                   padding:8
              }

     });
const write = StyleSheet.create({
  title :{
    textAlign: "center",
    fontSize: 25,
    padding:20}
  });
export default Login;
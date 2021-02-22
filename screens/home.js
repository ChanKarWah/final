//import { StatusBar } from 'expo-status-bar';
//import React, { Component } from 'react';
//import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//
//class Home extends Component() {
//render () {
//const navigation = this.props.navigation;
//  return (
//  <View style={{padding:0}}>
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
//            <Button title="Login"/>
//         </View>
//
//         <View style={styles.boxSpacing}>
//                     <Button title="Sign Up"/>
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
//export default Home
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


class Home extends Component{
  render(){

    const navigation = this.props.navigation;

    return(
        <View>
          <Text>Home Screen</Text>
        </View>
    );
  }
}

export default Home;

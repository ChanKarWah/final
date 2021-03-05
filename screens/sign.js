//import { StatusBar } from 'expo-status-bar';
//import React, { Component }from 'react';
//import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//
//class Sign extends Component() {
//render() {
//const navigation = this.props.navigation;
//  return (
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
//  export default Sign
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


class Sign extends Component{
constructor(props){
        super(props);

        this.state = {          //setting up state so that we have somewhere to store the data
            isLoading: true,
            userData: [],
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
        }
  render(){

    const navigation = this.props.navigation;

    return(
        <View>
          <Text>Signup</Text>
          <View style={styles.boxSpacing}>
            <TextInput
            placeholder="First Name"
            onChangeText={(first_name) => this.setState({first_name})}
            value={this.state.first_name}
            style={styles.txtBox}
            />
          </View>
          <View style={styles.boxSpacing}>
             <TextInput
             placeholder="Last Name"
             onChangeText={(last_name) => this.setState({last_name})}
             value={this.state.last_name}
             style={styles.txtBox}
             />
          </View>
          <View style={styles.boxSpacing}>
             <TextInput
             placeholder="Email"
             onChangeText={(email) => this.setState({email})}
             value={this.state.email}
             style={styles.txtBox}
             />
          </View>
          <View style={styles.boxSpacing}>
             <TextInput
             placeholder="Password"
             onChangeText={(password) => this.setState({password})}
             value={this.state.password}
             style={styles.txtBox}
             />
          </View>
          <View style={styles.boxSpacing}>
              <Button title="Sign up" onPress={() => this.addItem()}
               />

           </View>
        </View>
    );
  }
  addItem(){
          let to_send = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password,
          };

          return fetch("http://10.0.2.2:3333/api/1.0.0/user",{
          method: 'post',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(to_send)
          })
          .then((response) => {
          this.getData();
          })
          .catch((error) => {
          console.log(error);
          })
          }
  getData(){              //retrieve the data and store it in the state object
              return fetch("http://10.0.2.2:3333/api/1.0.0/user")    //returns a promise, 10.0.2.2 because using emulator, instead send request to host machine
              .then((response) => response.json())    //convert it into json
              .then((responseJson) => {
              this.setState({
                  isLoading:false,    //no need to render loading
                  userData: responseJson  //storing the json in the state to later rendering
              })
            })

            .catch((error) => {       //error handling, logging out for now
              console.log(error);
            });
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

export default Sign;
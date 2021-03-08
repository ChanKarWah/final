import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, AsyncStorage, TouchableOpacity, StatusBar, Image } from 'react-native';
import logo from './images/logo.png'
class Login extends Component{
constructor(props){
        super(props);

        this.state = {          //setting up state so that we have somewhere to store the data session_token
            isLoading: true,
            fetchedData: [],
            email: '',
            password: ''

        }
        }

  render(){
const navigation = this.props.navigation;

const AppButton = ({ onPress, title }) => (
<TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
<Text style={styles.buttonTxt}>{title}</Text>
</TouchableOpacity>
);


    return(




        <View style={styles.container}>
        <StatusBar
        barStyle = "dark-content"
        hidden = {false}
        backgroundColor= "#EDC7B7"
        translucent = {false}
        />
        <Text style={write.title}> CoffiDa </Text>
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
          <AppButton title="Login" onPress={() => { navigation.navigate('Home');}} />
          </View>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo}/>
          </View>
          <View style={styles.boxSpacing}>
          <AppButton title="Sign Up" onPress={() => { navigation.navigate('Sign Up');}} />
          </View>
          </View>
    );
  }
  addItem(){
            let to_send = {
            email: this.state.email,
            password: this.state.password,
            };

            return fetch("http://10.0.2.2:3333/api/1.0.0/user/login",{
            method: 'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(to_send)
            })
            .then((response) => response.json())
            .then((responseJson) => {
            Alert.alert("Login Success");
            this.setState({
              fetchedData:responseJson
            })
            navigation.navigate('Home')
            })
            .catch((error) => {
            console.log(error);
            })
            }
  getAsc(){

  }
  setAsc(){

    }



}


const styles = StyleSheet.create({
       txtBox: {
         elevation: 8,
            borderColor:'#123C69',
             borderWidth:3,
              padding:8,
               backgroundColor: "white",
               borderTopLeftRadius: 10,
               borderTopRightRadius: 10,
               borderBottomLeftRadius: 10,
               borderBottomRightRadius: 10,
               fontWeight: "bold",
       },
       boxSpacing: {
                   padding:10
              },
              container: {
                  flex: 1,
                  backgroundColor: "#EDC7B7",
                },
              buttonTxt: {
                fontSize: 18,
                color: "#123C69",
                fontWeight: "bold",
                alignSelf: "center"

              },
              appButtonContainer: {
                elevation: 8,
                borderColor:"#123C69",
                borderWidth:3,
  backgroundColor: "#EEE2DC",
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 12
},
logoContainer: {
    alignItems: 'center'
},
logo: {
  width: 300,
  height: 300,
}
              });
const write = StyleSheet.create({
  title :{
    textAlign: "center",
    fontSize: 45,
    color: '#AC3B61',
    fontWeight: "bold",
    padding:20}
  });
export default Login;

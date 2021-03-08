import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity  } from 'react-native';


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

    const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.buttonTxt}>{title}</Text>
    </TouchableOpacity>
    );

    const navigation = this.props.navigation;

    return(
        <View style={styles.container}>
        <Text style={write.title}> CoffiDa </Text>
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
              <AppButton title="Register" onPress={() => this.addItem()}
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
          Alert.alert("Sign Up Successful");
          })
          .catch((error) => {
          console.log(error);
          })
          }
  getData(){              //retrieve the data and store it in the state object
          return fetch("http://10.0.2.2:3333/api/1.0.0/location/1",{
          headers:{
              'Content-Type' : 'application/json'
              }
              })    //returns a promise, 10.0.2.2 because using emulator, instead send request to host machine
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

       });
       const write = StyleSheet.create({
         title :{
           textAlign: "center",
           fontSize: 45,
           color: '#AC3B61',
           fontWeight: "bold",
           padding:20}
         });

export default Sign;

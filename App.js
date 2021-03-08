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
        componentDidMount(){    //call the getData function
        this.getData();
        }

        getData(){              //retrieve the data and store it in the state object
            return fetch("http://10.0.2.2:3333/user")    //returns a promise, 10.0.2.2 because using emulator, instead send request to host machine
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

        addItem(){
        let to_send = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        };

        return fetch("http://localhost:3333/user",{
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(to_send)
        })
        .then((response) => {
        Alert.alert("Item added");
        this.getData();
        })
        .catch((error) => {
        console.log(error);
        })
        }

        render(){

           return (
             <NavigationContainer>
              <Stack.Navigator>
                   <Stack.Screen name= "Log In" component={Login} options={{ headerShown: false }}/>
                   <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                   <Stack.Screen name="Sign Up" component={Signup} options={{ headerShown: false }} />
              </Stack.Navigator>

             </NavigationContainer>
           );
         }
        }

export default App

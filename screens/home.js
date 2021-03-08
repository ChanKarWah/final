import React, {Component} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

class Home extends Component{
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
  return (
    <SafeAreaView style={styles.container}>
    <Text style={write.title}> CoffiDa </Text>
      <ScrollView style={styles.scrollView}>
         <View style={styles.top} />
         <View style={styles.middle} />
         <View style={styles.middle} />
         <View style={styles.middle} />
         <View style={styles.middle} />
         <View style={styles.middle} />
         <View style={styles.bottom} />
      </ScrollView>
    </SafeAreaView>
  );
}
}
const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 42,
  },
  container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#EDC7B7",
      padding: 10,
    },
    top: {
      flex: 0.3,
      backgroundColor: "#EEE2DC",
      borderColor:'#123C69', borderWidth:1,
      borderWidth: 5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height:200
    },
    middle: {
      flex: 0.3,
      backgroundColor: "#EEE2DC",
      borderColor:'#123C69', borderWidth:1,
      borderWidth: 5,
      height:200
    },
    bottom: {
      flex: 0.3,
      backgroundColor: "#EEE2DC",
      borderColor:'#123C69', borderWidth:1,
      borderWidth: 5,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      height:200
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

export default Home;

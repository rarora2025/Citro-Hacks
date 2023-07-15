import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const[budget,setBudget] = useState(0)
  const [monthly,setMonthly]= useState(0)
  const[distance,setDistance]= useState(0)

  const calcRanges =() =>{
  const priceRange = {
      min: budget - 2000,
      max: parseInt(budget) + 2000 
    }
  const monthlyPaymentRange = {
    min: monthly- 20,
    max: parseInt(monthly)+ 10
  };  
  const milesRange = {
    min: distance- 5,
    max: parseInt(distance) + 15
  };

    console.log('Price Range -> $' + priceRange.min + ' to $' + priceRange.max);
    console.log('Monthly Payment -> $' + monthlyPaymentRange.min + '-' + monthlyPaymentRange.max);
   console.log('Miles on single charge -> ' + milesRange.min + '-' + milesRange.max);
  }

  return (
     <View style={styles.container}>
      <Text style = {styles.title}>Find The Best Car In Your Budget</Text>
      <TextInput value={budget} onChangeText={text =>setBudget(text)}
      keyboardType='number-pad' style = {styles.input} placeholder='Budget'/>
      <TextInput value = {monthly}  onChangeText={text => setMonthly(text)}
      keyboardType='number-pad' style = {styles.input} placeholder='Desired Monthly Payment'/>
      <TextInput value={distance} onChangeText={text => setDistance(text)}
      keyboardType='number-pad' style = {styles.input} placeholder='Daily Commute Distance (miles)'/>
      <Button title = "Calculate Best Params" onPress = {calcRanges}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:22,
    fontWeight:"bold"
  },
  input:{
    borderWidth:1,
    borderRadius:30,
    borderColor:"gray",
    width:"80%",
    height:40,
    padding:10,
    margin:5
  }
});

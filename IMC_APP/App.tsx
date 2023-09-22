import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, SafeAreaView, Image } from 'react-native';

export default function App() {

  const [altura, setAltura] = React.useState()
  const [massa, setMassa] = React.useState()
  const [imc, setIMC] = React.useState('')
 
  function handleOnChangeAltura(texto:string){
    setAltura(texto)
  }

  function handleOnChangeMassa(texto:string){
    setMassa(texto)
  }

  function calculateIMC(){
    setIMC((massa/(altura*altura)).toFixed(2))
  }

  return (
      <View style={style.container}>
        {/* <View>
          <Image
          source={{uri:'https://ufal.br/ufal/comunicacao/identidade-visual/brasao/sigla/png.png'}}
          />
        </View> */}
        <View>
            <TextInput onChangeText={handleOnChangeAltura} style={style.inputs} placeholder='Altura' keyboardType='numeric'/>
            <TextInput onChangeText={handleOnChangeMassa} style={style.inputs} placeholder='Massa' keyboardType='numeric'/>
        </View>
        
        <View>
            <Button title='CALCULATE' onPress={calculateIMC}/>
            <Text style={style.outputs}>{`IMC: ${imc}`}</Text>
        </View>
      </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    margin:10,
  },

  inputs:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },

  outputs:{
    textAlign:'center',
    margin:10,
    height:40,
    fontSize:30,
    fontWeight:'bold'
  }
})
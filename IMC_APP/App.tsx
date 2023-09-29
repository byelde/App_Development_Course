import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, SafeAreaView, Image } from 'react-native';
import CalButton from "./src/component/Button/button"
import ResButton from './src/component/Button/reButton';

export default function App() {

  const [altura, setAltura] = React.useState(0.0)
  const [massa, setMassa] = React.useState(0.0)
  const [imc, setIMC] = React.useState<number | string>(0.0)
 
  function handleOnChangeAltura(texto:string){
    const nAltura = parseFloat(texto)
    setAltura(nAltura)
  }

  function handleOnChangeMassa(texto:string){
    const nMassa = parseFloat(texto)
    setMassa(nMassa)
  }

  function calculateIMC(){
    const Maltura = altura/100
    const imc_temp = (massa/(Maltura*Maltura)).toFixed(2)
    if (!isNaN(Number(imc_temp))){
      setIMC(imc_temp)
    } else {
      setIMC('Erro. Use valores válidos')
    }
  }

  function restartValues(){
    setAltura(0.0)
    setMassa(0.0)
    setIMC(0.0)
  }

  return (
      <View style={style.container}>
        <View style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
          <Image
          style={{width:120, height:120, display:'flex', alignItems:'center', flexDirection:'column'}}
          source={{uri:'https://ufal.br/ufal/comunicacao/identidade-visual/brasao/sigla/png.png'}}
          />
        </View>

        <View>
            <TextInput onChangeText={handleOnChangeAltura} defaultValue={`${altura}`} style={style.inputs} placeholder='Altura' keyboardType='numeric'/>
            <TextInput onChangeText={handleOnChangeMassa} defaultValue={`${massa}`} style={style.inputs} placeholder='Massa' keyboardType='numeric'/>
        </View>
        
        <View>
            <CalButton style={{backgroundColor: 'red', marginBottom:5}} title='Calcular' onPress={calculateIMC}/>
            <ResButton style={{backgroundColor: 'blue'}}title='Reiniciar' onPress={restartValues}/>
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
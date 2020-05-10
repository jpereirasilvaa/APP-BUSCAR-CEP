import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';





export default function HomeScreen(){
  const navigation = useNavigation();
   const url = "https://brasilapi.com.br/api/cep/v1";
   const [cepCode, setPostalCode] = useState("");
   const [loading, setLoading] = useState(false);

    const submitCepCode = async () => {
    setLoading(true);
    try {
        
        
        const response = await axios.get(`${url}/${cepCode}`);
        
        
        navigation.navigate("Resultado", {cepCode: response.data});
    } catch (error) {
     
     
     
        alert("O cep está inválido, digite novamente!")
    }
    setLoading(false);
  }

  return(
    <View style={styles.container}>
       
        <Text style={styles.Text}>Consultar CEP</Text>
        
        
        <Text style={styles.text}>"Digite um CEP e veja as informações detalhadas"</Text>
        
        
       
      
        
      <TextInput

        style={styles.textInput}
        value={cepCode}
        onChangeText={setPostalCode}
        placeholder="Digite um CEP válido!"
      />
      <TouchableOpacity 

        style={styles.button}
        disabled={loading}
        onPress={() => {submitCepCode()}}
        >
          {!loading && (
            <Text style={styles.TextInput}>Pesquisar</Text>
          )}

          {loading && (
            <ActivityIndicator color="#fff"/>
          )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textInput: {
    width: 250,
    height: 40,
    borderWidth: 2,
    borderColor: 'silver',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 15,
    borderColor: 'black'
  },

  text:{
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
    
    height:40
    
  },
  Text:{
    color: 'red',
    fontSize: 25,
    textAlign: 'center',
    fontStyle: 'italic',
    height:60
  
    
  },

  button: {
    width: 250,
    height:40,
    textAlign: 'center',
    justifyContent:  'center',
    alignItems: 'center',
    backgroundColor: '#c4302b'
  },
  TextInput:{
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    fontStyle: 'italic'
  }
})

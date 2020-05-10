import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailScreen({ route }){
  const cepCode = route.params.cepCode;

  return(
    <View style={styles.container}>
        <View style={styles.button}>
          <Text style={styles.titulo}>Dados econtrados</Text>
         <Text style={styles.text}>Cidade:</Text> 
         <Text style={styles.Text}>{cepCode.city}</Text>


         <Text style={styles.text}>Logradouro:</Text>
         <Text style={styles.Text}> {cepCode.street}</Text>

         <Text style={styles.text}>Bairro:</Text>
         <Text style={styles.Text}>{cepCode.neighborhood}</Text>

         
         <Text style={styles.text}>Estado:</Text>
         <Text style={styles.Text}>{cepCode.state}</Text>

         <Text style={styles.text}>CEP:</Text>
         <Text style={styles.Text}> {cepCode.cep}</Text>
         
        
      
        </View>
   
     </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal: 22,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  titulo:{
    fontSize: 15,
    textAlign: 'center',
    color: 'red',
    fontStyle: 'italic',
    height:40
    
  },

  text:{
    fontSize: 15,
    textAlign: 'left',
    color: 'black',
    textAlign:'center',
    fontStyle: 'italic',
  },
  Text:{
    fontSize: 12,
    textAlign: 'center',
    color: 'red',
    fontStyle: 'italic'
  },



  button: {
    width: 160,
    height:300,
   
    textAlign: 'center',
    backgroundColor: 'white',
    justifyContent:  'center',
  }
  
})


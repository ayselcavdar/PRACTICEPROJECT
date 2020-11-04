/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Text,
  Alert,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';

const App = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const login = () => {
    Alert.alert('FS', `Email: ${email}, Pass:${password}`);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{margin: 20, fontSize: 100}}>🌍</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Enter your e-mail adress"
          onChangeText={(userText) => setEmail(userText)}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Enter your Password"
          onChangeText={(userPass) => setPass(userPass)}
          secureTextEntry={true}
        />
      </View>
      <Button title="Login" onPress={login} />
    </View>

    <Button title="Reset" onPress={() => {
      setEmail('');
      setPass('')
    }}

  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.85,
  },
});
import React,{useState} from 'react';
import {StyleSheet,View, TextInput,Dimensions,Button} from 'react-native';

export default function AddTodo({submitHandler}){
    const [counter, setCounter] = useState(0);
  const updateCounter = () => setCounter(counter + 1);
    const [text, setText] = useState('');

    const changeHandler = (val) => {
    setText(val);
    }
    return(
        <View>
            <TextInput
            style={styles.textStyle}
            placeholder='new todo...'
            onChangeText={changeHandler}
            />
            <Button title="ADD TODO" color="#546E7A" onPress={updateCounter} />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold',
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').height * 0.06,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 25,
      },
})
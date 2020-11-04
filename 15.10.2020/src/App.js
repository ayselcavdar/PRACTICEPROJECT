import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

class App extends Component{
    constructor(props){
    super(props)

    this.state = {
        counter: 0,
        userName:"",
        createDate:new Date();
    }
    console.log('CONSTRUCTOR')
}

componentDidMount(){
  console.log("COMPONENT DID MOUNT")
}



render()
{
    return(
        <View>
            <Text style={{fontSize:30}}>Count :{this.state.counter}</Text>
            <Button
                title='up!'
                onPress={() => this.setState({
                    counter: this.state.counter + 1
                })}>
            </Button>
        </View>
    )
}
}

export default App;
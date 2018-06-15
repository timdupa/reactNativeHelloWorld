/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  TextInput,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet
} from 'react-native';

//Used in props demo
class Greeting extends Component {
  render(){
    return (
      <Text>Hello {this.props.name}!</Text>	    
    )
  }
}

//Used in state demo
class Blink extends Component {
    constructor(props){
        super(props);
        this.state = {isShowingText: true};

        //Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText};
            });
        }, 1000);
    }
    render() {
        let display = this.state.isShowingText ? this.props.text: ' ';
        return (
            <Text>{display}</Text>
        )
    }
}
export default class App extends Component<Props> {
    constructor(props){
        super(props);
        this.state={text: ''};
    }
  _onPressButton(){
    Alert.alert('u ugly.')
  }
  _onGreenPressButton(){
    Alert.alert('u green ugly.')
  }
  _onLongPressButton(){
    Alert.alert('You long ugly.')
  }

  render() {
    return (
    <ScrollView> //Allows for page to be scrolled
	<View style={{alignItems: 'center'}}>
	    <Text style={{color: 'red'}}>Testing Props</Text>
            <Greeting name='Tim' />
            <Greeting name='Hannah' />
            <Greeting name='Nick' />
            <Greeting name='Ugly' />
            <Text> </Text>
	    <Text style={{color: 'red'}}>Testing Button</Text>
            <Button
                onPress={this._onPressButton}
                title="Press Me"
            />
            <Button
                onPress={this._onGreenPressButton}
                title= "Green Button"
                color= 'green'
            />
            <Text> </Text>
        <Text style={{color: 'red'}}> Testing Handling Touchables</Text>
            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableHighlight</Text>
                </View>
            </TouchableHighlight>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableOpacity</Text>
                </View>
            </TouchableOpacity>
            <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback
                    .SelectableBackground() : ''}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableWithoutFeedback
                    onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableHighlight onPress={this._onPressButton}
                    onLongPress={this._onLongPressButton} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Touchable with Long Press</Text>
                </View>
            </TouchableHighlight>
            <Text> </Text>

        <Text style={{color:'red'}}>Testing State Changes</Text>
            <Blink text='This text should be blinking' />
            <Text> </Text>

        <Text style={{color:'red'}}>Testing Text Handling</Text>
            <TextInput
                style={{padding: 10, height: 40}}
                placeholder="Type here to translate"
                onChangeText={(text) => this.setState({text})}
            />
            <Text>
                {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
            <Text> </Text>
	</View>
	</ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
})




















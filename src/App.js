import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import MyButton from './components/MyButton';
import Counter from './components/Counter';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';

const App = () => {
    return (
        <View style={styles.View_bg}>
            <Text style={styles.Text_Style}>Button Component</Text>
            <MyButton title="Button" onPress={() => alert("props")}/>
            <MyButton title="Button">Children Props</MyButton>
            <MyButton>abc</MyButton>
            <MyButton></MyButton>
            <Text>{MyButton.count}</Text>

            <Counter/>

            <EventButton/>

            <EventInput/>
            
        </View>
    );
};

const styles = StyleSheet.create({
  View_bg: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text_Style: {
    fontSize: 30, 
    marginBottom: 10
  },
});

export default App;
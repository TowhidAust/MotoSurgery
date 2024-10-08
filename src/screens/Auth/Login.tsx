import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type PropTypes = {
  navigation: any;
};

const Login = (props: PropTypes) => {
  const [text, onChangeText] = useState('Useless Text');
  const [number, onChangeNumber] = useState('');
  const {navigation} = props;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter your email"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter your password"
        keyboardType="default"
      />
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  input: {
    height: 55,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 16,
    borderRadius: 3,
    borderColor: '#ddd',
  },
});

export default Login;

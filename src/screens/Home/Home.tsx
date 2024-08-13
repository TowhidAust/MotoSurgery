import React from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../../styles';

type PropTypes = {
  navigation: any;
};

export default function Home(props: PropTypes) {
  const {navigation} = props;
  return (
    <View style={globalStyles.container}>
      <Text>I am home. lets go to somewhere else</Text>
      <Button
        title="Go to Details ff"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

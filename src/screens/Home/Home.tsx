import React from 'react';
import {Button, Text, View} from 'react-native';

type PropTypes = {
  navigation: any;
};

export default function Home(props: PropTypes) {
  const {navigation} = props;
  return (
    <View>
      <Text>I am home. lets go to somewhere else</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Auth')}
      />
    </View>
  );
}

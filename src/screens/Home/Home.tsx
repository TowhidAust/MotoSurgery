import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

type PropTypes = {
  navigation: any;
};

export default function Home(props: PropTypes) {
  const {navigation} = props;
  return (
    <View>
      <Text style={styles.fontSize}>I am home. lets go to somewhere else</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Auth')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fontSize: {
    fontSize: 22,
  },
});

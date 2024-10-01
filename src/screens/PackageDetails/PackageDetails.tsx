import React from 'react';
import {StyleSheet, View} from 'react-native';
import {globalStyles} from '@/src/styles';
import {Button, Text} from 'react-native-paper';
import type {PackageScreenProps} from '@/src/types';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PackageDetails(props: PackageScreenProps) {
  const {route, navigation} = props;
  return (
    <View style={globalStyles.container}>
      <Text variant="headlineSmall" style={globalStyles.textBold}>
        {route?.params?.title}
      </Text>
      <Text style={globalStyles.textRegular}>TK 700</Text>

      {route?.params?.features.map(item => {
        return (
          <View key={item?.id} style={styles.container}>
            <View style={styles.icon}>
              <Icon name="check-box" size={20} color="green" />
            </View>
            <View style={styles.feature}>
              <Text style={globalStyles.textRegular}> {item?.title} </Text>
            </View>
          </View>
        );
      })}
      <Button
        style={styles.bookBtnStyle}
        mode="contained"
        onPress={() => navigation.navigate('Booking')}>
        Book Now
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    flex: 1,
  },
  feature: {
    flex: 20,
  },
  bookBtnStyle: {
    marginTop: 10,
  },
});

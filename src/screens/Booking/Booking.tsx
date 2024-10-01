import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {Calendar} from 'react-native-calendars';
import {globalStyles} from '@/src/styles';

export default function Booking() {
  return (
    <View style={globalStyles.container}>
      <Text variant="headlineSmall">Select a date</Text>
      <Calendar
        onDayPress={(day: any) => {
          console.log('selected day', day);
        }}
        // Mark specific dates as marked
        markedDates={{
          '2024-10-02': {selected: true, marked: true, selectedColor: '#ddd'},
          '2024-10-03': {selected: true, marked: true, selectedColor: '#ddd'},
          '2024-10-04': {selected: true, marked: true, selectedColor: '#ddd'},
        }}
      />
    </View>
  );
}

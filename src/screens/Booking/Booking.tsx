import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {Calendar} from 'react-native-calendars';
import {globalStyles} from '@/src/styles';

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState<string>('');
  return (
    <View style={globalStyles.container}>
      <Text variant="headlineSmall" style={styles.selectDateHeadline}>
        Select a date
      </Text>
      <Calendar
        style={globalStyles.borderRadius}
        onDayPress={(day: any) => {
          console.log('selected day', day);
          setSelectedDate(day.dateString);
        }}
        theme={{
          arrowColor: 'tomato',
          todayTextColor: 'tomato',
        }}
        minDate={new Date().toString()}
        // Mark specific dates as marked
        markedDates={{
          [selectedDate]: {
            selected: true,
            marked: false,
            selectedColor: 'tomato',
          },
        }}
      />
      <Text variant="headlineSmall" style={styles.slotHeadline}>
        Available Slots
      </Text>

      <View style={styles.cardContianer}>
        <View style={styles.slotCard}>
          <Card>
            <Card.Content>
              <Text style={globalStyles.textRegular}>10am - 12am</Text>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.slotCard}>
          <Card>
            <Card.Content>
              <Text style={globalStyles.textRegular}>10am - 12am</Text>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.slotCard}>
          <Card>
            <Card.Content>
              <Text style={globalStyles.textRegular}>10am - 12am</Text>
            </Card.Content>
          </Card>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectDateHeadline: {
    marginBottom: 12,
  },
  slotHeadline: {
    marginTop: 12,
    marginBottom: 3,
  },
  cardContianer: {
    flexDirection: 'row', // Row layout
    flexWrap: 'wrap', // Wrap to next line when out of space
    justifyContent: 'flex-start', // Space between items
  },
  slotCard: {
    width: '47%', // Set width to take up 2 columns
    marginRight: 3,
    marginBottom: 3,
    marginLeft: 3,
  },
});

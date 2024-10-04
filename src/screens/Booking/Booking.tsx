import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {Calendar} from 'react-native-calendars';
import {globalStyles} from '@/src/styles';
import {Slot} from '@/src/types';

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState<string>('');
  // {"dateString": "2024-10-22", "day": 22, "month": 10, "timestamp": 1729555200000, "year": 2024}
  const [availableSlot] = useState<Slot[]>([
    {
      id: '1',
      date: new Date(),
      startTime: '10:20 AM',
      endTime: '11:20 AM',
    },
    {
      id: '2',
      date: new Date(),
      startTime: '12:20 PM',
      endTime: '01:20 PM',
    },
    {
      id: '3',
      date: new Date(),
      startTime: '03:20 PM',
      endTime: '04:20 PM',
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <Text variant="headlineSmall" style={styles.selectDateHeadline}>
        Select date
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
        Available slots
      </Text>
      <View style={styles.cardContianer}>
        {availableSlot.map(item => (
          <View key={item.id} style={styles.slotCard}>
            <Pressable
              onPress={() => {
                console.log('Go to somewhere else');
              }}>
              <Card>
                <Card.Content>
                  <Text variant="bodyMedium">
                    {item?.startTime} - {item?.endTime}
                  </Text>
                </Card.Content>
              </Card>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectDateHeadline: {
    marginBottom: 10,
  },
  slotHeadline: {
    marginTop: 12,
    marginBottom: 10,
  },
  cardContianer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  slotCard: {
    width: '47%',
    marginBottom: 10,
  },
});

import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {globalStyles} from '@/src/styles';
import {ServicePakage} from '@/src/types';
import type {HomeScreenProps} from '@/src/types';
import {Card, Text} from 'react-native-paper';

export default function Home(props: HomeScreenProps) {
  const {navigation} = props;
  const [serviceList] = useState<ServicePakage[]>([
    {
      id: 'uuid1',
      title: 'Regular Service',
      price: 700,
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dignissimos reiciendis accusamus esse mollitia aut',
      features: [
        {
          id: '1',
          title: 'Air filter clean/change',
          description: 'No description',
        },
        {
          id: '2',
          title: 'Oil Filter & Mobil Change',
          description: 'No description',
        },
        {
          id: '3',
          title: 'Mobil Change',
          description: 'No description',
        },
        {
          id: '4',
          title: 'Breakpad Clean/Change',
          description: 'No description',
        },
        {
          id: '5',
          title: 'Tyre Pressure Check',
          description: 'No description',
        },
      ],
    },
  ]);
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Text variant="headlineSmall">Most popular Packages</Text>
        {serviceList?.map(item => {
          return (
            <Pressable
              key={item?.id}
              onPress={e => {
                e.persist();
                navigation.navigate('PackageDetails', {
                  packageId: item?.id,
                  title: item?.title,
                  features: item?.features,
                });
              }}>
              <Card style={styles.cardContainer}>
                <Card.Title
                  title={
                    <Text style={globalStyles.textBold} variant="headlineSmall">
                      {item?.title}
                    </Text>
                  }
                  subtitle={
                    <Text style={globalStyles.textRegular}>
                      TK {item?.price}
                    </Text>
                  }
                />
                <Card.Content>
                  <Text style={globalStyles.textRegular}>
                    {item?.description}
                  </Text>
                </Card.Content>
              </Card>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 15,
  },
});

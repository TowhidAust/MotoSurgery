import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {globalStyles} from '@/src/styles';
import {servicePakage} from '@/src/types';
import {Card, Text} from 'react-native-paper';

type PropTypes = {
  navigation: any;
};

export default function Home(props: PropTypes) {
  const {navigation} = props;
  const [serviceList] = useState<servicePakage[]>([
    {
      id: 'uuid1',
      title: 'Regular Service',
      price: 700,
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dignissimos reiciendis accusamus esse mollitia aut',
      features: [
        {
          title: 'Air filter clean/change',
          description: 'No description',
        },
      ],
    },
    {
      id: 'uuid2',
      title: 'Bike Wash & Polish',
      price: 200,
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dignissimos reiciendis accusamus esse mollitia aut',
      features: [
        {
          title: 'Air filter clean/change',
          description: 'No description',
        },
      ],
    },
    {
      id: 'uuid3',
      title: 'Accessories Installation',
      price: 300,
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dignissimos reiciendis accusamus esse mollitia aut',
      features: [
        {
          title: 'Air filter clean/change',
          description: 'No description',
        },
      ],
    },
    {
      id: 'uuid4',
      title: 'Tyre Change',
      price: 200,
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dignissimos reiciendis accusamus esse mollitia aut',
      features: [
        {
          title: 'Air filter clean/change',
          description: 'No description',
        },
      ],
    },
    {
      id: 'uuid5',
      title: 'Sticker Modification',
      price: 200,
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dignissimos reiciendis accusamus esse mollitia aut',
      features: [
        {
          title: 'Air filter clean/change',
          description: 'No description',
        },
      ],
    },
  ]);
  useState;
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Text style={[globalStyles.textBold, globalStyles.textRegular]}>
          Most popular Packages
        </Text>

        {serviceList?.map(item => {
          return (
            <Pressable
              key={item?.id}
              onPress={e => {
                e.persist();
                navigation.navigate('PackageDetails', {
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

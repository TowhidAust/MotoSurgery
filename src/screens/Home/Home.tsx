import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {globalStyles} from '@/src/styles';
import {servicePakage} from '@/src/types';
type PropTypes = {
  navigation: any;
};

export default function Home(props: PropTypes) {
  const {navigation} = props;
  const [serviceList] = useState<servicePakage[]>([
    {
      id: 'uuid1',
      title: 'Regular service',
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
      id: 'uuid2',
      title: 'Premium service',
      price: 1200,
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dignissimos reiciendis accusamus esse mollitia aut',
      features: [
        {
          title: 'Air filter clean/change',
          description: 'Additional charges may apply',
        },
      ],
    },
  ]);
  useState;
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Text style={globalStyles.fontFamilyRegular}>
          Most popular Packages
        </Text>
        <Pressable
          onPress={e => {
            e.persist();
            navigation.navigate('Package');
          }}>
          {serviceList?.map(item => {
            return (
              <View key={item?.id}>
                <Text style={globalStyles.fontFamilyBold}>{item?.title}</Text>
                <Text style={globalStyles.fontFamilyRegular}>
                  {item?.price}
                </Text>
                <Text
                  style={[
                    globalStyles.fontFamilyRegular,
                    globalStyles.fontRegular,
                  ]}>
                  {item?.description}
                </Text>
              </View>
            );
          })}
        </Pressable>
      </View>
    </ScrollView>
  );
}

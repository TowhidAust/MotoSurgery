import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {globalStyles} from '@/src/styles';
import {Card} from '@/components/ui/card';
import {Heading} from '@/components/ui/heading';
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
        <Heading className="mt-0 mb-4" size="xl">
          <Text style={globalStyles.fontFamilyRegular}>
            Most popular Packages
          </Text>
        </Heading>
        <Pressable
          onPress={e => {
            e.persist();
            navigation.navigate('Package');
          }}>
          {serviceList?.map(item => {
            return (
              <Card
                key={item?.id}
                className="rounded-lg p-5 mb-5"
                size="md"
                variant="elevated">
                <Heading className="mt-0 mb-1" size="xl">
                  <Text style={globalStyles.fontFamilyBold}>{item?.title}</Text>
                </Heading>
                <Heading className="mt-0 mb-0" size="lg">
                  <Text style={globalStyles.fontFamilyRegular}>
                    {item?.price}
                  </Text>
                </Heading>
                <Text
                  className="text-justify mt-1"
                  style={[
                    globalStyles.fontFamilyRegular,
                    globalStyles.fontRegular,
                  ]}>
                  {item?.description}
                </Text>
              </Card>
            );
          })}
        </Pressable>
      </View>
    </ScrollView>
  );
}

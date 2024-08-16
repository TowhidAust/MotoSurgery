import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {globalStyles} from '../../styles';
import BasicCard from '../../components/Card/BasicCard';

export default function Home() {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Workshop Nearby</Text>
        <BasicCard title="MotoX">
          <View>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam excepturi at commodi repellendus voluptatem
              perspiciatis. Veniam in ipsum porro inventore. Maxime aut nisi
              dicta deserunt, architecto illo quia corporis quisquam.
            </Text>
          </View>
        </BasicCard>
      </View>
    </ScrollView>
  );
}

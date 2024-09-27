import React from 'react';
import {View} from 'react-native';
import {globalStyles} from '@/src/styles';
import {Text} from 'react-native-paper';
import type {PackageProps} from '@/src/types';

export default function PackageDetails(props: PackageProps) {
  const {route} = props;
  return (
    <View style={globalStyles.container}>
      <View>
        <View>
          <Text style={globalStyles.textRegular}>{route?.params?.title}</Text>
          <Text style={globalStyles.textRegular}>TK 700</Text>

          {route?.params?.features.map((item: any) => {
            return (
              <Text key={item?.id} style={[globalStyles.textRegular]}>
                {item?.title}
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
}

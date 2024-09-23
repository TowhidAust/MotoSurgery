import {globalStyles} from '@/src/styles';
import React from 'react';
import {Text, View} from 'react-native';

export default function Package() {
  return (
    <View style={globalStyles.container}>
      <View>
        <View>
          <Text style={globalStyles.fontFamilyBold}>General Service</Text>
          <Text style={globalStyles.fontFamilyBold}>TK 700</Text>
          <Text
            style={[globalStyles.fontFamilyRegular, globalStyles.fontRegular]}>
            We are ready to take care of your motorcycle. We also provide all
            kinds of motorcycle parts. We provide home service with low cost.
          </Text>
        </View>
      </View>
    </View>
  );
}

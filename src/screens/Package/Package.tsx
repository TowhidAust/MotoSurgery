import {Card} from '@/components/ui/card';
import {Heading} from '@/components/ui/heading';
import {globalStyles} from '@/src/styles';
import React from 'react';
import {Text, View} from 'react-native';

export default function Package() {
  return (
    <View style={globalStyles.container}>
      <Card className="rounded-lg p-5 mb-5" size="md" variant="elevated">
        <View>
          <Heading className="mt-0 mb-1" size="xl">
            <Text style={globalStyles.fontFamilyBold}>General Service</Text>
          </Heading>
          <Heading className="mt-0 mb-1" size="lg">
            <Text style={globalStyles.fontFamilyBold}>TK 700</Text>
          </Heading>
          <Text
            className="mt-0 text-justify"
            style={[globalStyles.fontFamilyRegular, globalStyles.fontRegular]}>
            We are ready to take care of your motorcycle. We also provide all
            kinds of motorcycle parts. We provide home service with low cost.
          </Text>
        </View>
      </Card>
    </View>
  );
}

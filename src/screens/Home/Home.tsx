import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '@/src/styles';
import {Card} from '@/components/ui/card';
import {Heading} from '@/components/ui/heading';
type PropTypes = {
  navigation: any;
};
export default function Home(props: PropTypes) {
  const {navigation} = props;
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
          <Card className="rounded-lg p-5 mb-5" size="md" variant="elevated">
            <View style={styles.cardInnerContainer}>
              <View>
                <Heading className="mt-0 mb-1" size="xl">
                  <Text style={globalStyles.fontFamilyBold}>
                    Regular Service
                  </Text>
                </Heading>
                <Heading className="mt-0 mb-0" size="lg">
                  <Text style={globalStyles.fontFamilyRegular}>TK 700</Text>
                </Heading>
              </View>
              <View>
                <Text
                  className="text-justify mt-1"
                  style={[
                    globalStyles.fontFamilyRegular,
                    globalStyles.fontRegular,
                  ]}>
                  Every month your bike need some basic service. We are here to
                  serve you best with reasonable price. Click now to book your
                  service.
                </Text>
              </View>
            </View>
          </Card>
        </Pressable>
        <Pressable
          onPress={e => {
            e.persist();
            // navigation.navigate('Package');
          }}>
          <Card className="rounded-lg p-5 mb-5" size="md" variant="elevated">
            <View style={styles.cardInnerContainer}>
              <View>
                <Heading className="mt-0 mb-1" size="xl">
                  <Text style={globalStyles.fontFamilyBold}>
                    Premium Service
                  </Text>
                </Heading>
                <Heading className="mt-0 mb-0" size="lg">
                  <Text style={globalStyles.fontFamilyRegular}>TK 2500</Text>
                </Heading>
              </View>
              <View>
                <Text
                  className="text-justify mt-1"
                  style={[
                    globalStyles.fontFamilyRegular,
                    globalStyles.fontRegular,
                  ]}>
                  Every month your bike need some basic service. We are here to
                  serve you best with reasonable price. Click now to book your
                  service.
                </Text>
              </View>
            </View>
          </Card>
        </Pressable>
        <Pressable
          onPress={e => {
            e.persist();
            // navigation.navigate('Package');
          }}>
          <Card className="rounded-lg p-5 mb-5" size="md" variant="elevated">
            <View style={styles.cardInnerContainer}>
              <View>
                <Heading className="mt-0 mb-1" size="xl">
                  <Text style={globalStyles.fontFamilyBold}>
                    Customized Service
                  </Text>
                </Heading>
                <Heading className="mt-0 mb-0" size="lg">
                  <Text style={globalStyles.fontFamilyRegular}>
                    Pay as you go
                  </Text>
                </Heading>
              </View>
              <View>
                <Text
                  className="text-justify mt-1"
                  style={[
                    globalStyles.fontFamilyRegular,
                    globalStyles.fontRegular,
                  ]}>
                  Every month your bike need some basic service. We are here to
                  serve you best with reasonable price. Click now to book your
                  service.
                </Text>
              </View>
            </View>
          </Card>
        </Pressable>
        <Heading className="mt-0 mb-4" size="xl">
          <Text style={globalStyles.fontFamilyRegular}>
            Packages that your daily needs
          </Text>
        </Heading>
        <Pressable
          onPress={e => {
            e.persist();
            // navigation.navigate('Package');
          }}>
          <Card className="rounded-lg p-5 mb-5" size="md" variant="elevated">
            <View style={styles.cardInnerContainer}>
              <View>
                <Heading className="mt-0 mb-1" size="xl">
                  <Text style={globalStyles.fontFamilyBold}>
                    Install Outdoor Accessories
                  </Text>
                </Heading>
                <Heading className="mt-0 mb-0" size="lg">
                  <Text style={globalStyles.fontFamilyRegular}>TK 299</Text>
                </Heading>
              </View>
              <View>
                <Text
                  className="text-justify mt-1"
                  style={[
                    globalStyles.fontFamilyRegular,
                    globalStyles.fontRegular,
                  ]}>
                  Every month your bike need some basic service. We are here to
                  serve you best with reasonable price. Click now to book your
                  service.
                </Text>
              </View>
            </View>
          </Card>
        </Pressable>
        <Pressable
          onPress={e => {
            e.persist();
            // navigation.navigate('Package');
          }}>
          <Card className="rounded-lg p-5 mb-5" size="md" variant="elevated">
            <View style={styles.cardInnerContainer}>
              <View>
                <Heading className="mt-0 mb-1" size="xl">
                  <Text style={globalStyles.fontFamilyBold}>
                    Small Dent & Paint
                  </Text>
                </Heading>
                <Heading className="mt-0 mb-0" size="lg">
                  <Text style={globalStyles.fontFamilyRegular}>
                    Starts from TK 300
                  </Text>
                </Heading>
              </View>
              <View>
                <Text
                  className="text-justify mt-1"
                  style={[
                    globalStyles.fontFamilyRegular,
                    globalStyles.fontRegular,
                  ]}>
                  Every month your bike need some basic service. We are here to
                  serve you best with reasonable price. Click now to book your
                  service.
                </Text>
              </View>
            </View>
          </Card>
        </Pressable>
        <Pressable
          onPress={e => {
            e.persist();
            // navigation.navigate('Package');
          }}>
          <Card className="rounded-lg p-5 mb-5" size="md" variant="elevated">
            <View style={styles.cardInnerContainer}>
              <View>
                <Heading className="mt-0 mb-1" size="xl">
                  <Text style={globalStyles.fontFamilyBold}>Tyre Change</Text>
                </Heading>
                <Heading className="mt-0 mb-0" size="lg">
                  <Text style={globalStyles.fontFamilyRegular}>TK 600</Text>
                </Heading>
              </View>
              <View>
                <Text
                  className="text-justify mt-1"
                  style={[
                    globalStyles.fontFamilyRegular,
                    globalStyles.fontRegular,
                  ]}>
                  Every month your bike need some basic service. We are here to
                  serve you best with reasonable price. Click now to book your
                  service.
                </Text>
              </View>
            </View>
          </Card>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardInnerContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
});

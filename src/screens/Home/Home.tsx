import React from 'react';
import {Image, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {globalStyles} from '@/src/styles';
import {Card} from '@/components/ui/card';
import {Heading} from '@/components/ui/heading';
import {Text} from '@/components/ui/text';

const Home = () => {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Heading
          className="mt-0 mb-4"
          size="xl"
          style={globalStyles.fontFamilyRegular}>
          Nearby Shops
        </Heading>
        <Pressable
          onPress={e => {
            e.persist();
            console.log('Md. Towhidul Islam');
          }}>
          <Card className="rounded-lg p-5 mb-5" size="md" variant="elevated">
            <View style={styles.cardInnerContainer}>
              <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={{
                    uri: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1724716800&semt=ais_hybrid',
                  }}
                />
              </View>
              <View style={styles.titleDescriptionContainer}>
                <Heading
                  className="mt-0 mb-1"
                  size="xl"
                  style={globalStyles.fontFamilyRegular}>
                  Bike Postmortem
                </Heading>
                <Text
                  className="mt-0 text-justify"
                  style={globalStyles.fontFamilyRegular}>
                  We are ready to take care of your motorcycle. We also provide
                  all kinds of motorcycle parts. We provide home service with
                  low cost.
                </Text>
              </View>
            </View>
          </Card>
        </Pressable>
        <Card className="rounded-lg p-5 mb-5" size="md" variant="elevated">
          <View style={styles.cardInnerContainer}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={{
                  uri: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1724716800&semt=ais_hybrid',
                }}
              />
            </View>
            <View style={styles.titleDescriptionContainer}>
              <Heading
                className="mt-0 mb-1"
                size="xl"
                style={globalStyles.fontFamilyRegular}>
                Moto Surgery
              </Heading>
              <Text
                className="mt-0 text-justify"
                style={globalStyles.fontFamilyRegular}>
                We are ready to take care of your motorcycle. We also provide
                all kinds of motorcycle parts. We provide home service with low
                cost.
              </Text>
            </View>
          </View>
        </Card>
        <Card className="rounded-lg p-5 mb-5" size="md" variant="elevated">
          <View style={styles.cardInnerContainer}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={{
                  uri: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1724716800&semt=ais_hybrid',
                }}
              />
            </View>
            <View style={styles.titleDescriptionContainer}>
              <Heading
                className="mt-0 mb-1"
                size="xl"
                style={globalStyles.fontFamilyRegular}>
                Moto Hub
              </Heading>
              <Text
                className="mt-0 text-justify"
                style={globalStyles.fontFamilyRegular}>
                We are ready to take care of your motorcycle. We also provide
                all kinds of motorcycle parts. We provide home service with low
                cost.
              </Text>
            </View>
          </View>
        </Card>
        <Card className="rounded-lg p-5 mb-5" size="md" variant="elevated">
          <View style={styles.cardInnerContainer}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={{
                  uri: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1724716800&semt=ais_hybrid',
                }}
              />
            </View>
            <View style={styles.titleDescriptionContainer}>
              <Heading
                className="mt-0 mb-1"
                size="xl"
                style={globalStyles.fontFamilyRegular}>
                Gear X Bangladesh
              </Heading>
              <Text
                className="mt-0 text-justify"
                style={globalStyles.fontFamilyRegular}>
                We are ready to take care of your motorcycle. We also provide
                all kinds of motorcycle parts. We provide home service with low
                cost.
              </Text>
            </View>
          </View>
        </Card>
        <Card className="rounded-lg p-5 mb-5" size="md" variant="elevated">
          <View style={styles.cardInnerContainer}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={{
                  uri: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1724716800&semt=ais_hybrid',
                }}
              />
            </View>
            <View style={styles.titleDescriptionContainer}>
              <Heading
                className="mt-0 mb-1"
                size="xl"
                style={globalStyles.fontFamilyRegular}>
                Moto X BD
              </Heading>
              <Text
                className="mt-0 text-justify"
                style={globalStyles.fontFamilyRegular}>
                We are ready to take care of your motorcycle. We also provide
                all kinds of motorcycle parts. We provide home service with low
                cost.
              </Text>
            </View>
          </View>
        </Card>
        <Card className="rounded-lg p-5" size="md" variant="elevated">
          <View style={styles.cardInnerContainer}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={{
                  uri: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1724716800&semt=ais_hybrid',
                }}
              />
            </View>
            <View style={styles.titleDescriptionContainer}>
              <Heading
                className="mt-0 mb-1"
                size="xl"
                style={globalStyles.fontFamilyRegular}>
                Bike BD
              </Heading>
              <Text
                className="mt-0 text-justify"
                style={globalStyles.fontFamilyRegular}>
                We are ready to take care of your motorcycle. We also provide
                all kinds of motorcycle parts. We provide home service with low
                cost.
              </Text>
            </View>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardInnerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
  },
  titleDescriptionContainer: {
    flex: 5,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
export default Home;

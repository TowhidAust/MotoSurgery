import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
          <Text style={globalStyles.fontFamilyRegular}>Your Nearby Shops </Text>
        </Heading>
        <Pressable
          onPress={e => {
            e.persist();
            navigation.navigate('Package');
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
                <Heading className="mt-0 mb-1" size="xl">
                  <Text style={globalStyles.fontFamilyBold}>Shop Name</Text>
                </Heading>
                <Text
                  className="mt-0 text-justify"
                  style={[
                    globalStyles.fontFamilyRegular,
                    globalStyles.fontRegular,
                  ]}>
                  Some shop description like Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Debitis doloribus dicta fugiat
                  mollitia quis accusantium aspernatur? In, rem!
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

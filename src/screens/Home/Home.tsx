import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../../styles';
import BasicCard from '../../components/Card/BasicCard';

const Home = () => {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Text style={[globalStyles.title, styles.sectionTitle]}>
          Workshop Nearby
        </Text>
        <View style={styles.cardContainer}>
          <BasicCard title="Gear X Bangladesh">
            <View>
              <Text style={[globalStyles.customFontFamily, styles.description]}>
                All Kind of moto parts is available here.
              </Text>
            </View>
          </BasicCard>
        </View>
        <View style={styles.cardContainer}>
          <BasicCard title="Moto Station">
            <View>
              <Text style={[globalStyles.customFontFamily, styles.description]}>
                All Kind of moto parts is available here.
              </Text>
            </View>
          </BasicCard>
        </View>
        <View style={styles.cardContainer}>
          <BasicCard title="Bike Station BD">
            <View>
              <Text style={[globalStyles.customFontFamily, styles.description]}>
                All Kind of moto parts is available here.
              </Text>
            </View>
          </BasicCard>
        </View>
        <View style={styles.cardContainer}>
          <BasicCard title="Moto Mechanic">
            <View>
              <Text style={[globalStyles.customFontFamily, styles.description]}>
                All Kind of moto parts is available here.
              </Text>
            </View>
          </BasicCard>
        </View>
        <View style={styles.cardContainer}>
          <BasicCard title="Moto Gears">
            <View>
              <Text style={[globalStyles.customFontFamily, styles.description]}>
                All Kind of moto parts is available here.
              </Text>
            </View>
          </BasicCard>
        </View>
        <View style={styles.cardContainer}>
          <BasicCard title="Bike BD">
            <View>
              <Text style={[globalStyles.customFontFamily, styles.description]}>
                All Kind of moto parts is available here.
              </Text>
            </View>
          </BasicCard>
        </View>
        <View style={styles.cardContainer}>
          <BasicCard title="BD Motorcycle">
            <View>
              <Text style={[globalStyles.customFontFamily, styles.description]}>
                All Kind of moto parts is available here.
              </Text>
            </View>
          </BasicCard>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
  },
  description: {
    textAlign: 'justify',
    fontSize: 16,
  },
  sectionTitle: {
    marginBottom: 10,
  },
});

export default Home;

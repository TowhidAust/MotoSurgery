import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {globalStyles} from '../../styles';
import Card from '../../components/Card/Card';

export default function Home() {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Workshop Nearby</Text>
        <Card
          title="MotoX"
          description="A stunning view of the sunset over the mountains."
          imageUrl="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
          // onPress={handleCardPress}
        />
        <Card
          title="Techno Service Station"
          description="A stunning view of the sunset over the mountains."
          imageUrl="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723593600&semt=ais_hybrid"
          // onPress={handleCardPress}
        />
        <Card
          title="Motosurgery"
          description="A stunning view of the sunset over the mountains."
          imageUrl="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
          // onPress={handleCardPress}
        />
        <Card
          title="BD Moto Shop"
          description="A stunning view of the sunset over the mountains."
          imageUrl="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723593600&semt=ais_hybrid"
          // onPress={handleCardPress}
        />
      </View>
    </ScrollView>
  );
}

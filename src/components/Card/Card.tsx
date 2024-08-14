import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

type PropTypes = {
  title: string;
  description: string;
  imageUrl?: string;
  onPress?: () => void;
};

const Card = ({title, description, imageUrl, onPress}: PropTypes) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        {imageUrl && <Image source={{uri: imageUrl}} style={styles.image} />}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    margin: 10,
    overflow: 'hidden',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  content: {
    width: '83%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
  avatar: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;

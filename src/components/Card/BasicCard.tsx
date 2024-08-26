import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../../styles';

type PropTypes = {
  title: string;
  children: React.ReactNode;
};

const BasicCard = (props: PropTypes) => {
  const {title, children} = props;
  return (
    <View style={styles.card}>
      <Text style={[globalStyles.title, globalStyles.customFontFamily]}>
        {title}
      </Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2,
  },
  content: {
    marginTop: 4,
  },
});

export default BasicCard;

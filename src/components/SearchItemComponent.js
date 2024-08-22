import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SearchItemComponent = props => {
  const {item} = props;

  return (
    <View style={styles.itemContainer}>
      <Image
        // source={require('../../assets/img/miniRose.jpg')}
        source={{
          uri: item.image,
        }}
        onError={error => console.log('Image load error:', error)}
        style={styles.image}
      />
      <View>
        <Text style={styles.infText}>
          {item.name} | {item.origin}
        </Text>
        <Text style={styles.infText}>{item.price}</Text>
        <Text style={styles.priceText}>Còn {item.qty} sp</Text>
      </View>
    </View>
  );
};

export default SearchItemComponent;

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 55,
    flexDirection: 'row',
    gap: 15,
  },
  image: {
    width: 77,
    height: 77,
    borderRadius: 8,
  },
  infText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: '#000',
  },
  priceText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#000',
  },
});

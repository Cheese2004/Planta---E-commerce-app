import React, {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const childWidth = (width - 80) / 2;
const childHeight = height * 0.27;

const ProductByCate = ({data}) => {
  const navigation = useNavigation();

  const handlePress = useCallback(
    item => {
      navigation.navigate('DetailPro', {
        productItem: item,
      });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          style={[styles.singItem]}
          onPress={() => handlePress(item)}>
          {!!item.image && (
            <Image source={{uri: item.image}} style={styles.image} />
          )}
          <Text style={styles.name}>{item.name}</Text>
          {!!item.origin && <Text style={styles.type}>{item.origin}</Text>}
          <Text style={styles.price}>{item.price}</Text>
        </TouchableOpacity>
      );
    },
    [handlePress],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        contentContainerStyle={styles.itemContainer}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductByCate;

const styles = StyleSheet.create({
  price: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: '#007537',
  },
  type: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#7D7B7B',
  },
  name: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: '#221F1F',
  },
  image: {
    width: '100%',
    height: childHeight * 0.62,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
  },
  itemContainer: {
    marginTop: 7.5,
  },
  container: {
    paddingHorizontal: 8,
  },
  singItem: {
    marginHorizontal: 16,
    marginVertical: 7.5,
    width: childWidth,
    height: childHeight,
    borderRadius: 8,
  },
});

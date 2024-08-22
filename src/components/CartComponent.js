import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

const CartComponent = props => {
  const {item} = props;
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.cartContainer}>
      <TouchableOpacity
        onPress={() => setChecked(!checked)}
        style={styles.checkBox}>
        {checked ? (
          <Image source={require('../../assets/img/checked.png')} />
        ) : (
          <Image source={require('../../assets/img/square.png')} />
        )}
      </TouchableOpacity>
      <Image source={item.images[0]} style={styles.itemImage} />
      <View style={styles.infContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name} | </Text>
          <Text style={styles.type}>{item.type}</Text>
        </View>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.actContainer}>
          <View style={styles.qualityContainer}>
            <Image source={require('../../assets/img/minus.png')} />
            <Text>{item.qty}</Text>
            <Image source={require('../../assets/img/plus.png')} />
          </View>
          <TouchableOpacity>
            <Text style={styles.delete}>Xóa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartComponent;

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  itemImage: {
    width: 77,
    height: 77,
    marginLeft: 28,
  },
  infContainer: {
    marginLeft: 15,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: '#000',
  },
  type: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: 'gray',
  },
  price: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: '#007537',
  },
  actContainer: {
    flexDirection: 'row',
    gap: 38,
    alignItems: 'center',
  },
  qualityContainer: {
    flexDirection: 'row',
    gap: 19,
    alignItems: 'center',
  },
  delete: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: '#000',
    textDecorationLine: 'underline',
  },
});

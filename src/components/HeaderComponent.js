import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const HeaderComponent = props => {
  const {title, onPressGoBack, onPressGoCart} = props;
  return (
    <View style={styles.container}>
      {onPressGoBack && (
        <TouchableOpacity onPress={onPressGoBack} style={styles.backIcon}>
          <Image source={require('../../assets/img/back_outline.png')} />
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>
      {onPressGoCart && (
        <TouchableOpacity onPress={onPressGoCart} style={styles.cartIcon}>
          <Image source={require('../../assets/img/shopping_cart.png')} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  cartIcon: {
    position: 'absolute',
    right: 24,
  },
  backIcon: {
    position: 'absolute',
    left: 24,
  },
  title: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: '#221F1F',
    paddingHorizontal: 24,
    textAlign: 'center',
  },
  container: {
    height: 55,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
});

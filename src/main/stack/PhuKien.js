import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import ProductItemComponent from '../../components/SectionComponent';
import {accessories} from '../../mock_data/Product';
const PhuKien = ({navigation}) => {
  const onPressBack = () => {
    navigation.goBack();
  };
  const onPressCart = () => {
    navigation.navigate('Cart');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderComponent
        title={'PHỤ KIỆN'}
        onPressGoBack={onPressBack}
        onPressGoCart={onPressCart}
      />
      <ProductItemComponent data={accessories} />
    </View>
  );
};

export default PhuKien;

const styles = StyleSheet.create({});

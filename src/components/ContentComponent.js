import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const ContentComponent = props => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSelectedShippingMethod, setIsSelectedShippingMethod] = useState(0);
  const [isSelectedPaymentMethod, setIsSelectedPaymentMethod] = useState(0);
  const {
    text,
    placeHolder,
    value,
    onChange,
    styleMargin,
    onShipping = false,
    onPay = false,
  } = props;
  const shippingMethods = [
    {
      method: 'Giao hàng nhanh - 15.000đ',
      timeShipping: 'Dự kiến giao hàng 5-7/9',
    },
    {
      method: 'Giao hàng COD - 20.000đ',
      timeShipping: 'Dự kiến giao hàng 4-8/9',
    },
  ];

  const paymentMethods = ['Thẻ VISA/MASTERCARD', 'Thẻ ATM'];
  const onFocusInput = () => {
    setIsFocused(true);
  };
  const onBlurInput = () => {
    setIsFocused(false);
  };

  const onSelectShippingMethod = index => {
    setIsSelectedShippingMethod(index);
  };
  const onSelectPaymentMethod = index => {
    setIsSelectedPaymentMethod(index);
  };
  const renderShippingMethods = () => {
    return shippingMethods.map((method, index) => (
      <TouchableOpacity
        key={index}
        style={styles.input}
        onPress={() => onSelectShippingMethod(index)}>
        <Text
          style={[
            isSelectedShippingMethod === index
              ? {color: 'green'}
              : {color: '#000'},
          ]}>
          {method.method}
        </Text>
        <Text>{method.timeShipping}</Text>
        {isSelectedShippingMethod === index ? (
          <Image
            source={require('../../assets/img/check.png')}
            style={styles.checkIcon}
          />
        ) : (
          ''
        )}
      </TouchableOpacity>
    ));
  };

  const renderPaymentMethods = () => {
    return paymentMethods.map((method, index) => (
      <TouchableOpacity
        key={index}
        style={styles.input}
        onPress={() => onSelectPaymentMethod(index)}>
        <Text
          style={[
            isSelectedPaymentMethod === index
              ? {color: 'green'}
              : {color: '#000'},
          ]}>
          {method}
        </Text>
        {isSelectedPaymentMethod === index ? (
          <Image
            source={require('../../assets/img/check.png')}
            style={styles.checkIcon}
          />
        ) : (
          ''
        )}
      </TouchableOpacity>
    ));
  };
  return (
    <View>
      {text && (
        <Text
          style={[styles.textStyle, styleMargin && {marginTop: styleMargin}]}>
          {text}
        </Text>
      )}
      {placeHolder && (
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeHolder}
          placeholderTextColor={'#7D7B7B'}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          style={[
            styles.input,
            isFocused
              ? {
                  borderBottomColor: '#000',
                  color: '#000',
                  textDecorationLine: 'underline',
                }
              : {
                  borderBottomColor: '#ABABAB',
                  color: '#7D7B7B',
                  textDecorationLine: 'none',
                },
          ]}
        />
      )}

      {!placeHolder && !text && !onShipping && !onPay ? (
        <TextInput value={value} style={styles.input} editable={false} />
      ) : (
        ''
      )}
      {onShipping ? renderShippingMethods() : ''}
      {onPay ? renderPaymentMethods() : ''}
    </View>
  );
};

export default ContentComponent;

const styles = StyleSheet.create({
  checkIcon: {
    position: 'absolute',
    right: 0,
    top: '10%',
  },
  textStyle: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
    lineHeight: 22,
    borderBottomWidth: 0.55,
    borderBottomColor: '#000',
    paddingVertical: 4.41,
    marginTop: 15,
  },
  input: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#7D7B7B',
    borderBottomWidth: 0.55,
    borderBottomColor: '#ABABAB',
    paddingVertical: 4.41,
    marginTop: 15,
  },
});

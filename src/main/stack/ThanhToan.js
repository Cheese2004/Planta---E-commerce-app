import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import ContentComponent from '../../components/ContentComponent';

const ThanhToan = props => {
  const {navigation} = props;
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(false);
  const onPressBack = () => {
    navigation.goBack();
  };

  const onChangeAddress = data => {
    setAddress(data);
  };
  const onChangePhone = data => {
    setPhone(data);
  };

  return (
    <View>
      <HeaderComponent title={'THANH TOÁN'} onPressGoBack={onPressBack} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <ContentComponent text="Thông tin khách hàng" />
          <ContentComponent value="Tạ Thị Thu Chi" />
          <ContentComponent value="chita@gmai.com" />
          <ContentComponent
            placeHolder="Địa chỉ"
            value={address}
            onChange={onChangeAddress}
          />
          <ContentComponent
            placeHolder="Số điện thoại"
            value={phone}
            onChange={onChangePhone}
          />
          <ContentComponent text="Phương thức vận chuyển" styleMargin={30} />
          <ContentComponent onShipping={true} />
          <ContentComponent text="Phương thức thanh toán" styleMargin={30} />
          <ContentComponent onPay={true} />
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.footerRow}>
            <Text style={styles.rowText}>Tạm tính</Text>
            <Text style={[styles.rowText, {color: '#000'}]}>500.000đ</Text>
          </View>
          <View style={styles.footerRow}>
            <Text style={styles.rowText}>Phí vận chuyển</Text>
            <Text style={[styles.rowText, {color: '#000'}]}>15.000đ</Text>
          </View>
          <View style={styles.footerRow}>
            <Text style={styles.rowFinalText}>Tổng cộng</Text>
            <Text style={[styles.rowFinalText, {color: 'green'}]}>
              515.000đ
            </Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={[
                styles.btn,
                isValid
                  ? {backgroundColor: 'green'}
                  : {backgroundColor: '#ABABAB'},
              ]}>
              <Text style={styles.btnLabel}>TIẾP TỤC</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ThanhToan;

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 8,
    borderRadius: 8,
  },
  btn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnLabel: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: '#fff',
  },

  rowFinalText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: '#7D7B7B',
  },

  rowText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#7D7B7B',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3,
  },
  footerContainer: {
    marginTop: 15,
    paddingTop: 8,
  },
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    paddingHorizontal: 24,
  },
});

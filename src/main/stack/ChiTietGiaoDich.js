import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ContentComponent from '../../components/ContentComponent';
import HeaderComponent from '../../components/HeaderComponent';

const ChiTietGiaoDich = props => {
  const {navigation} = props;
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <HeaderComponent title="LỊCH SỬ GIAO DỊCH" onPressGoBack={onPressBack} />
      <View style={styles.container}>
        <Text style={styles.greenText}>Bạn đã đặt hàng thành công</Text>
        <Text style={styles.greenText}>03/09/2021</Text>
        <View style={styles.transactionBody}>
          <ContentComponent text="Thông tin khách hàng" />
          <Text>abc</Text>
          <Text>abc</Text>
          <Text>abc</Text>
          <Text>abc</Text>
          <ContentComponent text="Phương thức vận chuyển" />
          <Text>abc</Text>
          <ContentComponent text="Hình thức thanh toán" />
          <Text>abc</Text>
          <ContentComponent value="Đơn hàng đã chọn" />
        </View>
        <View style={styles.transactionFooter}>
          <View style={styles.totalRow}>
            <Text style={styles.totalText}> Đã thanh toán</Text>
            <Text style={styles.totalText}>515.000đ</Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnLabel}>Xem Cẩm nang trồng cây</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChiTietGiaoDich;

const styles = StyleSheet.create({
  transactionBody: {paddingHorizontal: 24},
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
    backgroundColor: '#007537',
  },
  btnLabel: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: '#fff',
  },
  greenText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#007537',
    lineHeight: 20,
  },
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});

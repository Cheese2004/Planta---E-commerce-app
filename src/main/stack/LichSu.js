import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import {historyTransaction} from '../../mock_data/Product';

const LichSu = props => {
  const {navigation} = props;
  const onPressBack = () => {
    navigation.goBack();
  };

  const renderTransactionHistory = item => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Image source={item.image} style={styles.imageItem} />
          <View style={styles.content}>
            {item.status == 'successful' ? (
              <Text style={styles.greenText}>Đặt hàng thành công</Text>
            ) : (
              <Text style={styles.redText}>Đã hủy đơn hàng</Text>
            )}
            <View style={styles.itemInf}>
              <Text style={styles.blackBoldStyle}>{item.name}</Text>
              {item.type ? (
                <Text style={styles.blackBoldStyle}>
                  | <Text style={styles.typeStyle}>{item.type}</Text>
                </Text>
              ) : (
                ''
              )}
            </View>
            <View>
              <Text style={styles.qtyItem}> {item.qty} sản phẩm</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <HeaderComponent title="LỊCH SỬ GIAO DỊCH" onPressGoBack={onPressBack} />
      <FlatList
        data={historyTransaction}
        renderItem={({item}) => renderTransactionHistory(item)}
        contentContainerStyle={styles.container}
        keyExtractor={item => item.od_id}
      />
    </>
  );
};

export default LichSu;

const styles = StyleSheet.create({
  qtyItem: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
  },
  typeStyle: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#7D7B7B',
    lineHeight: 20,
  },
  blackBoldStyle: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
    lineHeight: 22,
  },
  itemInf: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  redText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    color: '#FF0000',
    lineHeight: 22,
  },
  greenText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    color: '#007537',
    lineHeight: 22,
  },
  content: {gap: 2},
  imageItem: {
    width: 77,
    height: 74,
  },
  contentContainer: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  time: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
    lineHeight: 22,
  },
  timeContainer: {
    paddingBottom: 4.41,
    borderBottomWidth: 0.5,
    borderBottomColor: '#7D7B7B',
  },
  itemContainer: {
    paddingVertical: 15,
    gap: 15,
    width: '100%',
  },
  container: {
    paddingHorizontal: 48,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});

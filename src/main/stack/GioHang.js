import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import {AppContext} from '../../AppContext';
import CartComponent from '../../components/CartComponent';

const GioHang = props => {
  const {navigation} = props;
  const {cart, setCart} = useContext(AppContext);
  const [checked, setChecked] = useState(false);
  const onPressBack = () => {
    navigation.goBack();
  };
  console.log(cart);

  const onDelete = item => {
    // const index = cart.findIndex(
    //   cartItem => cartItem?.id.toString() == item.id.toString(),
    // );
    // cart.splice(index, 1);
    // setCart([...cart]);
  };
  const onPressToPayment = () => {
    navigation.navigate('Payment');
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: 'red'}}>
        <HeaderComponent title="GIỎ HÀNG" onPressGoBack={onPressBack} />
        {cart.length != 0 ? (
          <TouchableOpacity>
            <Image
              source={require('../../../assets/img/trash.png')}
              style={styles.trash}
            />
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
      <View style={styles.cartBody}>
        {cart.length == 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Giỏ hàng của bạn hiện đang trống
            </Text>
          </View>
        ) : (
          ''
        )}
        <ScrollView showsVerticalScrollIndicator={false}>
          {cart.map((item, index) => {
            return <CartComponent item={item} key={index} />;
          })}
        </ScrollView>
        {cart.length > 0 ? (
          <View style={styles.cartFooter}>
            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Tạm tính</Text>
              <Text style={styles.total}>25000đ</Text>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn} onPress={onPressToPayment}>
                <Text style={styles.btnLabel}>TIẾN HÀNH THANH TOÁN</Text>
                <Image
                  source={require('../../../assets/img/white_arrow.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          ''
        )}
      </View>
    </ScrollView>
  );
};

export default GioHang;

const styles = StyleSheet.create({
  cartFooter: {
    marginHorizontal: 24,
    marginTop: '140%',
  },
  btnContainer: {
    marginTop: 12,
    borderRadius: 8,
  },
  btn: {
    width: '100%',
    height: 50,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  total: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: '#000',
  },
  footerText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#000',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: '#000',
    textAlign: 'center',
  },
  empty: {
    marginTop: 15,
  },
  trash: {
    position: 'absolute',
    top: -40,
    right: 24,
  },
  container: {width: '100%', height: '100%', backgroundColor: '#fff'},
  cartItem: {
    marginVertical: 15,
    flexDirection: 'row',
  },

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

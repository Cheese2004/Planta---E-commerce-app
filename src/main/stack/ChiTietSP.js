import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {useNavigation} from '@react-navigation/native';
import HeaderComponent from '../../components/HeaderComponent';
import {AppContext} from '../../AppContext';
const ChiTietSP = props => {
  const {navigation, route} = props;
  const {productItem} = route.params;
  const {cart} = useContext(AppContext);
  const [quantity, setQuantity] = useState(0);
  const initialPrice = productItem.price;
  const [temporaryTotal, setTemporaryTotal] = useState(initialPrice);
  const images = productItem.images;
  const onPressBack = () => {
    navigation.goBack();
  };
  const onPressCart = () => {
    navigation.navigate('Cart');
  };

  const updateTemporaryTotal = newQuantity => {
    setTemporaryTotal(initialPrice * newQuantity);
  };
  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      updateTemporaryTotal(quantity - 1);
    }
  };
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    updateTemporaryTotal(quantity + 1);
  };
  const onPressAddToCart = () => {
    const newObj = {...productItem, qty: quantity};
    if (quantity > 0) {
      cart.push(newObj);
      navigation.navigate('Cart');
    } else {
      return;
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderComponent
        title={productItem.name}
        onPressGoBack={onPressBack}
        onPressGoCart={onPressCart}
      />
      <ScrollView>
        <View style={styles.imgContainer}>
          <Image source={{uri: productItem.image}} />
        </View>
        <View style={styles.contaibutontree}>
          <View style={styles.contentbuttontree}>
            <TouchableOpacity style={styles.bottontree}>
              <Text style={styles.textbuttontree}>Cây trồng</Text>
            </TouchableOpacity>
            {productItem.type ? (
              <TouchableOpacity style={styles.bottontree}>
                <Text style={styles.textbuttontree}>{productItem.type}</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.emptyText}></Text>
            )}
          </View>
        </View>
        <View style={styles.contentext}>
          <Text style={styles.mony}>{productItem.price}</Text>
        </View>
        <View style={styles.contenchitiet}>
          <View style={styles.contaichitiet}>
            <Text style={styles.textchitiet}>Chi tiết sản phẩm</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: 'black',
            }}></View>
          <View style={styles.contaichitiet}>
            <Text style={styles.textkc}>Kích cỡ</Text>
            <Text style={styles.textkc}>{productItem.size}</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 0.7,
              backgroundColor: 'black',
            }}></View>
          <View style={styles.contaichitiet}>
            <Text style={styles.textkc}>Xuất xứ</Text>
            <Text style={styles.textkc}>{productItem.origin}</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 0.7,
              backgroundColor: 'black',
            }}></View>
          <View style={styles.contaichitiet}>
            <Text style={styles.textkc}>Tình trạng</Text>
            <Text style={styles.textsp}>Còn {productItem.qty} sp</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 0.7,
              backgroundColor: 'black',
            }}></View>
        </View>
        <View style={styles.contaifooter}>
          <View style={styles.contaitamtinh}>
            <View>
              <Text style={styles.textspdachon}>Đã chọn 1 sản phẩm</Text>
              <View style={styles.contaisquare}>
                <TouchableOpacity onPress={handleDecreaseQuantity}>
                  <Image
                    source={require('../../../assets/img/minus.png')}
                    style={styles.iconsquare}
                  />
                </TouchableOpacity>
                <View style={styles.contaitextsquare}>
                  <Text style={styles.textsquare}>{quantity}</Text>
                </View>
                <TouchableOpacity onPress={handleIncreaseQuantity}>
                  <Image
                    source={require('../../../assets/img/plus.png')}
                    style={styles.iconsquare}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.texttamtinh}>Tạm tính</Text>
              <View style={styles.contaitientamtinh}>
                <Text style={styles.tientamtinh}>{temporaryTotal}đ</Text>
              </View>
            </View>
          </View>
          <View
            style={[
              quantity > 0
                ? {backgroundColor: '#007537'}
                : {backgroundColor: '#ABABAB'},
              styles.contaibuttonchonmua,
            ]}>
            <TouchableOpacity
              style={styles.buttonchonmua}
              onPress={onPressAddToCart}>
              <Text style={styles.textchonmua}>Chọn mua</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChiTietSP;

const styles = StyleSheet.create({
  leftArrow: {
    position: 'absolute',
    top: 123,
    left: 24,
  },
  rightArrow: {
    position: 'absolute',
    top: 123,
    right: 24,
  },
  imgContainer: {
    width: '100%',
    height: 270,
    justifyContent: 'center',
  },
  paginationBoxStyle: {
    bottom: 0,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  headerimage: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  sliderContainer: {
    width: 337,
    height: 270,
    flexDirection: 'row',
    position: 'absolute',
    marginEnd: 4,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  contaibutontree: {
    width: '100%',
    height: 58,
  },
  contentbuttontree: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 48,
    paddingVertical: 15,
    gap: 10,
    alignSelf: 'stretch',
  },
  bottontree: {
    width: 'auto',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#009245',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  textbuttontree: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    lineHeight: 22,
  },
  contentext: {
    width: '100%',
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 17,
    alignSelf: 'stretch',
  },
  mony: {
    width: 279,
    height: 34,
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#007537',
  },
  contenchitiet: {
    width: '100%',
    height: 173,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 17,
    paddingHorizontal: 40,
    paddingVertical: 48,
    alignSelf: 'stretch',
  },
  textchitiet: {
    width: 'auto',
    height: 'auto',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#3a3a3a',
    lineHeight: 22,
  },
  contaichitiet: {
    width: '100%',
    height: 'auto',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  textkc: {
    width: 'auto',
    height: 'auto',
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#3a3a3a',
  },
  textsp: {
    width: 'auto',
    height: 'auto',
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#007537',
  },
  contaifooter: {
    width: '100%',
    height: 'auto',
    paddingTop: 0,
    paddingHorizontal: 24,
    paddingBottom: 15,

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contaitamtinh: {
    width: '100%',
    height: 82,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 2,
    paddingVertical: 15,
    alignSelf: 'stretch',
  },
  texttamtinh: {
    width: 92,
    textAlign: 'right',
    height: 'auto',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#000',
    lineHeight: 20,
  },
  contaitientamtinh: {
    height: 36,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    flexShrink: 0,
    alignSelf: 'stretch',
  },
  tientamtinh: {
    width: 92,
    height: 36,
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#000',
    lineHeight: 34,
    textAlign: 'right',
  },
  textspdachon: {
    width: 'auto',
    height: 'auto',
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#000',
  },
  contaisquare: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  iconsquare: {
    width: 30,
    height: 30,
    flexShrink: 0,
  },
  contaitextsquare: {
    display: 'flex',
    width: 8,
    height: 30,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textsquare: {
    lineHeight: 20,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#000',
    textAlign: 'center',
  },
  contaibuttonchonmua: {
    width: '100%',
    display: 'flex',
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ABABAB',
    borderRadius: 10,
    alignSelf: 'stretch',
  },
  // buttonchonmua: {
  //   width: '100%',
  //   height: 'auto',
  //   borderRadius: 10,
  //   alignContent: 'center',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  textchonmua: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: 'white',
    lineHeight: 22,
    textTransform: 'uppercase',
  },
  emptyText: {
    width: 0,
    height: 0,
  },
});

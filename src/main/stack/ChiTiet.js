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
const ChiTiet = props => {
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
          <View style={styles.sliderContainer}>
            <SliderBox
              images={images}
              sliderBoxHeight={270}
              sliderBoxWidth={337}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              dotColor="#221F1F"
              inactiveDotColor="#ABABAB"
              paginationBoxStyle={styles.paginationBoxStyle}
              autoplayInterval={2000}
              circleLoop
              resizeMode="stretch"
            />
          </View>
          <Image
            source={require('../../../assets/img/bt_left.png')}
            style={styles.leftArrow}
          />
          <Image
            source={require('../../../assets/img/bt_right.png')}
            style={styles.rightArrow}
          />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.typeContainer}>
            <Text style={styles.typeItem}>Cây trồng</Text>
            {productItem.type ? (
              <Text style={styles.typeItem}>{productItem.type}</Text>
            ) : (
              ''
            )}
          </View>
          <View>
            <Text style={styles.price}>{productItem.price}</Text>
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.title}>Chi tiết sản phẩm</Text>
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.infText}>Kích cỡ</Text>
            <Text style={styles.infText}>{productItem.size}</Text>
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.infText}>Xuất xứ</Text>
            <Text style={styles.infText}>{productItem.origin}</Text>
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.infText}>Tình trạng</Text>
            <Text style={styles.stockText}>Còn 156 sp</Text>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.totalContainer}>
            <View style={styles.quantityContainer}>
              <Text style={styles.footerText}>Đã chọn 1 sản phẩm</Text>
              <View style={styles.quantityBox}>
                <TouchableOpacity onPress={handleDecreaseQuantity}>
                  <Image
                    source={require('../../../assets/img/minus.png')}
                    style={styles.iconsquare}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.quantity}>{quantity}</Text>
                </View>
                <TouchableOpacity onPress={handleIncreaseQuantity}>
                  <Image
                    source={require('../../../assets/img/plus.png')}
                    style={styles.iconsquare}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.footerText}>Tạm tính</Text>
              <Text style={styles.totalPrice}>{temporaryTotal}đ</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={[
                quantity > 0
                  ? {backgroundColor: '#007537'}
                  : {backgroundColor: '#ABABAB'},
                styles.actButton,
              ]}
              onPress={onPressAddToCart}>
              <Text style={styles.btnLabel}>Chọn mua</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChiTiet;

const styles = StyleSheet.create({
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: 24,
    fontFamily: 'Lato',
    fontWeight: '500',
    lineHeight: 34,
    color: 'black',
  },
  priceContainer: {
    gap: 5,
    justifyContent: 'center',
  },
  quantity: {
    fontSize: 16,
    fontFamily: 'Lato',
    fontWeight: '400',
    lineHeight: 20,
    color: 'black',
  },
  quantityBox: {
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
  },
  quantityContainer: {
    gap: 5,
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    fontFamily: 'Lato',
    fontWeight: '400',
    lineHeight: 20,
    color: 'black',
  },
  infText: {
    fontSize: 14,
    fontFamily: 'Lato',
    fontWeight: '400',
    lineHeight: 20,
    color: 'black',
  },
  stockText: {
    fontSize: 14,
    fontFamily: 'Lato',
    fontWeight: '400',
    lineHeight: 20,
    color: '#007537',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Lato',
    fontWeight: '500',
    lineHeight: 22,
    color: 'black',
  },
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#ABABAB',
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
  bodyContainer: {
    paddingHorizontal: 48,
    marginTop: 15,
    gap: 15,
  },
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
    justifyContent: 'space-between',
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
  typeContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  typeItem: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    lineHeight: 22,
    borderRadius: 10,
    backgroundColor: '#009245',
    color: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: '#007537',
    lineHeight: 34,
  },

  footerContainer: {
    marginTop: 25,
    paddingHorizontal: 24,
    gap: 15,
  },

  iconsquare: {
    width: 30,
    height: 30,
  },

  actButton: {
    width: '100%',
    height: 50,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ABABAB',
    borderRadius: 10,
  },

  btnLabel: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    color: 'white',
    lineHeight: 22,
    textTransform: 'uppercase',
  },
});

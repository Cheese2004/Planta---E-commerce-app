import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ProductItemComponent from '../../components/SectionComponent';
import ServiceComponent from '../../components/ServiceComponent';
import {plants, accessories, services} from '../../mock_data/Product';
import {useDispatch, useSelector} from 'react-redux';
import {LayDanhMucCon} from '../../reducers/SubCateSlice';
const {width, height} = Dimensions.get('window');

const TrangChu = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const goToCate = () => {
    navigation.navigate('Plants');
    dispatch(LayDanhMucCon('65fc311abba37cd3726f408c'));
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* <View style={styles.container}> */}
      <View style={styles.headerContainer}>
        <Image
          source={require('../../../assets/img/banner.png')}
          style={styles.bannerImage}
        />
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerText}>
            Planta - toả sáng không gian nhà bạn
          </Text>
          <TouchableOpacity style={styles.bannerLink}>
            <Text style={styles.linkText}>Xem hàng mới về</Text>
            <Image source={require('../../../assets/img/arrowRight.png')} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}
          style={styles.cartButton}>
          <Image source={require('../../../assets/img/shopping_cart.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <View style={{marginTop: 30}}>
          <ProductItemComponent title={'Cây trồng'} data={plants} />
        </View>
        <TouchableOpacity onPress={goToCate}>
          <Text style={styles.link}>Xem thêm Cây trồng</Text>
        </TouchableOpacity>
        <View style={{marginTop: 30}}>
          <ProductItemComponent title={'Phụ kiện'} data={accessories} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Accessories');
          }}>
          <Text style={styles.link}>Xem thêm Phụ kiện</Text>
        </TouchableOpacity>
        <ServiceComponent title={'Combo chăm sóc (mới)'} data={services} />
      </View>
      {/* </View> */}
    </ScrollView>
  );
};

export default TrangChu;

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    textDecorationLine: 'underline',
    color: '#221F1F',
    textAlign: 'right',
    marginRight: 30,
  },
  cartButton: {
    position: 'absolute',
    top: 24,
    right: 25,
    width: 48,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    backgroundColor: '#fff',
  },
  bannerLink: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  linkText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: '#007537',
  },
  bannerTextContainer: {
    width: 223,
    position: 'absolute',
    left: 25,
    top: 31,
    gap: 7,
  },
  bannerText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 37,
    color: '#221F1F',
  },
  container: {
    width: '100%',
    height: '100%',
    paddingBottom: 15,
    backgroundColor: '#fff',
  },
  headerContainer: {
    width: '100%',
    height: height * 0.34,
    // flex: 1,
    backgroundColor: '#F6F6F6',
  },
  bodyContainer: {
    flex: 1,
  },
  bannerImage: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});

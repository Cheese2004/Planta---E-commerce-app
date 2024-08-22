import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {plants, newProducts} from '../../mock_data/Product';
import ProductItemComponent from '../../components/SectionComponent';
import HeaderComponent from '../../components/HeaderComponent';

import {useDispatch, useSelector} from 'react-redux';
import {LayDanhSachSanPham} from '../../reducers/ListProductSlice';
import ProductByCateComponent from '../../components/ProductByCateComponent';

const CayTrong = ({navigation}) => {
  const dispatch = useDispatch();
  const {subCateData, subCateStatus} = useSelector(state => state.getSubCate);
  const {listProData, listProStatus} = useSelector(state => state.getListPro);
  useEffect(() => {
    if (subCateStatus == 'succeeded') {
      {
        console.log(subCateStatus, subCateData);
      }
    }
  }, [subCateStatus]);

  let apiSubCateData = subCateData.data;
  console.log(apiSubCateData);
  let arrCate = [{catId: '', catName: 'Tất cả'}];
  apiSubCateData.forEach(item => {
    let obj = {catId: item._id, catName: item.name};
    // console.log(obj);
    arrCate.push(obj);
  });
  // console.log(arrCate);

  const [cateSelected, setCateSelected] = useState(arrCate[0].catName);
  const onPressBack = () => {
    navigation.goBack();
  };
  const onPressCart = () => {
    navigation.navigate('Cart');
  };

  useEffect(() => {
    console.log(listProData, listProStatus);
  }, [listProStatus]);
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderComponent
          title={'CÂY TRỒNG'}
          onPressGoBack={onPressBack}
          onPressGoCart={onPressCart}
        />
        <View>
          <View style={styles.tabsContainer}>
            {arrCate.map((item, index) => {
              // console.log(item);
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      setCateSelected(item.catName);
                      console.log(item);
                      dispatch(LayDanhSachSanPham(item.catId));
                      console.log(
                        'danh sách sản phẩm theo danh mục: ',
                        listProData,
                      );
                    }}>
                    <Text
                      style={
                        item.catName == cateSelected
                          ? styles.itemSelected
                          : styles.itemCate
                      }>
                      {item.catName}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          {listProData?.data?.length > 0 ? (
            <ProductByCateComponent data={listProData.data} />
          ) : (
            ''
          )}
        </View>
      </View>
    </>
  );
};

export default CayTrong;

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  itemSelected: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#009245',
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 20,
    borderRadius: 4,
  },
  itemCate: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#7D7B7B',
  },
});

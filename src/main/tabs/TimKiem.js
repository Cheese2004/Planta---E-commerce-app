import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import {searchHistory} from '../../mock_data/Product';
import SearchItemComponent from '../../components/SearchItemComponent';

import {useDispatch, useSelector} from 'react-redux';
import {TimKiemSanPham} from '../../reducers/SearchSlice';

const TimKiem = props => {
  const {navigation} = props;
  const [searchRequest, setSearchRequest] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [showHistory, setShowHistory] = useState(true);

  const dispatch = useDispatch();
  const {searchStatus, searchData} = useSelector(state => state.search);

  useEffect(() => {
    console.log(searchStatus, searchData);
    if (searchStatus == 'succeeded') {
      try {
        if (!searchData.status) {
          setNotFound(true);
        } else {
          setIsShow(true);
          setNotFound(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchStatus]);
  const onPressBack = () => {
    navigation.goBack();
  };

  const onChangeSearchInput = text => {
    // setShowHistory(false);
    setSearchRequest(text);
    setIsDelete(false);
    setNotFound(false);
  };

  // const onPressItem = data => {
  //   setSearchRequest(data);
  //   setShowHistory(false);
  // };
  const onPressSearch = () => {
    if (searchRequest != '') {
      setIsDelete(true);
    }
    dispatch(TimKiemSanPham(searchRequest));
  };
  const onDelete = () => {
    setIsShow(false);
    setIsDelete(false);
    setSearchRequest('');
  };
  return (
    <View>
      <HeaderComponent title="TÌM KIẾM" onPressGoBack={onPressBack} />
      <View style={styles.container}>
        <View>
          <TextInput
            placeholder="Tìm kiếm"
            placeholderTextColor={'#ABABAB'}
            style={styles.inputSearch}
            value={searchRequest}
            onChangeText={onChangeSearchInput}
          />
          {isDelete ? (
            <TouchableOpacity onPress={onDelete}>
              <Image
                source={require('../../../assets/img/quit.png')}
                style={styles.inputIcon}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={onPressSearch}>
              <Image
                source={require('../../../assets/img/search.png')}
                style={styles.inputIcon}
              />
            </TouchableOpacity>
          )}
        </View>

        {notFound ? <Text>Không tìm thấy sản phẩm</Text> : ''}
        {isShow ? <SearchItemComponent item={searchData.product} /> : ''}
        {/* {showHistory ? (
          <View style={styles.historyContainer}>
            <Text style={styles.historyTitle}>Tìm kiếm gần đây</Text>
            {searchHistory.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.historyItem}
                  key={index}
                  onPress={onPressItem(item)}>
                  <View style={styles.historyContent}>
                    <Image source={require('../../../assets/img/clock.png')} />
                    <Text style={styles.historyText}>{item}</Text>
                  </View>
                  <View>
                    <Image source={require('../../../assets/img/quit.png')} />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          ''
        )} */}
      </View>
    </View>
  );
};

export default TimKiem;

const styles = StyleSheet.create({
  historyText: {
    fontFamily: '',
  },
  historyContent: {
    flexDirection: 'row',
    gap: '10',
    alignItems: 'center',
  },
  historyItem: {
    marginTop: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyTitle: {},
  historyContainer: {
    marginTop: 40,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: '#000',
  },
  inputIcon: {
    position: 'absolute',
    right: 0,
    bottom: 10,
  },
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 48,
    backgroundColor: '#fff',
  },
  inputSearch: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#000',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    lineHeight: 20,
    color: '#000',
  },
});

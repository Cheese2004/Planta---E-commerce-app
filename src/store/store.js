import {configureStore} from '@reduxjs/toolkit';
import subCateReducer from '../reducers/SubCateSlice';
import registerReducer from '../reducers/RegisterSlice';
import loginReducer from '../reducers/LoginSlice';
import searchReducer from '../reducers/SearchSlice';
import listProductReducer from '../reducers/ListProductSlice';
import parentCateReducer from '../reducers/ParentCateSlice';
export const store = configureStore({
  reducer: {
    register: registerReducer,  
    login: loginReducer,
    search: searchReducer,
    getListPro: listProductReducer,
    getSubCate: subCateReducer,
    getParentCate: parentCateReducer,
  },
});
export default store;

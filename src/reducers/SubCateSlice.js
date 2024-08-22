import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AxiosInstance from '../helpers/AxiosInstance';

export const LayDanhMucCon = createAsyncThunk(
  'category/subCate',
  async data => {
    try {
      const response_ = await AxiosInstance().get(
        `/categories/api/getCateByParentId?parentCateId=${data}`,
      );
      return response_;
    } catch (error) {
      console.log(error);
    }
  },
);

//tạo Slice quản lý trạng thái khi gọi hàm DangKyTaiKhoan
export const subCateSlice = createSlice({
  name: 'getSubCate',
  initialState: {
    subCateData: {},
    subCateStatus: 'khoitao',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(LayDanhMucCon.pending, (state, action) => {
        state.subCateStatus = 'loading';
      })
      .addCase(LayDanhMucCon.fulfilled, (state, action) => {
        state.subCateStatus = 'succeeded';
        state.subCateData = action.payload;
      })
      .addCase(LayDanhMucCon.rejected, (state, action) => {
        state.subCateStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default subCateSlice.reducer;

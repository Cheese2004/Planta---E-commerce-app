import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AxiosInstance from '../helpers/AxiosInstance';
export const LayDanhSachSanPham = createAsyncThunk(
  'product/productsByCate',

  async data => {
    try {
      const response_ = await AxiosInstance().get(
        `/products/getProductByCatId?catId=${data}`,
      );
      return response_;
    } catch (error) {
      console.log(error);
    }
  },
);

export const listProductSlice = createSlice({
  name: 'getListPro',
  initialState: {
    listProData: {},
    listProStatus: 'khởi tạo',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(LayDanhSachSanPham.pending, (state, action) => {
        state.listProStatus = 'loading';
      })
      .addCase(LayDanhSachSanPham.fulfilled, (state, action) => {
        state.listProStatus = 'succeeded';
        state.listProData = action.payload;
      })
      .addCase(LayDanhSachSanPham.rejected, (state, action) => {
        state.listProStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default listProductSlice.reducer;

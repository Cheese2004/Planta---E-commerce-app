import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AxiosInstance from '../helpers/AxiosInstance';

export const TimKiemSanPham = createAsyncThunk('product/search', async data => {
  try {
    const response_ = await AxiosInstance().get(
      `/products/getProductByName?name=${data}`,
    );
    return response_;
  } catch (error) {
    console.log(error);
  }
});

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchData: {},
    searchStatus: 'khởi tạo',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(TimKiemSanPham.pending, (state, action) => {
        state.searchStatus = 'loading';
      })
      .addCase(TimKiemSanPham.fulfilled, (state, action) => {
        state.searchStatus = 'succeeded';
        state.searchData = action.payload;
      })
      .addCase(TimKiemSanPham.rejected, (state, action) => {
        state.searchStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default searchSlice.reducer;

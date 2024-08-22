import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const LayDanhMucCha = createAsyncThunk(
  'category/parentCate',
  async () => {
    try {
      const response_ = await AxiosInstance().get(
        '/categories/api/getParentCate',
      );
      return response_;
    } catch (error) {
      console.log(error);
    }
  },
);

//tạo Slice quản lý trạng thái khi gọi hàm DangKyTaiKhoan
export const parentCateSlice = createSlice({
  name: 'getParentCate',
  initialState: {
    parentCateData: {},
    parentCateStatus: 'khoitao',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(LayDanhMucCha.pending, (state, action) => {
        state.parentCateStatus = 'loading';
      })
      .addCase(LayDanhMucCha.fulfilled, (state, action) => {
        state.parentCateStatus = 'succeeded';
        state.parentCateData = action.payload;
      })
      .addCase(LayDanhMucCha.rejected, (state, action) => {
        state.parentCateStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default parentCateSlice.reducer;

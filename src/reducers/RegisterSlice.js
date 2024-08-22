import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AxiosInstance from '../helpers/AxiosInstance';
//tạo hàm DangKyTaiKhoan để thực hiện chức năng gọi API đăng ký tài khoản
export const DangKyTaiKhoan = createAsyncThunk('user/register', async data => {
  try {
    const response = await AxiosInstance().post('users/register', data);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    registerData: {},
    registerStatus: 'khởi tạo',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(DangKyTaiKhoan.pending, (state, action) => {
        state.registerStatus = 'loading';
      })
      .addCase(DangKyTaiKhoan.fulfilled, (state, action) => {
        state.registerStatus = 'succeeded';
        state.registerData = action.payload;
      })
      .addCase(DangKyTaiKhoan.rejected, (state, action) => {
        state.registerStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default registerSlice.reducer;

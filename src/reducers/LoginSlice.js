import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AxiosInstance from '../helpers/AxiosInstance';
export const DangNhapTaiKhoan = createAsyncThunk(
  'user/login',

  async data => {
    try {
      const response = await AxiosInstance().post('users/login', data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  // const response = await fetch('http://192.168.1.61:3000/users/login', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });
  // if (!response.ok) {
  //   throw new Error('Failed');
  // }
  // return await response.json();
);

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loginData: {},
    loginStatus: 'khởi tạo',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(DangNhapTaiKhoan.pending, (state, action) => {
        state.loginStatus = 'loading';
      })
      .addCase(DangNhapTaiKhoan.fulfilled, (state, action) => {
        state.loginStatus = 'succeeded';
        state.loginData = action.payload;
      })
      .addCase(DangNhapTaiKhoan.rejected, (state, action) => {
        state.loginStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default loginSlice.reducer;

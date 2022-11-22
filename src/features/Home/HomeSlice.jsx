import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
const initialState = {
  count: 1,
};
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    increment: (state, action) => {
      if (state.count < action.payload) {
        state.count += 1;
      } else {
        message.error("So luong san pham khong duoc qua 10");
      }
    },
    decrement: (state) => {
      if (state.count > 1) {
        state.count -= 1;
      } else {
        message.error("So luong san phan khong duoc nho hon 1");
      }
    },
  },
});
export const { increment, decrement } = homeSlice.actions;
export default homeSlice.reducer;

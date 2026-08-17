import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    fName: "",
    lName: "",
    photo: "",
    mobile: "",
    email: "",
    loggedIn: false,
  },
  reducers: {
    login: () => {},
    logout: () => {},
    update: () => {},
  },
});

export default userSlice.reducer;

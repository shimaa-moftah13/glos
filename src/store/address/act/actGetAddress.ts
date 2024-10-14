// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { axiosErrorHandler } from "@utils";
// import { TUsers } from "@types";

// type TResponse = TUsers[];

// const actGetAddress = createAsyncThunk(
//   "users/actGetAddress",
//   async (_, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const response = await axios.get<TResponse>('http://localhost:5005/users');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(axiosErrorHandler(error));
//     }
//   }
// );



// export default actGetAddress;
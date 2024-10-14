// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { axiosErrorHandler } from "@utils";
// import { TUsers } from "@types";

// type TResponse = TUsers[];

// const actAddNewAddress = createAsyncThunk(
//     'users/addAddress',
//     async (_, thunkAPI) => {
//         const { rejectWithValue, signal } = thunkAPI;
//         try {
//             const response = await axios.patch<TResponse>(`http://localhost:3001/users/${userId}`, {
//                 address: newAddress,
//         } catch (error) {
//           return rejectWithValue(axiosErrorHandler(error));
//         }
//     }
//   );


// export default actAddNewAddress;
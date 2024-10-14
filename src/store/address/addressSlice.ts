
// import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import axios from 'axios';
// import {  TLoading, isString } from "@types";


// // interface Address {
// //     street: string;
// //     city: string;
// //     zip: string;
// //   }
  
// //   interface TUsers {
// //     id: number;
// //     email: string;
// //     firstName: string;
// //     lastName: string;

// //   }
// // interface IAddressState {
// //   records: TUsers[];
// //   loading: TLoading;
// //   error: string | null;
  
// // }
// interface Address {
//     street: string;
//     city: string;
//     zip: string;
//   }
  
//   interface User {
//     id: number;
//     email: string;
//     firstName: string;
//     lastName: string;
//     address: Address;
//   }
  
//   interface IAddressState {
//     records: User[];
//     loading: TLoading;
//     error: string | null;
// }
    

// const initialState: IAddressState = {
//   records: [],
//   loading: "idle",
//   error: null,
// };

// export const fetchUsers = createAsyncThunk(
//     'users/fetchUsers',
//      async () => {
//     const response = await axios.get('http://localhost:5005/users');
//     return response.data;
//   });
  
//   // Async action to add a new address
//   export const addAddress = createAsyncThunk(
//     'users/addAddress',
//     async ({ userId, newAddress }: { userId: number; newAddress: Address }) => {
//       const response = await axios.patch(`http://localhost:5005/users/${userId}`, {
//         address: newAddress,
//       });
//       return response.data;
//     }
//   );

// const addressSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     addressRecordsCleanUp: (state) => {
//       state.records = [];
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//     .addCase(fetchUsers.pending, (state) => {
//       state.loading = "pending";
//       state.error = null;
//     })
//     .addCase(fetchUsers.fulfilled, (state, action) => {
//       state.loading = "succeeded";
//       state.records = action.payload;
//     });
//     builder.addCase(fetchUsers.rejected, (state, action) => {
//       state.loading = "failed";
//       if (isString(action.payload)) {
//         state.error = action.payload;
//       }
//     });
//     builder.addCase(addAddress.fulfilled, (state, action: PayloadAction<User>) => {
//         const index = state.records.findIndex((user) => user.id === action.payload.id);
//         if (index !== -1) {
//           state.records[index] = action.payload;
//         }
//     })
//   },
// });


// export default addressSlice.reducer






// import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// interface Address {
//   street: string;
//   city: string;
//   zip: string;
// }

// interface User {
//   id: number;
//   email: string;
//   firstName: string;
//   lastName: string;
//   address: Address;
// }

// interface UsersState {
//   users: User[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: UsersState = {
//   users: [],
//   loading: false,
//   error: null,
// };

// // Async action to fetch users
// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//   const response = await axios.get('http://localhost:5005/users');
//   return response.data;
// });

// const userSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
//         state.users = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.error = action.error.message || 'Failed to fetch users';
//         state.loading = false;
//       });
//   },
// });

// export default userSlice.reducer;


import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import type { User } from '@prisma/client'
const initialState: User = {
    id: -1,
    firstname:"",
    lastname: "",
    dateOfBirth: null,
    gender: null,
    email: "",
    password: "",
    profilePicture: "",
    relationship: null,
    occupation: null,
    education: null,
    location: null,
    bio: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: User, action: PayloadAction<User>) => {
      return action.payload;
    },
    clearUser: () => {
        const user: User = {
            id: -1,
            firstname:"",
            lastname: "",
            dateOfBirth: null,
            gender: null,
            email: "",
            password: "",
            profilePicture: "",
            relationship: null,
            occupation: null,
            education: null,
            location: null,
            bio: null
        };
      return user;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

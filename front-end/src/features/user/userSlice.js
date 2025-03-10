import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData :{}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.userData = {...action.payload}
        }
    }
})

export const { setData} = userSlice.actions;
export default userSlice.reducer;
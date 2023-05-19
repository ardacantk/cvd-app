import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchCovid = createAsyncThunk("covid", async () => {
    const res = await axios("https://api.covidtracking.com/v1/us/daily.json")
    
    return res.data
})

export const covidSlice = createSlice({
    name: "covid",
    initialState: {
        items: [],
        isLogin: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCovid.fulfilled, (state, action) => {
            state.items = action.payload
        })
    }
}) 

export const {} = covidSlice.actions;
export default covidSlice.reducer;
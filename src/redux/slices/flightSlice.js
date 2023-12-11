import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightActions";


const initialState = { flights: [], isLoading: true, isError: false}


const flightSlice = createSlice({    
    name: 'flight',
    initialState,
    extraReducers: (builder) => {
        builder
        // cevap beklerken çalışır
        .addCase(getFlights.pending, (state) => {
            state.isLoading = true;
        })
        // cevap olumlu geldiğinde
        .addCase(getFlights.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.flights = action.payload;
        })

        // cevap olumsuz geldiğinde
        .addCase(getFlights.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
            alert('Üzgünüz bir hata oluştu...');
        });
    },

});

export default flightSlice.reducer;
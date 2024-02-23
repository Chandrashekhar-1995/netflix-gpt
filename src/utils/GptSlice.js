import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch : false,
        movieName : null,
        movieResults : null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch= !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const {moviesName, movieResults} = action.payload;
            state.movieName = moviesName;
            state.movieResults = movieResults
        }
    },
});

export const {toggleGptSearchView, addGptMovieResult} =GptSlice.actions;

export default GptSlice.reducer;
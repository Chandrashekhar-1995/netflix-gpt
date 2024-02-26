import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        moviesName:null,
        movieResults:null,

    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const {moviesName, movieResults } = action.payload;
            state.moviesName = moviesName;
            state.movieResults = movieResults;
          },
        clearGptSearchPage: (state) =>{
            state.moviesName = null;
            state.movieResults = null;
        }
    },

});

export const {toggleGptSearchView, addGptMovieResult, clearGptSearchPage} = gptSlice.actions;
export default gptSlice.reducer;
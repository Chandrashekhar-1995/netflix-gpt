import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./GptSlice";

const appStore =configureStore(
    {
        reducer:{
            user: userReducer, 
            movies: moviesReducer,
            gpt: gptReducer,
        }
    }
);

export default appStore;
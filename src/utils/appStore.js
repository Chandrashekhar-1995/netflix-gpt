import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./GptSlice";
import configReducer from "./configSlice";

const appStore =configureStore(
    {
        reducer:{
            user: userReducer, 
            movies: moviesReducer,
            gpt: gptReducer,
            config: configReducer,
        }
    }
);

export default appStore;
import { configureStore } from '@reduxjs/toolkit';
import secretWordReducer from "./createWord";
import letterReducer from "./alphabet";
import counterReducer from "./counter";

export default configureStore({
    reducer: {
        alphabet: letterReducer,
        secretWord: secretWordReducer,
        counter: counterReducer,
    }
})
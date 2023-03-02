import { createSlice } from '@reduxjs/toolkit';

export const secretWordSlice = createSlice({
    name: "secretWord",
    initialState: {
        secretWordStr: "word",
        hiddenWordStr: []
    },

    reducers: {
        newSecretWord: (state, action) => {
            state.secretWordStr = action.payload
        },

        blankString: (state, action) => {
            state.hiddenWordStr = action.payload
        },

        updateHiddenWord: (state, action) => {
            let letter = action.payload.letter;
            let indexNums = action.payload.indexArr;
            console.log(letter)
            indexNums.forEach((num) => {
                state.hiddenWordStr[num] = letter;
            });
        },
    },
});

export const {newSecretWord, blankString, updateHiddenWord} = secretWordSlice.actions;
export default secretWordSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        incorrectGuesses: 0,
        currentStreak: 0,
        bestStreak: 0
    },

    reducers: {
        incorrectGuess: (state) => {
            state.incorrectGuesses += 1;
        },

        increaseStreak: (state) => {
            state.currentStreak += 1;
            if (state.currentStreak > state.bestStreak) {
                state.bestStreak += 1;
            }
        },

        resetGuesses: (state) => {
            state.incorrectGuesses = 0;
        },

        resetStreak: (state) => {
            state.currentStreak = 0;
        },
    },
});

export const {incorrectGuess, increaseStreak, resetGuesses, resetStreak} = counterSlice.actions;
export default counterSlice.reducer;
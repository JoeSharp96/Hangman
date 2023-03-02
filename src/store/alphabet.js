import { createSlice } from '@reduxjs/toolkit';

export const letterSlice = createSlice({
    name: "alphabet",
    initialState: {
        letters: {
            a: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            b: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            c: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            d: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            e: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            f: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            g: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            h: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            i: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            j: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            k: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            l: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            m: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            n: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            o: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            p: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            q: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            r: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            s: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            t: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            u: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            v: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            w: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            x: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            y: {
                inSecretWord: false,
                hasBeenClicked: false
            },
            z: {
                inSecretWord: false,
                hasBeenClicked: false
            },
        },
    },

    reducers: {
        targetLetters: (state, action) => {
            // Loop resets all inSecretWord states to false.
            for (let x = 97; x < 123; x++) {
                state.letters[String.fromCharCode(x)].inSecretWord = false;
                state.letters[String.fromCharCode(x)].hasBeenClicked = false;
            }

            // Setting which letters contains a letter in the secret word.
            let secretWordArr = (action.payload).split("");
            secretWordArr.forEach((letter) => {
                if (letter !== "-") {
                    state.letters[letter].inSecretWord = true;
                };
            });
        },

        clicked: (state, action) => {
            let id = action.payload;
            state.letters[id].hasBeenClicked = true;
        },
    },
});

export const {targetLetters, clicked} = letterSlice.actions;
export default letterSlice.reducer;


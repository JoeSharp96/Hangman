import { useSelector } from "react-redux";

const HiddenWord = () => {
    const secretWord = useSelector((state) => state.secretWord.secretWordStr);
    const hiddenWord = useSelector((state) => state.secretWord.hiddenWordStr);
    const incorrectGuessNum = useSelector((state) => state.counter.incorrectGuesses)

    if (incorrectGuessNum < 10) {
        return (
            <h1 className="hidden-word py-3">{hiddenWord.join("").toUpperCase()}</h1>
        );
    } else {
        return (
            <h1 className="hidden-word py-3">{secretWord.toUpperCase()}</h1>
        )
    }
}

export default HiddenWord;
import { useSelector } from "react-redux";

function WinLose () {
    const secretWord = useSelector((state) => state.secretWord.secretWordStr);
    const hiddenWord = useSelector((state) => state.secretWord.hiddenWordStr);
    const incorrectGuessNum = useSelector((state) => state.counter.incorrectGuesses)

    if (secretWord === hiddenWord.join("")) {
        return (
            <h1 className="result">You Win!</h1>
        );
    } else if (incorrectGuessNum === 10) {
        return (
            <h1 className="result">You Lose!</h1>
        );
    };
};

export default WinLose;
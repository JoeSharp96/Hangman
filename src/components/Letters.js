import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector, useDispatch } from "react-redux";
import { updateHiddenWord } from "../store/createWord";
import { clicked } from '../store/alphabet';
import { incorrectGuess } from '../store/counter';
import HiddenWord from './HiddenWord';


// alphabetGenerator used to create array of letters for user input.
const alphabetGenerator = () => {
    let arr = [];
    for (let x = 97; x < 123; x++) {
        arr.push(String.fromCharCode(x));
    }
    return arr;
}

//matchedIndex creates an array of index numbers which correspond to where the letter is indexed in the secret word
const matchedIndex = (letter, word) => {
    let wordArr = word.split("");
    let indexNums = [];
    let idx = wordArr.indexOf(letter);
    while (idx !== -1) {
        indexNums.push(idx);
        idx = wordArr.indexOf(letter, idx + 1);
    }
    return indexNums;

}

const Letters = () => {
    const dispatch = useDispatch();
    const secretWord = useSelector((state) => state.secretWord.secretWordStr);
    const hiddenWord = useSelector((state) => state.secretWord.hiddenWordStr);
    const alphabet = useSelector((state) => state.alphabet);
    const incorrectGuessNum = useSelector((state) => state.counter.incorrectGuesses)

    function guess(event) {
        let letter = event.target.id;
        dispatch(clicked(letter));
        if (alphabet.letters[letter].inSecretWord) {
            let indexArr = matchedIndex(letter, secretWord);
            dispatch(updateHiddenWord({letter: letter, indexArr: indexArr}));
            console.log(hiddenWord)
        } else {
            dispatch(incorrectGuess());
        }
    }

    const alphabetArr = alphabetGenerator();
    const alphabetTable  = alphabetArr.map((letter) => {
        if (alphabet.letters[letter].hasBeenClicked) {
            return (
                <Col className='letter my-1'><span id={letter} className={`inSecretWord-${alphabet.letters[letter].inSecretWord}`}>{letter}</span></Col>
            )
        } else if (incorrectGuessNum === 10 || hiddenWord.indexOf("_") === -1){
            return (
                <Col className='letter my-1'><span id={letter} className='disabled'>{letter}</span></Col>
            )
        } else {
            return (
                <Col className='letter my-1'><span id={letter} className='clicked-false' onClick={guess}>{letter}</span></Col>
            )
        }
    });

    return (
        <section>
            <HiddenWord />
            <Row md={5} className='justify-content-center'>
                {alphabetTable}
            </Row>
        </section>
    );
};

export default Letters;
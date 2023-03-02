import state1 from '../images/hangmandrawings/state1.GIF';
import state2 from '../images/hangmandrawings/state2.GIF';
import state3 from '../images/hangmandrawings/state3.GIF';
import state4 from '../images/hangmandrawings/state4.GIF';
import state5 from '../images/hangmandrawings/state5.GIF';
import state6 from '../images/hangmandrawings/state6.GIF';
import state7 from '../images/hangmandrawings/state7.GIF';
import state8 from '../images/hangmandrawings/state8.GIF';
import state9 from '../images/hangmandrawings/state9.GIF';
import state10 from '../images/hangmandrawings/state10.gif';
import state11 from '../images/hangmandrawings/state11.GIF';
import WinLose from './WinLose';
import { useSelector } from "react-redux";


const HangmanDrawings = () => {
    const incorrectGuessNum = useSelector((state) => state.counter.incorrectGuesses)
    const hangmanArr = [state1,state2,state3,state4,state5,state6,state7,state8,state9,state10,state11];

    return (
        <>
            <img src={hangmanArr[incorrectGuessNum]} />
            <WinLose />
        </>
    );
};

export default HangmanDrawings;
import dictionary from "./wordList";
import { useDispatch } from "react-redux";
import { newSecretWord, blankString } from "../store/createWord";
import { resetGuesses } from "../store/counter";
import { targetLetters } from "../store/alphabet";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

//underscores returns an array of underscores equal to the length of the secretWord.
const underscores = (secretWord) => {
    let arr = [];
    for (let x = 0; x < secretWord.length; x++) {
        if (secretWord[x] === "-") {
            arr.push("-");
        } else {
            arr.push("_");
        }
    }
    return arr;
};

function GameButtons() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    //When the start or reset button is clicked, a random word is selected from dictionary.js
    const startGame = (event) => {
        event.preventDefault();
        let secretWord = dictionary[Math.floor(Math.random()*dictionary.length)].toLowerCase();
        let underscoreArr = underscores(secretWord);
        dispatch(newSecretWord(secretWord));
        dispatch(blankString(underscoreArr));
        dispatch(targetLetters(secretWord));
        dispatch(resetGuesses());
    }

    return (
        <Row>
            <Col>
                <Button type='button' onClick={startGame}>New Game!</Button>
            </Col>
            <Col>
                <Button type='button' onClick={handleShow}>Help</Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>How to Play Hangman</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Playing hangman is so easy it hurts my brain! Click the new game button to generate a random word!
                        Once you've generated a word, you have to guess the word by clicking the letter buttons.
                        If you guess correctly, part of the word will be revealed. If you guess incorrectly, you'll lose a life!
                        You have a total of 10 lives before you lose the game. Good luck!
                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
        
    )
}

export default GameButtons;
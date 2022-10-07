import React, { useState } from 'react';


export default function JuegoAhorcadito(){
    const word = "GRACIOSO";
    const letras = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const [correctGuesses, setCorrectGuesses] = useState([])    
    const maskedWord = word.split('').map(letter => 
    correctGuesses.includes(letter) ? letter : "_").join(" ");
    return (
        <div>
            <p>{maskedWord}</p>
            {letras.map((letra, index) => 
            <button key={index} onClick={() => {
                if (word.includes(letra)) {
                    setCorrectGuesses([...correctGuesses, letra])
                } 
            }}>{letra}</button>)}
            {!maskedWord.includes("_") && <p>¡Felicidades! Has ganado</p>}
        </div>
    );

}
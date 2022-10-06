import React from 'react';
import './App.css';
import logo from './asset/imagenes/logo.png';
import soga from './asset/imagenes/soga.png';
import mate from './asset/imagenes/mate.png';
import loguito from './asset/imagenes/loguito.png';

import step0 from "./asset/imagenes/0.png";
import step1 from "./asset/imagenes/1.png";
import step2 from "./asset/imagenes/2.png";
import step3 from "./asset/imagenes/3.png";
import step4 from "./asset/imagenes/4.png";
import step5 from "./asset/imagenes/5.png";
import step6 from "./asset/imagenes/6.png";
import { randomWord } from "./components/Word";



class Hangman extends React.Component{
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6]
  }

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    }
  }

  handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }));
  }

  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  generateButtons() {
    return "abcdefghjklmnopqrstuvwxyz".split("").map(letter => (
      <button
        class='btn btn-lg btn-primary m-2'
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    });
  }

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = "You Won!!!"
    }

    if (gameOver) {
      gameStat = "You Lost!!!"
    }


        return <div>
            <section className="icono">
            <img  src={mate} alt="" width="70" />
            <img  src={loguito} alt="" width="300" />

          </section>
            <section className="logo">
            <img  src={logo} alt="" width="400" height={150}/>
            <img  src={soga} alt="" width="45" />
          </section>

          <section className="CantErrores"><strong>Adivinanzas erróneas: {this.state.mistake} of {this.props.maxWrong}</strong> 
          </section>

          <section className="text-center">
          <img src={this.props.images[this.state.mistake]} alt=""/>
          </section>

          <section className="text-center">
            
          <p>Adivina al personaje de videojuego</p>
          <p>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>

          <p>{gameStat}</p>

          <button className='btn btn-info' onClick={this.resetButton}>Reset</button>
          </section>

    </div>
  
    }
}

export default Hangman

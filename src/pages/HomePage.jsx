import React, { useRef } from 'react';
import { setTrainer } from '../store/slices/trainer.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles/homePage.css';
import PokeFooter from '../components/shared/PokeFooter';

const HomePage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setTrainer(textInput.current.value.trim()));
    textInput.current.value ='';
    navigate('/pokedex');
  }

  return (
    <div className='container'>
      <div className='container__pagina'>
      <figure className='pokemon__img'>
                <img src="../../assets/original.png" alt="pokedex logo" />
            </figure>
          <h2 className='container__title'>¡ Hi trainer !</h2>
          <p className='container__parrafo'>to star, give me your name</p>
          <form className='container__form' onSubmit={handleSubmit}>
            <input className='container__input' ref={textInput} type="text" />
            <button className='container__btn'>Start</button>
          </form>
      </div>
      <PokeFooter/>
    </div>
  )
}

export default HomePage;
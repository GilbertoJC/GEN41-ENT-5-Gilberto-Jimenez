import React from 'react';
import './styles/pokeheader.css';

const PokeHeader = () => {
  return (
    <div className='pokeheader'>
        <div className='pokeheader__red'>
            <figure className='pokeheader__img'>
                <img src="../../../assets/original.png" alt="pokedex logo" />
            </figure>
        </div>
        <div className='pokeheader__black'>
            <div className='pokeheader__outcircle'>
              <div className='pokeheader__incircle'></div>
            </div>
            
        </div>
        
    </div>
  )
}

export default PokeHeader;
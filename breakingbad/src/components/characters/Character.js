import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {ALL_CHARACTER} from '../../utils/Constants';
import CharacterCard from '../commons/CharacterCard';
import styled from 'styled-components';


const Character = ({ t }) => {

  const [characters, setCharacters] = useState([]);
  // const [characterQuote, setCharacterQuote] = useState({})

  useEffect(() => {
    axios.get(ALL_CHARACTER)
    .then((res) => {setCharacters(res.data)})
    .catch((err) => console.log(err))

    // axios.get(`${RANDOM_QUOTE_CHARACTER}`)
    // .then((res) => {setCharacterQuote(res.data[0])})
    // .catch((err) => console.log(err))
  }, [])
    
    return (
      <div>
        {characters.map((character) => {
          // return data.name
          return (
            <CharacterCard 
              character={character}
            />
          )
        })}
      </div>
    );
};

const Wrapper = styled.div`
  display: flex;

`;

export default Character;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {ALL_CHARACTER} from '../../utils/Constants';
import CharacterCard from '../commons/CharacterCard';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { initApi } from './duck/redux';

const Character = ({ t }) => {

  const [characters, setCharacters] = useState([]);
  // const [characterQuote, setCharacterQuote] = useState({})
  // const characters = useSelector(charactersList);

  /**
   * Hacer la llamada de la api en el useEffect y dentro del then llamar al redux para que guarde la respuesta.
   */
  const dispatch = useDispatch();

  useEffect(() => {
    // axios.get(ALL_CHARACTER)
    // .then((res) => {setCharacters(res.data)})
    // .catch((err) => console.log(err))
    dispatch(initApi())
    // axios.get(`${RANDOM_QUOTE_CHARACTER}`)
    // .then((res) => {setCharacterQuote(res.data[0])})
    // .catch((err) => console.log(err))

  }, [])
    
    return (
      <Wrapper>
        {characters.map((character) => {
          // return data.name
          return (
            <CharacterCard 
              character={character}
            />
          )
        })}
      </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap; 
`;

export default Character;

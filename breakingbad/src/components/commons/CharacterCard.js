import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {RANDOM_QUOTE_CHARACTER} from '../../utils/Constants';

const CharacterCard = ({ t, character }) => {

  // const [character, setCharacter] = useState({});
  const [characterQuote, setCharacterQuote] = useState({})

  useEffect(() => {
    const name_surname = character.name.split(' ');
    let url = `${RANDOM_QUOTE_CHARACTER}${name_surname[0]}+${name_surname[1]}`;
    if (name_surname.length === 3) {
      url = `${RANDOM_QUOTE_CHARACTER}${name_surname[0]}+${name_surname[1]}+${name_surname[2]}`
    }
    axios.get(url)
    .then((res) => {setCharacterQuote(res.data[0])})
    .catch((err) => console.log(err))
  }, [])

    return (
      <Card id='1'>
        <Title>
          {character.name}
        </Title>
        <Photo 
          src={character.img}
        />
        {/* <Quote>
          {characterQuote.quote}
        </Quote> */}
      </Card>
    );
};

const Title = styled.h1`
  font-size: 1.5em;
  width: 25%;
  text-align: center;
`;

const Photo = styled.img`
  width: 25%;
  height: 25%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
`;

const Quote = styled(Title)`
  font-style: italic;
  color: Gray
`;


export default CharacterCard;

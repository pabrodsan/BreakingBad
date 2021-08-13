import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {RANDOM_QUOTE_CHARACTER} from '../../utils/Constants';
import { useHistory } from 'react-router-dom';

const CharacterCard = ({ t, character }) => {

  // const [character, setCharacter] = useState({});
  const [characterQuote, setCharacterQuote] = useState({})
  const history = useHistory();

  useEffect(() => {
    console.log(character.name)
    const name_surname = character && character.name.split(" ");

    let url = `${RANDOM_QUOTE_CHARACTER}${name_surname[0]}`
    if (name_surname.length === 2) {
      url = `${RANDOM_QUOTE_CHARACTER}${name_surname[0]}+${name_surname[1]}`;
    } else if (name_surname.length === 3) {
      url = `${RANDOM_QUOTE_CHARACTER}${name_surname[0]}+${name_surname[1]}+${name_surname[2]}`
    }
    console.log(url)
    axios.get(url)
    .then((res) => {setCharacterQuote(res.data[0])})
    .catch((err) => console.log(err))
  }, [])

  // const handleClick = () => {
  //   history.push("/path/to/push");
  // }

    return (
      <Card onClick={() => console.log('aaaaaaaaaa')} id={character.char_id}>
        <Title>
          {character.name}
        </Title>
        <Photo 
          src={character.img}
        />
        <Quote>
          {characterQuote && characterQuote.quote}
        </Quote>
      </Card>
    );
};

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
`;

const Photo = styled.img`
  display: block;
  max-width:230px;
  max-height:230px;
  width: auto;
  height: auto;
`;

const Card = styled.button`
  display: flex;
  flex-direction: column; 
  border: 2px solid yellow;
  border-radius: 8px;
  // justify-content: center;
  margin: 20px;

`;

const Quote = styled(Title)`
  font-style: italic;
  color: Gray
`;


export default CharacterCard;

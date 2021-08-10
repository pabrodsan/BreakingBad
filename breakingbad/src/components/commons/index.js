import {withTranslation} from 'react-i18next';
import React from 'react';
import CharacterCard from './CharacterCard';

class Wrapper extends React.Component {
    componentDidMount() {
      
    }

   
    render() {
        return <CharacterCard {...this.props} />;
    }
}


export default (withTranslation()(Wrapper));

import {withTranslation} from 'react-i18next';
import React from 'react';
import CharacterDetail from './CharacterDetail';

class Wrapper extends React.Component {
    componentDidMount() {
      
    }

   
    render() {
        return <CharacterDetail {...this.props} />;
    }
}


export default (withTranslation()(Wrapper));

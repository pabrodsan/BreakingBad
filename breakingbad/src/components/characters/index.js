import {withTranslation} from 'react-i18next';
import React from 'react';
import Character from './Character';

class Wrapper extends React.Component {
    componentDidMount() {
      
    }

   
    render() {
        return <Character {...this.props} />;
    }
}


export default (withTranslation()(Wrapper));

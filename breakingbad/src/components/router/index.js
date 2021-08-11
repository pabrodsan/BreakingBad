import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Characters from '../characters';
// import CharacterDetail from '../characterDetail/CharacterDetail';
import CharacterCard from '../commons/CharacterCard';
import {withTranslation} from 'react-i18next';

const Router = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Characters {...props} />
                </Route>
                {/* <Route path="/">
                    <CharacterCard {...props} />
                </Route> */}
                {/* <Route path="/">
                    <CharacterDetail {...props} />
                </Route> */}
            </Switch>
        </BrowserRouter>
    );
};

export default (withTranslation()(Router));

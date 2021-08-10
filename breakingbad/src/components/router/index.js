import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Character from '../characters/Character';
import CharacterDetail from '../characterDetail/CharacterDetail';
import {withTranslation} from 'react-i18next';

const Router = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Character {...props} />
                </Route>
                <Route path="/">
                    <CharacterDetail {...props} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default (withTranslation()(Router));

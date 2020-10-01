import React from 'react';
//import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes'

const App: React.FC = () => (
    <>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
        <GlobalStyle/>
    </>
);

export default App;

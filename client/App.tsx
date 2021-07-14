import './App.css';

import * as React from 'react';

import { Contact } from './Contact';
import { Home } from './Home';
import { NavBar } from './Navbar';
import { Portfolio } from './Portfolio';

export const App: React.FC = () => {

    const [renderPage, setRenderPage] = React.useState('Home')

    const onHomeClicked = () => {
        setRenderPage('Home')
    }

    const onPortfolioClicked = () => {
        setRenderPage('Portfolio')
    }

    const onContactClicked = () => {
        setRenderPage('Contact')
    }

    const renderContent = () => {
        if (renderPage === 'Contact') {
            return (
                <Contact />
            )
        }
        if (renderPage === 'Portfolio') {
            return (
                <Portfolio />
            )
        } else {
            return (
                <Home />
            )
        }
    }

    return (
      <div>
        <NavBar onHomeClicked={onHomeClicked} onPortfolioClicked={onPortfolioClicked} onContactClicked={onContactClicked}/>
        {renderContent()}
      </div>
    )
}

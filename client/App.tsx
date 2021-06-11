import * as React from 'react';
import '../public/App.css';
import { Navbar } from "./Navbar";
import { Home } from './Home';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';



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
    
    if (renderPage === 'Home') {
        return (
            <div>
                <Navbar onHomeClicked={onHomeClicked} onPortfolioClicked={onPortfolioClicked} onContactClicked={onContactClicked}/>
                <Home />
            </div>
        )
    }
    if (renderPage === 'Portfolio') {
        return (
            <div>
                <Navbar onHomeClicked={onHomeClicked} onPortfolioClicked={onPortfolioClicked} onContactClicked={onContactClicked}/>
                <Portfolio />
            </div>
        )
    }
    if (renderPage === 'Contact') {
        return (
            <div>
                <Navbar onHomeClicked={onHomeClicked} onPortfolioClicked={onPortfolioClicked} onContactClicked={onContactClicked}/>
                <Contact />
            </div>
        )
    }
    else {
        return (
            <div>Hello</div>
        )
    }
}
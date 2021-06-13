import './App.css';

import * as React from 'react';

import { Contact } from './Contact';
import { sendEmail } from './emailSendingUtilities';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { Portfolio } from './Portfolio';



export const App: React.FC = () => {

    const [renderPage, setRenderPage] = React.useState('Home')
    const [contactName, setContactName] = React.useState('')
    const [contactEmail, setContactEmail] = React.useState('')
    const [contactPhone, setContactPhone] = React.useState('')
    const [contactMessage, setContactMessage] = React.useState('')

    const onHomeClicked = () => {
        setRenderPage('Home')
    }

    const onPortfolioClicked = () => {
        setRenderPage('Portfolio')
    }

    const onContactClicked = () => {
        setRenderPage('Contact')
    }

    const onNameFieldChange = (name: string) => {
        setContactName(name)
    }

    const onEmailFieldChange = (email: string) => {
        setContactEmail(email)
    }

    const onPhoneFieldChange = (number: string) => {
        setContactPhone(number)
    }

    const onMessageFieldChange = (message: string) => {
        setContactMessage(message)
    }

    const onContactSubmitClick = () => {
        setContactName('')
        setContactEmail('')
        setContactPhone('')
        setContactMessage('')
        sendEmail()
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
                <Contact onNameFieldChange={onNameFieldChange} contactName={contactName} onEmailFieldChange={onEmailFieldChange} contactEmail={contactEmail} onPhoneFieldChange={onPhoneFieldChange} contactPhone={contactPhone} onMessageFieldChange={onMessageFieldChange} contactMessage={contactMessage} onContactSubmitClick={onContactSubmitClick}/>
            </div>
        )
    }
    else {
        return (
            <div>Hello</div>
        )
    }
}



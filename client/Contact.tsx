import { DefaultButton, Text, TextField } from '@fluentui/react';
import * as React from 'react';

export const Contact: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null)

  const [contactName, setContactName] = React.useState('')
  const [contactEmail, setContactEmail] = React.useState('')
  const [contactPhone, setContactPhone] = React.useState('')
  const [contactMessage, setContactMessage] = React.useState('')
  const [emailError, setEmailError] = React.useState('')

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
    if (contactEmail === '' || contactName === '' || contactPhone === '' || contactMessage === '') {
      setEmailError('Please provide the required information')
      return
    }

    formRef.current?.submit()

    setContactName('')
    setContactEmail('')
    setContactPhone('')
    setContactMessage('')
}

  const mainDivStyles = {
    width: 800,
    paddingLeft: 250,
    align: 'center'
  }

  const pStyles = {
    paddingTop: 20,
  }

  const renderError = () => {
    if (emailError !== '') {
      return <Text variant='medium' style={ { color: 'red' } } >{ emailError }</Text>
    }
    return null
  }

  return (
    <div style={mainDivStyles}>
      <div style={{paddingBottom: '15px', paddingTop: '15px'}}>
        <Text variant="xLarge" style={{paddingBottom: '25px', fontWeight: 'bold'}}>I am so excited to hear from you!</Text><br/>
      </div>
      <div style={{paddingBottom: '15px'}}>
        <Text variant="medium">Are you ready to get beautiful pictures taken? Please don&apos;t hesitate to contact me via my email: info@louisajphotography.com, my instagram - louisajphotography - or the contact box below.</Text>
      </div>
      <TextField label="Name" value={contactName} onChange={(_event, value) => onNameFieldChange(value ?? '')}/>
      <TextField label="Email Address" value={contactEmail} placeholder="name@example.com" onChange={(_event, value) => onEmailFieldChange(value ?? '')} />
      <TextField label="Phone Number" value={contactPhone} placeholder="(---) --- ---" onChange={(_event, value) => onPhoneFieldChange(value ?? '')} />
      <TextField label="Message" value={contactMessage} multiline rows={3} onChange={(_event, value) => onMessageFieldChange(value ?? '')}/>
      <p style={pStyles}>
        <DefaultButton text="Submit" onClick={onContactSubmitClick} />
      </p>
      { renderError() }
      <div style={ { display: 'none' } }>
        <form method="POST" action="https://louisajphotography.com/SendEmail.php" ref={ formRef } >
          <input value={ contactName } type="text" name="name" />
          <input value={ contactEmail } type="email" name="email" />
          <input value={ contactPhone } type="tel" name="phone" />
          <input value={ contactMessage } type="text" name="message" />
          <input value="Submit" type="submit"></input>
        </form>
      </div>
    </div>
  )
}

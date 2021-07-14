import { Text} from '@fluentui/react';
import * as React from 'react';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

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

  const renderError = () => {
    if (emailError !== '') {
      return <Text variant='medium' style={ { color: 'red' } } >{ emailError }</Text>
    }
    return null
  }

  return (
    // <div style={mainDivStyles}>
    //   <div style={{paddingBottom: '15px', paddingTop: '15px'}}>
    //     <Text variant="xLarge" style={{paddingBottom: '25px', fontWeight: 'bold'}} data-testid="excited">I am so excited to hear from you!</Text><br/>
    //   </div>
    //   <div style={{paddingBottom: '15px'}}>
    //     <Text variant="medium" data-testid="info">Are you ready to get beautiful pictures taken? Please don&apos;t hesitate to contact me via my email: info@louisajphotography.com, my instagram - louisajphotography - or the contact box below.</Text>
    //   </div>
    //   <TextField label="Name" value={contactName} onChange={(_event, value) => onNameFieldChange(value ?? '')}/>
    //   <TextField label="Email Address" value={contactEmail} placeholder="name@example.com" onChange={(_event, value) => onEmailFieldChange(value ?? '')} />
    //   <TextField label="Phone Number" value={contactPhone} placeholder="(---) --- ---" onChange={(_event, value) => onPhoneFieldChange(value ?? '')} />
    //   <TextField label="Message" value={contactMessage} multiline rows={3} onChange={(_event, value) => onMessageFieldChange(value ?? '')}/>
    //   <p style={pStyles}>
    //     <DefaultButton text="Submit" onClick={onContactSubmitClick} data-testid="submit"/>
    //   </p>

    <div>
      <Container fluid className="contactContainer">
        <Row>
          <Col className="infoTitle" data-testid="excited">I am so excited to hear from you!</Col>
        </Row>
        <Row>
          <Col data-testid="info">Are you ready to get beautiful pictures taken? Please don not hesitate to contact me via my email: info@louisajphotography.com, my instagram - louisajphotography - or the contact box below.</Col>
        </Row>
      </Container>
      <div className="mainContactDiv">
      <Form>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="" value={contactName} onChange={(e: { target: { value: string; }; }) => onNameFieldChange(e.target.value)} />
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" value={contactEmail} onChange={(e: { target: { value: string; }; }) => onEmailFieldChange(e.target.value)}/>
          <Form.Text className="text-muted">
            We will never share your email with anyone else.
          </Form.Text>
        <br />
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="(---) --- ----" value={contactPhone} onChange={(e: { target: { value: string; }; }) => onPhoneFieldChange(e.target.value)}/>
        <br />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} value={contactMessage} onChange={(e: { target: { value: string; }; }) => onMessageFieldChange(e.target.value)}/>
        </Form.Group>
        <Button variant="success" type="submit" onClick={onContactSubmitClick} data-testid="submit">
        Submit
        </Button>
      </Form>
      </div>
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

import * as React from 'react';
import { TextField, DefaultButton } from '@fluentui/react';

interface IProps {
    onNameFieldChange: (name: string) => void
    onEmailFieldChange: (email: string) => void
    onPhoneFieldChange: (number: string) => void
    onMessageFieldChange: (message: string) => void
    onContactSubmitClick: () => void
    contactName: string
    contactEmail: string
    contactPhone: string
    contactMessage: string
    }


export const Contact: React.FC<IProps> = ({ onNameFieldChange, contactName, onEmailFieldChange, contactEmail, onPhoneFieldChange, contactPhone, onMessageFieldChange, contactMessage, onContactSubmitClick }: IProps) => {

    const mainDivStyles = {
      width: 800,
      paddingLeft: 250,
      align: 'center'
    }

    const pStyles = {
        paddingTop: 20,
    }



    return (
        <div style={mainDivStyles}>
            <h2>I'm so excited to hear from you!</h2>
            <p>Are you ready to get your pictures taken? Please don't hesitate to contact me via my email: info@louisajphotography.com, my instagram or the contact box below.</p>
            <TextField label="Name" value={contactName} onChange={(event) => onNameFieldChange((event.target as HTMLInputElement).value)}/>
            <TextField label="Email Address" value={contactEmail} placeholder="name@example.com" onChange={(event) => onEmailFieldChange((event.target as HTMLInputElement).value)} />
            <TextField label="Phone Number" value={contactPhone} placeholder="(---) --- ---" onChange={(event) => onPhoneFieldChange((event.target as HTMLInputElement).value)} />
            <TextField label="Message" value={contactMessage} multiline rows={3} onChange={(event) => onMessageFieldChange((event.target as HTMLInputElement).value)}/>
            <p style={pStyles}>
              <DefaultButton text="Submit" onClick={onContactSubmitClick} />
            </p>
        </div>
    )
}
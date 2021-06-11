import * as React from 'react';
import { TextField, DefaultButton } from '@fluentui/react';


export const Contact: React.FC = () => {

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
            <TextField label="Name" />
            <TextField label="Email Address" placeholder="name@example.com" />
            <TextField label="Phone Number" placeholder="(---) --- ---" />
            <TextField label="Message" multiline rows={3}/>
            <p style={pStyles}>
              <DefaultButton text="Submit" />
            </p>
        </div>
    )
}
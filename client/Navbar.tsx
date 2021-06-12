import { CommandBar, ICommandBarItemProps, Text } from '@fluentui/react';
import * as React from 'react';

import Louisa from './assets/Louisa.jpg';

interface IProps {
    onHomeClicked: () => void
    onPortfolioClicked: () => void
    onContactClicked: () => void
    }


export const Navbar: React.FC<IProps> = ({ onHomeClicked, onPortfolioClicked, onContactClicked }: IProps) => {

    const items: ICommandBarItemProps[] = [

      {
        key: 'home',
        text: 'Home',
        onClick: onHomeClicked,
        style: {background: '#d8d8d8', paddingTop: '10px'}
      },
      {
        key: 'portfolio',
        text: 'Portfolio',
        onClick: onPortfolioClicked,
        style: {background: '#d8d8d8', paddingTop: '10px'}
      },
      {
        key: 'contact',
        text: 'Contact',
        onClick: onContactClicked,
        style: {background: '#d8d8d8', paddingTop: '10px'}
      },
    ];


    return (
      <div style={{ display: 'flex', width: '100%', height: '50px', cursor: 'pointer', backgroundColor: '#d8d8d8'}}>
        <img style={{ paddingLeft: '5px' }} width="70" src={Louisa}></img>
        <Text style={{paddingTop: '15px', paddingLeft: '10px', fontWeight: 'bold'}}variant="mediumPlus">Louisa J Photography</Text>
        <div style={{ flexGrow: 1 }}>
          <CommandBar
            styles={{root: {background: '#d8d8d8'}}}
            items={items}
            ariaLabel="Use left and right arrow keys to navigate between commands"
          />
        </div>
      </div>
      );
    };

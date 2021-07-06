import { DefaultPalette,IStackStyles, IStackTokens, Stack, Text } from '@fluentui/react';
import * as React from 'react';

import graduatesWalk from './assets/GraduatesWalk.jpg';
import Jessica from './assets/Jessica.jpg';
import Louisa from './assets/Louisa.jpg';
import { HomeCarousel } from './HomeCarousel';

const stackStyles: IStackStyles = {
    root: {
      background: DefaultPalette.white,
      paddingTop: 40,
      paddingLeft: 150,
      paddingRight: 150,
    },
  };


  const itemAlignmentsStackTokens: IStackTokens = {
    childrenGap: 5,
    padding: 10,
  };

export const Home: React.FC = () => {

    return (
        <div>
          <HomeCarousel />
          <Stack horizontal horizontalAlign="center" styles={stackStyles} tokens={itemAlignmentsStackTokens}>
            <Stack.Item>
              <div style={{paddingBottom: '15px'}}>
                <Text variant="xLarge" style={{fontWeight: 'bold'}} data-testid="outdoor">OUTDOOR/ ADVENTURE PHOTOGRAPHY</Text><br/>
              </div>
              <div style={{paddingBottom: '10px'}}>
                <Text variant="medium">Whether you are looking to elope or celebrate an engagement, anniversary or just want pictures taken in your favorite spot - I would love to capture your special moment.</Text>
              </div>
              <img src={Jessica} height="300" />
            </Stack.Item>
            <Stack.Item>
              <div style={{paddingBottom: '15px'}}>
                <Text variant="xLarge" style={{paddingBottom: '25px', fontWeight: 'bold'}} data-testid="event">YOUR EVENT/ FAMILY PHOTOGRAPHY</Text><br/>
              </div>
              <div style={{paddingBottom: '10px'}}>
                <Text variant="medium">If you are looking to get family pictures taken or for someone to capture your special event, such as baby showers, bridal showers and even your dog&apos;s birthday - feel free to contact me!</Text>
              </div>
              <img src={graduatesWalk} height="300" />
            </Stack.Item>
            <Stack.Item>
              <div style={{paddingBottom: '15px'}}>
                <Text variant="xLarge" style={{paddingBottom: '25px', fontWeight: 'bold'}} data-testid="basedIn">BASED IN THE GREATER SEATTLE AREA</Text><br/>
              </div>
              <div style={{paddingBottom: '10px'}}>
                <Text variant="medium">My name is Louisa Janssen and I came to the PNW from Germany in 2015. I love the outdoors and all that the PNW has to offer and know all the good spots for beautiful pictures.</Text>
              </div>
              <img src={Louisa} height="300" />
            </Stack.Item>
          </Stack>
        </div>
    )
}

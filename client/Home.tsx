import * as React from 'react';
import { Stack, IStackStyles, IStackTokens, DefaultPalette } from '@fluentui/react';
// @ts-ignore
import graduatesWalk from './assets/GraduatesWalk.jpg';
// @ts-ignore
import Louisa from './assets/Louisa.jpg';
// @ts-ignore
import Jessica from './assets/Jessica.jpg';

const stackStyles: IStackStyles = {
    root: {
      background: DefaultPalette.white,
      paddingTop: 40,
    },
  };
  
  
  const itemAlignmentsStackTokens: IStackTokens = {
    childrenGap: 5,
    padding: 10,
  };

export const Home: React.FC = () => {

    return (
        <div>
          <h2>Louisa Janssen Photography</h2>
          <Stack horizontal horizontalAlign="center" styles={stackStyles} tokens={itemAlignmentsStackTokens}>
            <Stack.Item>
              <h4>OUTDOOR/ ADVENTURE PHOTOGRAPHY</h4>
              <p>Whether you're looking to elope or celebrate an engagement, anniversary or just want pictures taken in your favorite spot - I would love to capture your special moment.</p>
              <img src={Jessica} height="300"></img>
            </Stack.Item>
            <Stack.Item>
              <h4>YOUR EVENT/ FAMILY PHOTOGRAPHY</h4>
              <p>If you are looking to get family pictures taken or for someone to capture your special event, such as baby showers, bridal showers and even your dog's birthday - feel free to contact me!</p>
              <img src={graduatesWalk} height="300"></img>
            </Stack.Item>
            <Stack.Item>
              <h4>BASED IN THE GREATER SEATTLE AREA</h4>
              <p>My name is Louisa Janssen and I came to the PNW from Germany in 2015. I love the outdoors and all that the PNW has to offer and know all the good spots for beautiful pictures.</p>
              <img src={Louisa} height="300"></img>
            </Stack.Item>
          </Stack>
        </div>
    )
}
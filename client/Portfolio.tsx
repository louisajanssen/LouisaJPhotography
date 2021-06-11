import * as React from 'react';
import { Stack, IStackStyles, IStackTokens, DefaultPalette } from '@fluentui/react';
// @ts-ignore
import Jen from './assets/Jen.jpg';
// @ts-ignore
import GilmoreGirls from './assets/GilmoreGirls.jpg';
// @ts-ignore
import Carolina from './assets/Carolina.jpg';
// @ts-ignore
import PhiliChrisHair from './assets/PhilChrisHair.jpg';
// @ts-ignore
import Camille from './assets/Camille.jpg';
// @ts-ignore
import RuthElianaWalk from './assets/RuthElianaWalk.jpg';
// @ts-ignore
import MartaAlan from './assets/MartaAlan.jpg';
// @ts-ignore
import Eliana from './assets/Eliana.jpg';
// @ts-ignore
import Phil from './assets/Phil.jpg';

const stackStyles: IStackStyles = {
    root: {
      background: DefaultPalette.white,
      paddingTop: 15,
    },
  };
  
  
  const itemAlignmentsStackTokens: IStackTokens = {
    childrenGap: 5,
    padding: 15,
  };

export const Portfolio: React.FC = () => {

   return (
    <div>
      <Stack horizontal horizontalAlign="center" styles={stackStyles} tokens={itemAlignmentsStackTokens}>
        <Stack.Item>
          <img src={Jen} height="500"></img>
        </Stack.Item>
        <Stack.Item>
          <img src={Carolina} height="500"></img>
        </Stack.Item>
        <Stack.Item>
          <img src={GilmoreGirls} height="500"></img>
        </Stack.Item>
      </Stack>
      <Stack horizontal horizontalAlign="center" styles={stackStyles} tokens={itemAlignmentsStackTokens}>
        <Stack.Item>
          <img src={PhiliChrisHair} height="500"></img>
        </Stack.Item>
        <Stack.Item>
          <img src={Camille} height="500"></img>
        </Stack.Item>
        <Stack.Item>
          <img src={RuthElianaWalk} height="500"></img>
        </Stack.Item>
      </Stack>
      <Stack horizontal horizontalAlign="center" styles={stackStyles} tokens={itemAlignmentsStackTokens}>
        <Stack.Item>
          <img src={MartaAlan} height="500"></img>
        </Stack.Item>
        <Stack.Item>
          <img src={Eliana} height="500"></img>
        </Stack.Item>
        <Stack.Item>
          <img src={Phil} height="500"></img>
        </Stack.Item>
      </Stack>
    </div>
   )
}
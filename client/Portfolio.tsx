import { DefaultPalette,IStackStyles, IStackTokens, Stack } from '@fluentui/react';
import * as React from 'react';

import Camille from './assets/Camille.jpg';
import Carolina from './assets/Carolina.jpg';
import CarolinaMom from './assets/CarolinaMom.jpg';
import Eliana from './assets/Eliana.jpg';
import GilmoreGirls from './assets/GilmoreGirls.jpg';
import GirlsGraduate from './assets/GirlsGraduate.jpg';
import Jen from './assets/Jen.jpg';
import JenGrad from './assets/JenGrad.jpg';
import JessicaCamille from './assets/JessicaCamille.jpg';
import JorgeMartaAlan from './assets/JorgeMartaAlan.jpg';
import Marta from './assets/Marta.jpg';
import MartaAlan from './assets/MartaAlan.jpg';
import Phil from './assets/Phil.jpg';
import PhiliChrisHair from './assets/PhilChrisHair.jpg';
import PhilChristoph from './assets/PhilChristoph.jpg';
import RuthElianaWalk from './assets/RuthElianaWalk.jpg';


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
      <Stack horizontal horizontalAlign="center" styles={stackStyles} tokens={itemAlignmentsStackTokens}>
        <Stack.Item>
          <img src={PhilChristoph} height="385"></img>
        </Stack.Item>
        <Stack.Item>
          <img src={GirlsGraduate} height="385"></img>
        </Stack.Item>
      </Stack>
      <Stack horizontal horizontalAlign="center" styles={stackStyles} tokens={itemAlignmentsStackTokens}>
        <Stack.Item>
          <img src={JorgeMartaAlan} height="340"></img>
        </Stack.Item>
        <Stack.Item>
          <img src={JessicaCamille} height="340"></img>
        </Stack.Item>
      </Stack>
      <Stack horizontal horizontalAlign="center" styles={stackStyles} tokens={itemAlignmentsStackTokens}>
        <Stack.Item>
          <img src={Marta} height="500"></img>
        </Stack.Item>
        <Stack.Item>
          <img src={JenGrad} height="500"></img>
        </Stack.Item>
        <Stack.Item>
          <img src={CarolinaMom} height="500"></img>
        </Stack.Item>
      </Stack>
    </div>
   )
}

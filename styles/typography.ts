import css from 'styled-jsx/css';
import { Orbitron, Space_Mono, Raleway } from '@next/font/google';

const orbitron = Orbitron({
  weight: '400',
  subsets: ['latin'],
  variable: '--orbitron',
});

const spaceMono = Space_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--space_mono',
});

const raleWay = Raleway({
  weight: '400',
  subsets: ['latin'],
  variable: '--rale_way',
});

export const fonts = {
  orbitron,
  spaceMono,
  raleWay,
};

const style = css.global`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap');

  * {
    font-family: 'Raleway', sans-serif;
  }

  @media screen and only (max-width: 500px) {
    body {
      font-size: 85%;
    }
  }
  @media screen and only (max-width: 400px) {
    body {
      font-size: 70%;
    }
  }
  @media screen and only (max-width: 300px) {
    body {
      font-size: 60%;
    }
  }
`;

export default style;

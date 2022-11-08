import css from 'styled-jsx/css';
import { Exo_2, Cinzel, Orbitron, Play } from '@next/font/google';

const exo_2 = Exo_2({
  weight: '400',
  subsets: ['latin'],
  variable: '--exo_2',
});
const cinzel = Cinzel({
  weight: '500',
  subsets: ['latin'],
  variable: '--cinzel',
});
const orbitron = Orbitron({
  weight: '800',
  subsets: ['latin'],
  variable: '--orbitron',
});

const play = Play({
  weight: '400',
  subsets: ['latin'],
  variable: '--orbitron',
});

export const fonts = {
  exo_2,
  cinzel,
  orbitron,
};

const style = css.global`
  @media screen and only (max-width: 500px) {
    body {
      font-size: 100%;
    }
  }
  @media screen and only (max-width: 400px) {
    body {
      font-size: 80%;
    }
  }
  a {
    font-family: ${orbitron.style.fontFamily};
  }
  h1 {
    font-family: ${orbitron.style.fontFamily};
  }
`;

export default style;

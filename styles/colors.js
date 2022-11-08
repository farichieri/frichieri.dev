import css from 'styled-jsx/css';

const colors = css.global`
  div.dark {
    --textColor: white;
    --bgColor: black;
    --boxShadowColor: whitesmoke;
    --navBgColor: #00000080;
  }
  div.light {
    --textColor: black;
    --bgColor: white;
    --boxShadowColor: whitesmoke;
    --navBgColor: transparent;
  }
`;

export default colors;

import css from 'styled-jsx/css';

const colors = css.global`
  div.dark {
    --textColor: white;
    --bgColor: #000;
    --box-shadow: #f5f5f526;
    --box-shadow-light: #f5f5f50a;
    --navBgColor: #00000080;
    --link-color: gray;
    --nav-background-color: black;
  }
  div.light {
    --textColor: black;
    --bgColor: #ffffff;
    --box-shadow: #00000033;
    --box-shadow-light: #00000014;
    --navBgColor: transparent;
    --link-color: gray;
    --nav-background-color: white;
  }
`;

export default colors;

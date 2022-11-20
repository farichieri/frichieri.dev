import css from 'styled-jsx/css';

const colors = css.global`
  div.dark {
    --textColor: white;
    --bgColor: black;
    --box-shadow: #f5f5f552;
    --box-shadow-light: #f5f5f522;
    --navBgColor: #00000080;
    --link-color: rgba(73, 251, 53, 0.815);
  }
  div.light {
    --textColor: black;
    --bgColor: white;
    --box-shadow: #00000080;
    --box-shadow-light: #00000030;
    --navBgColor: transparent;
    --link-color: rgba(73, 251, 53, 0.999);
  }
`;

export default colors;

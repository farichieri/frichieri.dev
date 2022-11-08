import css from 'styled-jsx/css';

const general = css.global`
  :root {
    --footerHeight: 50px;
    --navHeight: 50px;
  }
  a[href] {
    text-decoration: none;
    color: rgba(73, 251, 53, 0.815);
  }
`;

export default general;

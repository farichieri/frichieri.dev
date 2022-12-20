import css from 'styled-jsx/css';

const general = css.global`
  :root {
    --footerHeight: 50px;
    --navHeight: 50px;
  }
  a[href] {
    text-decoration: none;
    color: var(--link-color);
  }
`;

export default general;

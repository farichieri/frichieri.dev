import css from 'styled-jsx/css';

const general = css.global`
  :root {
    --footerHeight: 170px;
    --navHeight: 70px;
    --max-width: 768px;
  }
  a[href] {
    text-decoration: none;
    color: var(--link-color);
  }
`;

export default general;

import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: var(--body-bg);
    font-weight: 400;

    font-size: 1.5rem;
    line-height: 160%;
    ${media.greaterThan('large')`
      font-size: 1.7rem;
    `}
  }
  img {
    display: block;
  	max-width: 100%;
  	height: auto;
  }

  a {
    color: var(--primaryColor)
  }

  :root { 
    --gray-900: #1a202c;
    --gray-800: #2d3748;
    --gray-700: #4a5568;
    --gray-600: #718096;
    --gray-500: #a0aec0;
    --gray-400: #cbd5e0;
    --gray-300: #e2e8f0;
    --gray-200: #edf2f7;
    --gray-100: #f7fafc;
    --red-100: #fff5f5;
    --red-200: #fed7d7;
    --red-300: #feb2b2;
    --red-400: #fc8181;
    --red-500: #f56565;
    --red-600: #e53e3e;
    --red-700: #c53030;
    --red-800: #9b2c2c;
    --red-900: #742a2a;
    --blue-100: #ebf8ff;
    --blue-200: #bee3f8;
    --blue-300: #90cdf4;
    --blue-400: #63b3ed;
    --blue-500: #4299e1;
    --blue-600: #3182ce;
    --blue-700: #2b6cb0;
    --blue-800: #2c5282;
    --blue-900: #2a4365;
    --white: white;
    --red: #f56565;
    --lwd-blue: #0066F9;
    --text-decoration-color: var(--gray-400);
    --text-color: black;
    --focus-ring-color: var(--blue-500);

    --gray-extra-light: #eaeaea; 
    --gray-light: #747d8d;  
    --gray: #475060;
    --gray-dark: #2e333e;

    --primary-color: #0066f9;
    --secondary-color: #2e333e;
    --thirdy-color: #001ff9;

    --body-bg: #FFFFFF; 

    --bg-light: var(--gray-extra-light);
    --bg-dark: var(--gray-dark);

    --border-light: var(--gray-light);
    --border-dark: var(--gray-dark);
    
    --link-color: var(--primary-color);
    --link-color-hover: var(--thirdy-color);

    --width-container: 1040px;

    --space: 2rem;
    --space-sm: 1rem;
    --space-lg: 3rem;
  }

  /* Post-reset styling */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 12px;
    font-family: "helvetica neue", sans-serif
  }

  /* Typography */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
    margin-top: 1em;
    font-weight: bold;
  }

  h1 {
    font-size: 3.052rem;
    letter-spacing: -0.05rem;
    line-height: 1;
  }

  h2 {
    font-size: 2.441rem;
    letter-spacing: -0.05rem;
    line-height: 1.2;
  }

  h3 {
    font-size: 1.953rem;
    letter-spacing: -0.05rem;
    line-height: 1.2;
  }

  h4 {
    font-size: 1.563rem;
    letter-spacing: -0.05rem;
    line-height: 1.3;
  }

  h5 {
    font-size: 1.25rem;
    letter-spacing: -0.05rem;
    line-height: 1.4;
  }

  h6 {
    font-size: 1rem;
    letter-spacing: -0.05rem;
    line-height: 1.5;
  }

  p {
    margin-bottom: 1.563rem;
  }

  p > *:last-child {
    margin-bottom: 0;
  }

  a {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: var(--text-decoration-color);
    -webkit-text-decoration-color: var(--text-decoration-color);
    border-radius: 5px;
    text-underline-offset: 2px;
    text-decoration-thickness: 2px;
  }

  @media (hover: hover) {
    a:hover {
      text-decoration-color: var(--gray-800);
    }
  }

  a:focus-visible {
    box-shadow: 0 0 0 2px var(--focus-ring-color);
    outline: none;
  }

  small {
    font-size: 0.888rem;
  }

  hr {
    border: 2px solid black; 
    margin: 3.052rem 0;
  }

  /* Form */
  label {
    font-weight: bold;
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  input[type="email"],
  input[type="text"],
  input[type="name"] {
    padding: 1rem;
    font-size: 1rem;
    border: 2px solid var(--gray-500);
    color: black;
    border-radius: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 400px;
  }

  select {
    width: 400px;
    margin: 0;
    -webkit-appearance: none;
    box-sizing: border-box;
    padding: 0.65rem 0.5rem;
    font-size: 1rem;
    border: 2px solid var(--gray-700);
    border-radius: 10px;
    color: var(--gray-700);
    height: auto;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.304 125.304"><path d="M62.652 103.895L0 21.41h125.304" fill="%23343334"/></svg>');
    background-repeat: no-repeat;
    background-size: 1rem;
    background-position: center right 0.5rem;
  }

  textarea {
    width: 400px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 1rem;
    border: 2px solid var(--gray-200);
    color: var(--gray-700);
    border-radius: 10px;
    resize: vertical;
    box-sizing: border-box;
    padding: 0.65rem 0.5rem;
    font-family: -apple-system, BlinkMacSystemFont, "avenir next", avenir,
      "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial,
      sans-serif;
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    border: 2px solid var(--focus-ring-color);
  }

  input:invalid,
  select:invalid,
  textarea:invalid {
    border: 2px solid #ff7d87;
    box-shadow: none;
  }

  input[type="checkbox"] {
    display: inline-block;
    height: 1rem;
    font-size: 1rem;
    border-radius: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 2px solid var(--gray-300);
    width: 1rem;
    align-self: center;
    margin-right: 0.5rem;
  }

  input[type="checkbox"]:hover {
    cursor: pointer;
  }

  input[type="checkbox"]:checked {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="78.369" height="78.369" viewBox="0 0 78.369 78.369"><path fill="white" d="M78.05 19.015l-48.592 48.59c-.428.43-1.12.43-1.548 0L.32 40.016c-.427-.426-.427-1.12 0-1.547l6.704-6.704c.428-.427 1.12-.427 1.548 0l20.113 20.112 41.113-41.113c.43-.427 1.12-.427 1.548 0l6.703 6.704c.427.427.427 1.12 0 1.548z"/></svg>');
    background-size: contain;
    border: 2px solid var(--gray-700);
  }

  input[type="checkbox"]:focus-visible,
  input[type="checkbox"]:checked:focus-visible {
    border-color: var(--focus-ring-color);
  }

  input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 50%;
    border: 2px solid var(--gray-300);
    height: 1rem;
    width: 1rem;
    margin-right: 0.5rem;
    align-self: center;
    justify-content: center;
    position: relative;
    display: flex;
  }

  @media (hover: hover) {
    input[type="radio"]:hover {
      cursor: pointer;
    }
  }

  input[type="radio"]:checked {
    border: 2px solid var(--gray-700);
  }

  input[type="radio"]:focus-visible,
  input[type="radio"]:checked:focus-visible {
    border-color: var(--focus-ring-color);
  }

  input[type="radio"]:checked::before {
    content: "";
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    align-self: center;
    border-radius: 50%;
  }

  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  button {
    font-size: 1.25rem;
    border-radius: 10px;
    background-color: var(--lwd-blue);
    color: white;
    text-decoration: none;
    font-weight: bold;
    margin-top: 1.25rem;
    margin-bottom: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    line-height: initial;
    transition: background-color 200ms ease-in-out, border 200ms ease-in-out,
    transform 200ms ease-in-out;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }

  @media (hover: hover) {
    input[type="submit"]:hover,
    input[type="reset"]:hover,
    input[type="button"]:hover,
    button:hover {
      cursor: pointer;
    }
  }

  button:focus-visible,
  input[type="submit"]:focus-visible,
  input[type="reset"]:focus-visible,
  input[type="button"]:focus-visible {
    border-color: var(--focus-ring-color);
    /* outline: none; */
  }

  /* Tables */
  table {
    width: 100%;
    border-spacing: 0;
    margin-bottom: 1.563rem;
    font-variant-numeric: tabular-nums;
  }

  th,
  td {
    padding: 0.5rem 0.5rem 0.5rem 0;
    margin: 0;
  }

  th {
    font-weight: bold;
    text-align: left;
    border-bottom: 2px solid var(--gray-300);
    color: var(--gray-300);
  }

  td {
    border-bottom: 2px solid var(--gray-300);
  }

  /* Code */
  code {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
    font-size: 0.8rem;
    white-space: nowrap;
    background: var(--gray-100);
    padding: 0 0.328rem;
    display: inline-block;
    vertical-align: middle;
    border-radius: 10px;
  }

  p > code {
    white-space: normal;
  }

  pre > code {
    line-height: 1.563em;
    display: block;
    padding: 1rem;
    white-space: pre;
    margin-bottom: 1.563rem;
    overflow: scroll;
  }

  /* Forces a new-line at the end of a code block for layout purposes. */
  pre > code::after {
    content: " ";
  }

  /* Blockquote */
  blockquote {
    border-left: 0.25rem solid var(--gray-100);
    padding: 0 1rem;
    margin-bottom: 1.563rem;
  }

  /* List */
  ul {
    margin: 0;
    padding: 0 1px;
    list-style: disc outside;
    font-variant-numeric: tabular-nums;
  }

  ol {
    list-style: decimal outside;
  }

  ol,
  ul {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 1.563rem;
  }

  li {
    list-style-position: inside;
  }

  /* Keyboard */
  kbd {
    display: inline-block;
    padding: 0 0.328rem;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
    font-size: 0.64rem;
    color: var(--gray-700);
    vertical-align: middle;
    background-color: var(--gray-100);
    border: solid 1px var(--gray-300);
    border-bottom: solid 2px var(--gray-500);
    border-radius: 5px;
  }

  /* Abbreviation
  ––––––––––––––––––––––––––––––––– */
  abbr {
    text-decoration: none;
    border-bottom: 2px dashed var(--gray-600);
  }

  @media (hover: hover) {
    abbr:hover {
      cursor: help;
    }
  }

  .error {
    font-size: 12px;
    color: var(--red-600);
    margin-top: 0.25rem;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  button + button {
    margin-left: 0.5rem;
  }

  button.secondary,
  button[type="reset"] {
    background-color: var(--gray-300);
    border: 2px solid var(--gray-300);
    color: var(--gray-900);
  }

  button.secondary:hover,
  button[type="reset"]:hover {
    background-color: var(--gray-400);
  }

  /* gatsby-resp-image-figcaption moves title to caption */
  .gatsby-resp-image-figcaption {
    text-align: center;
  }

`;
export default GlobalStyles;

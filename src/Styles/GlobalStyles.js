import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  //for backgrounds
  --color-grey-100:#2a2d30;
  //main light color
  --color-green-100:#39F088;
  //white
  --color-white-100:#F2F7FF;
}


*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}



html {
  font-size: 62.5%;
}

body {
  /* font-family: 'Geologica', sans-serif; */
/* font-family: 'Nunito Sans', sans-serif; */
font-family: 'Rajdhani', sans-serif;
  /* font-family: "Manrope", sans-serif; */
  line-height: 1.6;
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  font-weight: 400;
  font-size: 1.6rem;
  overflow: hidden;
}



input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}



*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}
`;

export default GlobalStyle;

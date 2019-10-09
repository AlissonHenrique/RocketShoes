import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
}
body{
  background:#191919 url(${background})no-repeat center top;
  -webkit-font-smoothing:antialiased;
}
html,
:root {
  font-size: 62.5%; /* 1rem = 10px;*/
}
body,input,button{
  font-size:1.4rem;
  font-family:'Roboto', sans-serif;
}
#root{
  max-width:1020px;
  margin:0 auto;
  padding: 0 2rem 5rem;
}

button{
  cursor:pointer;
}
`;

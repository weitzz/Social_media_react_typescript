import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
    :root{
         
  --blue:  hsl(210, 78%, 56%);
  --green: hsl(146, 68%, 55%);
  --toggle: linear-gradient(to right,hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%);
  --limeGreen:hsl(163, 72%, 41%);
  --brightRed: hsl(356, 69%, 56%);
  --facebook: hsl(208, 92%, 53%);
  --twitter: hsl(203, 89%, 53%);
  --instagram: linear-gradient(to right,hsl(37, 97%, 70%) 0%,hsl(329, 70%, 58%) 100%);
  --youTube:hsl(348, 97%, 39%);
    }

*{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
   }

   body{
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    background: ${props =>props.theme.colors.bg };
   }
   `
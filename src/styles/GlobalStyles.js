import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {

        /* Primary */
        
          --color-sun: hsl(37, 98%, 54%);
          --color-sun-hover: 	hsl(36, 100%, 65%);
          --color-jungle-mist: hsl(203, 28%, 79%);
          --color-pickled-bluewood: hsl(205, 30%, 27%);
          --color-big-stone: hsl(206, 45%, 15%);
          --color-concrete: hsl(0, 0%, 95%);
          --color-gothic: hsl(203, 22%, 55%);
          --color-hippie-blue: hsl(205, 37%, 55%);
          --color-alabaster: hsl(0, 0%, 99%);
        
        
          --font-size-heading-l: 48px;
          --font-size-heading-m: 32px;
          --font-size-heading-s: 26px;
          --font-size-heading-xs: 20px;
         
          --font-size-body: 18px;

          --font-size-number-4x4:56px;
          --font-size-number-6x6:44px;
        
          --line-height-header-xl:120px;
          --line-height-header-l:34px;
          --line-height-header-m:19px;
          --line-height-header-s:16px;
          --line-height-body:18px;
          --line-height-body-mobile:14px;
        
        }
        
        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        h1{
            font-size: var(--font-size-heading-l) ;
        }

        h2{font-size: var(--font-size-heading-m) ;}

        h3{
            font-size: var(--font-size-heading-xs) ;
        }
        
        p {
            font-size: var(--font-size-body) ;
        }
        
        html {
          font-size: 62.5%;
        }
        
        body {
          font-size: var(--font-size-body);
          font-family: 'Atkinson Hyperlegible', sans-serif;
          min-height:100vh;
          font-weight: 700;
          
        }
        
        #root{
          position: relative;
          min-height: inherit;
          width: 100%;
          
        }


        
        
       
`;

export default GlobalStyles;

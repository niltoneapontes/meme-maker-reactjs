import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'Montserrat', sans-serif;
}

::-webkit-scrollbar{
    background: transparent;
    height: 6px;
}

::-webkit-scrollbar-thumb{
    border-radius: 8px;
    background: #eee;
}

body{
    background: #222;
}

button,
input{
    outline: 0;
}

button{
    cursor:pointer;
}
`;
import styled from 'styled-components';

export const Wrapper = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1{
        font-size: 48px;
        font-family: 'Press Start 2P', cursive;
        color: #eee;
        margin-bottom: 10px;
        margin-top: 24px;
    }
`;

export const Card = styled.div`
    background: #333;
    width: 550px;
    color: #fff;
    border-radius: 8px;
    margin-top: 15px;
    padding: 20px;
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.20);

    h2{
        font-size: 22px;
        color: #eee;
        margin-bottom: 10px;
    }
`;

export const Templates = styled.div`
    width: 100%;
    height: 90px;
    background: #222;
    border-radius: 8px;
    overflow-y: auto;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin-bottom: 30px;

    button{
        border: 0;
        background: transparent;
        margin-right: 10px;
        border: 2px solid transparent;

    &.selected {
        border-color: #ffad1f;
    }
        img{
            width: 53px;
            height: 53px;
        }
    }
`;

export const Form = styled.form`
    input{
        width: 100%;
        height: 40px;
        border-radius: 8px;
        border: 1px solid #dbdbdb;
        padding: 0 15px;
        font-size: 14px;
        margin-bottom: 10px;
    }
`;

export const Button = styled.button`
        width: 100%;
        height: 40px;
        border-radius: 8px;
        border: 0;
        background: #ffad1f;
        color: #333;
        font-weight: bold;
        font-size: 14px;
        transition: background 0.2s ease-in;

        &:hover{
            background: #fa7a0d;
            color: #fff;
        }
`;
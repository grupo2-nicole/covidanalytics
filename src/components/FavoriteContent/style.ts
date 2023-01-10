import styled from "styled-components"

export const FavoriteStyle = styled.section`
    display: flex;
    flex-direction: column;
    
    & > section > div:first-of-type {
        width: 174px;
        height: 162px;
        background: var(--white);
        padding: 23px 3px 3px 3px;
    }

    section:first-of-type {
        display: flex;
        justify-content: space-around;  
    }

    & > h2 {
        background: var(--color-primary);
        font-family: Inter;
        font-size: 30px;
        font-weight: 700;
        text-align: center;
        color: var(--gray-3);
        display: flex;
        align-items: center;
        justify-content: center;
        margin:25px 0 35px 0 ;
    }

    & > button:nth-child(1) {
        width: 29px;
        height: 29px;
        border-radius: 100%;
        background-color: var(--white);
        border:none;
        position: relative;
        top: 22px;
        left: 90%; 
    }

    button:nth-child(2) {
        width: 100%;
    }

    .MuiTableCell-body {
        border: none;
        padding: 10px 5px;
        font-family: var(--font-family-1);
        font-size: var(--label);
        font-weight: 400;
        color: var(--gray-2);
    }

    img:nth-child(2) {
        height: 273px;
        width: 277px;
        border-radius: 15px;
    }

    @media (min-width: 1200px) {
        width: 100%;
        padding:0;
    }

`
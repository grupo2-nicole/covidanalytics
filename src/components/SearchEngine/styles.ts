import styled from "styled-components";


export const StyledSearch = styled.section`
    background-color: var(--gray-1);
    min-height: 568px;
    max-width:675px;
    width: 50%;
    margin: 0 auto;
    padding: 16px 48px 0px 48px;
    border-radius: var(--radius-3);
    
    h2 {
        font-family: var(--font-family-1);
        font-size: var(--title-2);
        font-weight: 700;
        text-align: center;
        color: var(--gray-3);
        margin-bottom: 28px;

    }

    div {
        display: flex;
        width: 100%;
        gap:13px;
    }

    input {
        width: 90%;
        height: 32px;
        border-radius:var(--radius-2);
        border: 1px solid var(--white);
        font-family: var(--font-family-1);
        font-size: var(--label);
        font-weight: 500;
        padding-left: 10px;
    }

    button {
        width: 48px;
        border-radius:var(--radius-2);
        background-color:#0083D1;
        border: 1px solid #0083D1;
    }

    svg {   
        color: white;
        font-size:16px;
    }

    main {
        width: 100%;
    }
`;
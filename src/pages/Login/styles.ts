import styled, { createGlobalStyle } from "styled-components";

export const LoginStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: auto 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: var(--white);
    font-size: 25px;
    text-align: center;
    margin-bottom: 16px;
    font-weight: 900;
    font-family: "inter";
  }

  form {
    padding: 30px 20px;
    background: rgba(330, 330, 330, 0.25);
    backdrop-filter: blur(10px);
    border-radius: var(--radius-3);
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    gap: 40px;
    text-align: center;
    max-width: 580px;
    width: 90%;
    max-width: 450px;

    button {
      height: 56px;
      font-size: var(--font-button);
      font-family: "inter";
    }

    span {
      color: var(--black);
      font-size: var(--name-states);
      font-weight: 400;
      font-family: "inter";
    }

    > div {
      height: 40px;
      border-radius: 5px;
      p {
        font-weight: 500;
        color: var(--white) !important;
      }
    }

    > div:nth-child(2) {
      height: 40px;
      border-radius: 5px;
    }

    input {
      background-color: white;
      font-family: "inter";
      border-radius: 5px;
    }

    a {
      cursor: pointer;
      font-family: "inter";
      font-size: var(--font-button);
      color: var(--white);
      width: max-content;
      margin: 0 auto;
    }
  }
`;

export const BodyStyled = createGlobalStyle`
  body {
    background-position: 10%;
    transition: 0.5s;
  }
`;

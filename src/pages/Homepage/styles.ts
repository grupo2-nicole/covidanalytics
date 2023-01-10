import styled from "styled-components";
import background from "../../assets/background.jpg";

export const HomepageStyled = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: auto 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;

  > div {
    height: 292px;
    padding: 1.5rem 1rem;
    margin: 0 1rem;
    max-width: 600px;
    margin-top: 1.5rem;
    background-color: var(--gray-trans);
    border-radius: var(--radius-2);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;

    p {
      text-align: center;
      font-size: 25px;
      color: var(--white);
      font-family: var(--font-family-1);
      text-shadow: 1px 1px 2px var(--gray-5);
      line-height: 125%;
      padding: 30px;
    }
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding-bottom: 5%;
      > div {
        display: flex;
        gap: 15px;
        margin-bottom: 1rem;
      }
    }
  }
  /* a {
    color: var(--white);
    text-decoration: none;
    font-weight: 400;
    font-size: 24px;
    padding: 0.5rem 1rem;
    border: 2px solid var(--white);
    border-radius: var(--radius-2);
    background-color: var(--color-blue);
    :hover {
      transform: translateY(-2px);
      transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
      background-color: transparent;
    }
  } */

  button {
    min-width: 110px;
    height: 52px;
  }

  a {
    text-decoration: none;
    color: unset;
  }
`;

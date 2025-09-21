import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui, sans-serif;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.primary};
    transition: background 0.2s ease, color 0.2s ease;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

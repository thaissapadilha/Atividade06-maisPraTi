import React from "react";
import styled, { css } from "styled-components";

const variants = {
  solid: css`
    background: ${({ theme }) => theme.colors.accent};
    color: white;
    border: none;

    &:hover {
      opacity: 0.9;
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.accent};
    border: 2px solid ${({ theme }) => theme.colors.accent};

    &:hover {
      background: ${({ theme }) => theme.colors.accent};
      color: white;
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.accent};
    border: none;

    &:hover {
      background: ${({ theme }) => theme.colors.card};
    }
  `,
};

const StyledButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-weight: 500;
  transition: all 0.2s ease;
  ${({ variant }) => variants[variant] || variants.solid};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;

export function Button({ children, variant = "solid", ...props }) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}

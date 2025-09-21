import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) => theme.shadow.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  z-index: 50;
`;

const Logo = styled.div`
  font-weight: bold;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const CartButton = styled.button`
  position: relative;
  font-size: 1.25rem;
  background: transparent;
  border: none;
  cursor: pointer;

  &::after {
    content: "${({ count }) => count}";
    position: absolute;
    top: -6px;
    right: -10px;
    background: ${({ theme }) => theme.colors.accent};
    color: white;
    border-radius: ${({ theme }) => theme.radius.full};
    padding: 0 6px;
    font-size: 0.75rem;
    font-weight: bold;
    display: ${({ count }) => (count > 0 ? "block" : "none")};
  }
`;

const Toggle = styled.button`
  background: ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  width: 48px;
  height: 24px;
  border: none;
  padding: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.card};
  transition: transform 0.25s ease;
  transform: ${({ $active }) =>
    $active ? "translateX(24px)" : "translateX(0)"};
`;

export function Navbar({ cartCount, onToggleTheme, isDarkMode, onToggleCart }) {
  return (
    <Nav>
      <Logo>Mini Loja Pratas</Logo>
      <Actions>
        <Toggle onClick={onToggleTheme} aria-label="Alternar tema">
          <Circle $active={isDarkMode} />
        </Toggle>

        <CartButton
          onClick={onToggleCart}
          count={cartCount}
          aria-label="Abrir carrinho"
        >
          🛒
        </CartButton>
      </Actions>
    </Nav>
  );
}

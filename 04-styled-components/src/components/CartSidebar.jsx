import React from "react";
import styled from "styled-components";

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: ${({ $open }) => ($open ? "0" : "-320px")};
  width: 320px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: -2px 0 6px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  transition: right 0.3s ease;
  z-index: 100;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.sm};
`;

const Title = styled.span`
  flex: 1;
  font-size: 0.9rem;
`;

const Price = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
`;

export function CartSidebar({ isOpen, onClose, cartItems }) {
  return (
    <Sidebar $open={isOpen}>
      <Header>
        <span>Carrinho</span>
        <button onClick={onClose}>✖</button>
      </Header>

      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        cartItems.map((item, i) => (
          <Item key={i}>
            <Img src={item.image} alt={item.title} />
            <Title>{item.title}</Title>
            <Price>R$ {item.price.toFixed(2)}</Price>
          </Item>
        ))
      )}
    </Sidebar>
  );
}

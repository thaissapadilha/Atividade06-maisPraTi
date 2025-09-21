import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Skeleton } from "./Skeleton";

const Card = styled.article`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 */
  background: #f3f4f6;
`;

const Img = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Price = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
`;

const Rating = styled.span`
  font-size: 0.9rem;
  color: gold;
`;

const Tag = styled.span`
  align-self: flex-start;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  border-radius: ${({ theme }) => theme.radius.full};
  padding: 2px 8px;
  font-size: 0.75rem;
`;

export function ProductCard({ product, onAdd, loading }) {
  if (loading) {
    return (
      <Card aria-busy="true">
        <Skeleton height="200px" />
        <Content>
          <Skeleton height="20px" width="80%" />
          <Skeleton height="20px" width="50%" />
          <Skeleton height="20px" width="60%" />
          <Skeleton height="36px" width="100%" />
        </Content>
      </Card>
    );
  }

  return (
    <Card>
      <ImageWrapper>
        <Img src={product.image} alt={product.title} loading="lazy" />
      </ImageWrapper>
      <Content>
        <Title>{product.title}</Title>
        <Tag>{product.tag}</Tag>
        <Price>R$ {product.price.toFixed(2)}</Price>
        <Rating>★ {product.rating}</Rating>
        <Button onClick={() => onAdd(product)}>Adicionar</Button>
      </Content>
    </Card>
  );
}

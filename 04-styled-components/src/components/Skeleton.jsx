import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const Box = styled.div`
  border-radius: ${({ theme }) => theme.radius.sm};
  background: #e0e0e0;
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #f0f0f0 40px,
    #e0e0e0 80px
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.2s infinite linear;
`;

export function Skeleton({ height = "1rem", width = "100%", style }) {
  return <Box style={{ height, width, ...style }} />;
}

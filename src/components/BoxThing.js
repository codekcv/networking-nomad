import React, { useState } from "react";
import styled from "styled-components";
import { ScreenThing } from "./ScreenThing";

export const BoxThing = ({ title, setScroll, Content }) => {
  const [expand, setExpand] = useState(false);
  const [extend, setExtend] = useState(false);

  const handleClick = () => {
    if (!expand) {
      setExpand(true);
      setScroll(false);
      setTimeout(() => setExtend(true), 1000);
    } else {
    }
  };

  const handleClose = () => {
    setExpand(false);
    setExtend(false);
    setTimeout(() => setScroll(true), 1200);
  };

  return (
    <Container expand={expand}>
      <Canvas onClick={handleClick} expand={expand}>
        <Screen expand={expand}>
          {!extend ? (
            <Title expand={expand}>{title}</Title>
          ) : (
            <ScreenThing handleClose={handleClose} Content={Content} />
          )}
        </Screen>
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 100vh;
`;

const Title = styled.div`
  transition: 1s ease;
  opacity: ${({ expand }) => (expand ? 0 : 1)};
  font-size: 3rem;
  font-family: "Monoton", cursive;
`;

const Canvas = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ expand }) => (expand ? `90vw` : `600px`)};
  height: ${({ expand }) => (expand ? `90vh` : `350px`)};
  box-shadow: 0 0 16px black;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.6);
  transition: 1s ease;
  z-index: 10;
`;

const Screen = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 95%;
  background: ${({ expand }) =>
    expand ? "rgba(0,0,0,0.9)" : "rgba(255,255,255,0.5)"};
  border-radius: 30px !important;
  transition: 1s ease;
  box-shadow: ${({ expand }) =>
    expand ? "0 0 32px -16px turquoise inset" : "none"} !important;
  z-index: 10;
`;

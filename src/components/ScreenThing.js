import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const ScreenThing = ({ handleClose, Content }) => {
  const [show, setShow] = useState(false);
  const [bye, setBye] = useState(false);

  const getOut = () => {
    setBye(true);
    setTimeout(() => {
      handleClose();
      setShow(false);
    }, 300);
  };

  useEffect(() => {
    setShow(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container show={show} bye={bye} onClick={getOut}>
        <div className="here">
          <Content />
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 2rem auto;
  overflow-x: hidden;
  overflow-y: scroll;
  color: white;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: 1.5s ease;
  pointer-events: auto;
  z-index: -1;
  background-color: black;
  background-image: radial-gradient(rgba(0, 105, 100, 0.6), black 120%);
  /* text-shadow: 0 0 5px #c8c8c8; */
  font-family: "Share Tech Mono", monospace;
  /* font-family: "Bellota Text", cursive; */
  /* font-family: "IBM Plex Mono", monospace; */

  /* ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: repeating-linear-gradient(
      0deg,
      rgba(black, 1.15),
      rgba(black, 1.15) 1px,
      transparent 1px,
      transparent 2px
    );
    z-index: -2;
  } */

  :after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        transparentize($screen-background, 1) 50%,
        transparentize(darken($screen-background, 10), 0.75) 50%
      ),
      linear-gradient(
        90deg,
        transparentize(#ff0000, 0.94),
        transparentize(#00ff00, 0.98),
        transparentize(#0000ff, 0.94)
      );
    z-index: 2;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }

  .here {
    max-width: 900px;
    margin: 2rem auto;
    font-size: 1.35rem;
    text-align: justify;
    /* h1,
    h2,
    code,
    p,
    li {
      font-size: 1.35rem;
    } */
    p {
      text-indent: 1.5rem;
    }

    li {
      margin-left: 3rem;
    }

    th,
    td {
      padding-left: 1rem;
    }
    th {
      font-weight: bold;
    }
  }

  border-radius: 30px;
  box-shadow: 0 0 32px -16px turquoise inset;

  /*
  // === ANIMATION
  */

  animation: ${({ bye }) => (bye ? "turn-off 0.55s ease" : "none")};
  animation-fill-mode: forwards;

  @keyframes turn-off {
    0% {
      transform: scale(0.8, 1) translate3d(0, 0, 0);
      -webkit-filter: brightness(1);
      filter: brightness(1);
      opacity: 1;
    }
    60% {
      transform: scale(1, 0.001) translate3d(0, 0, 0);
      -webkit-filter: brightness(10);
      filter: brightness(10);
    }
    100% {
      animation-timing-function: $ease-in-quint;
      transform: scale(0, 0.0001) translate3d(0, 0, 0);
      -webkit-filter: brightness(50);
      filter: brightness(50);
    }
  }
`;

export const Command = styled.div`
  background: rgba(0, 0, 0, 0.4);
  border: 1px darkslateblue solid;
  border-radius: 8px;
  padding: 0.2rem;
  margin: 0.2rem;
  padding-left: 0.6rem;
  font-size: 1.15rem;
`;

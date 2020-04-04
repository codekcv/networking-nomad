import React, { useState } from "react";
import styled from "styled-components";
import { BoxThing } from "./components/BoxThing";
import bg from "./assets/pattern.jpg";
import { Character } from "./components/Rocket";
import { NetworkBasics } from "./sections/Basics";
import { NetworkSharing } from "./sections/Sharing";
import { Routing } from "./sections/Routing";
import { DNS } from "./sections/DNS";
import { Config } from "./sections/Config";

export const App = () => {
  const [scroll, setScroll] = useState(true);
  const [x, setX] = useState(0);
  const [c, setC] = useState(0);

  const onWheel = (e) => {
    const val = e.deltaY;
    scroll && (e.deltaY > 0 ? setX(x - 12) : x < 0 && setX(x + 12));
    scroll &&
      (e.deltaY > 0
        ? setC((prev) => prev - val)
        : c < 0 && setC((prev) => prev - val));
  };

  return (
    <Container onWheel={onWheel}>
      <OuterWrapper scroll={scroll}>
        <InnerWrapper>
          <Background x={x} />
          <NetworkingNomad c={c}>NETWORKING NOMAD</NetworkingNomad>
          <Details>
            <div className="c1">A Linux Journey... final part.</div>
            <div className="c2">
              Christian Villamin | 90/90/1 ( 2020 Q1 ) - March Deliverable
            </div>
          </Details>

          <Padder />
          <BoxThing
            title="BASICS"
            Content={NetworkBasics}
            setScroll={setScroll}
          />
          <BoxThing
            title="SHARING"
            Content={NetworkSharing}
            setScroll={setScroll}
          />
          <BoxThing title="ROUTING" Content={Routing} setScroll={setScroll} />
          <BoxThing title="CONFIG" Content={Config} setScroll={setScroll} />
          <BoxThing title="DNS" Content={DNS} setScroll={setScroll} />
          <Fin>FIN</Fin>
          <Character c={c} />
        </InnerWrapper>
      </OuterWrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

const Padder = styled.div`
  width: 15vw;
`;

const OuterWrapper = styled.div`
  width: 100vh;
  height: 100vw;
  transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;
  overflow-y: ${({ scroll }) => (scroll ? "scroll" : "hidden")};
  overflow-y: none;
  /* overflow-y: hidde; */
  overflow-x: hidden;
  overflow-x: hidden;
  position: absolute;

  scrollbar-width: none;
  -ms-overflow-style: none;

  width: 100vw;
  /* height: 200vh; */
  overflow-y: ${({ scroll }) => (scroll ? "scroll" : "hidden")};
  overflow-x: hidden;
`;

const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 600vw;
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
`;

const Background = styled.div`
  position: absolute;
  background-image: url(${bg});
  width: 500vw;
  height: 100vh;
  left: ${({ x }) => `${x}px`};
  overflow-x: hidden;
  overflow-y: hidden;
`;

const NetworkingNomad = styled.div`
  font-size: 6rem;
  /* position: sticky; */
  position: fixed;
  /* left: ${({ c }) => `calc(10vw + ${-c}px)`}; */
  left: 10vw;
  transition: 1s linear;
  color: white;
  top: 50vh;
  transform-origin: 0 0;
  transform: rotate(-90deg) translateX(-50%);
  font-family: "Share Tech Mono", monospace;
  text-shadow: 4px 4px darkslateblue;
`;

const Details = styled.div`
  position: absolute;
  left: calc(10vw + 120px);
  top: 10vh;

  .c1 {
    font-size: 3rem;
    color: white;
    text-shadow: 2px 2px darkcyan;
  }
  .c2 {
    font-size: 1.5rem;
    color: lightgoldenrodyellow;
    text-shadow: 1px 1px darkcyan;
  }
`;

const Fin = styled.div``;

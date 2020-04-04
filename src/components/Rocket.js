import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import rocketNoFire from "../assets/rocket-no-fire.svg";

export const Character = ({ c }) => {
  const [prevC, setPrevC] = useState(10);
  const [dir, setDir] = useState(true);
  const [deg, setDeg] = useState(45);
  const [counter, setCounter] = useState(c);
  const [idle, setIdle] = useState(true);
  const [threshold, setThreshold] = useState(0);
  const rocketRef = useRef(0);

  useEffect(() => {
    const diff = c - prevC;
    if (diff < 0) {
      if (!dir) {
        setDeg((prev) => prev + 180);
        setDir(true);
      }
    } else {
      if (dir) {
        setDeg((prev) => prev + 180);
        setDir(false);
      }
    }
    setPrevC(c);

    // setTimeout(() => {
    //   if (c === prevC) {
    //     console.log(1);
    //   } else {
    //     console.log(2);
    //   }
    // }, 500);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [c]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (rocketRef.current) {
        const val = rocketRef.current.getBoundingClientRect().x;
        setCounter((p) => Math.floor(val));
      }
    }, 250);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   console.log(counter.toFixed(0));

  //   console.log("C:", counter);
  useState(() => {
    console.log("KKK");
    if (rocketRef.current) {
      // console.log("CUR:", counter);
      const x = Math.floor(rocketRef.current.getBoundingClientRect().x);

      const diff = Math.abs(x - counter);
      console.log("Diff:", diff);
      if (diff < 5) {
        setThreshold((p) => p + 1);
      } else {
        setThreshold(0);
      }
      //khjif (diff > 4) {
      //   if (idle) {
      //     console.log(diff < 4);
      //     setIdle(false);
      //     // console.log("HUAW");
      //   }
      // }
    }
  }, [counter]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Thingy c={-c} d={deg} ref={rocketRef}>
      <img src={rocketNoFire} alt="rocket-idle" />
    </Thingy>
  );
};

const Thingy = styled.div`
  position: absolute;
  left: ${({ c }) => `calc(50vw + ${c}px)`};
  bottom: 10vh;
  transition: 0.5s ease;
  transform: ${({ d }) => `rotate(${d}deg)`} translateX(-50%);
  transform-origin: 50% 50%;
`;

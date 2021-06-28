import React from "react"
import styled from "styled-components"
import Image from "../assets/images/img/coffee-web.png"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg
          src={Image}
          alt="background-image"
          aria-label="background image of work station"
        />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroP>Hi, my name is</HeroP>
          <HeroH1>Jenessa Tan</HeroH1>
          <HeroP>I'm a mildly hilarious software developer</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -60px;
  color: #fff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
  }
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 60px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`

const HeroH1 = styled.h1`
  font-size: clamp(3rem, 12vw, 5rem);
  margin: 1.5rem 0;
  letter-spacing: 3px;
  padding: 0 1rem;
  text-transform: uppercase;
`

const HeroP = styled.p`
  font-size: clamp(1rem, 5vw, 2rem);
  font-weight: 200;
`

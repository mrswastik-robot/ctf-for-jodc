import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
  } from './HeroElements';
  import {Button} from '../ButtonElement'

const HeroSection = () => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  const scrollWin = () => {
    // window.scrollTo(300, 500, {behavior: 'smooth'});
    window.scrollTo({ top: 750, behavior: 'smooth' })
  }


  return (
    <div>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>

        <HeroContent>
          <HeroH1><span className=" text-green-400 font-semibold font-montserrat">C</span>apture <span className=" text-green-400 font-semibold">T</span>he <span className=" text-green-400 font-semibold">F</span>lag.</HeroH1>
          <HeroP>
          これはフラグではありません笑
          </HeroP>
          <HeroBtnWrapper>
            <Button onClick={scrollWin} to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' className=" cursor-wait">
              Scroll Down {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;

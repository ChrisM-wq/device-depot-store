import React from "react";
import { useKeenSlider } from "keen-slider/react";
import styled from "styled-components";
import "keen-slider/keen-slider.min.css";

const StyledBar = styled.div`
    background-color: #7315e5;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const StyledSlide = styled.div`
    background-color: #7315e5;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: grab;
    font-size: .8rem;
`;

export default () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      drag: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
    <StyledBar>
        <div ref={sliderRef} className="keen-slider">
            <StyledSlide className="keen-slider__slide number-slide1">Start searching for your new device now!</StyledSlide>
            <StyledSlide className="keen-slider__slide number-slide2">Brand new stock for the latest laptops!</StyledSlide>
            <StyledSlide className="keen-slider__slide number-slide3">Choose your dream product and let us handle the rest!</StyledSlide>
        </div>
      </StyledBar>
    </>
  )
}

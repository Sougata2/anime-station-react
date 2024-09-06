import { useState } from "react";

import SlideText from "./SlideText";
import styled, { css } from "styled-components";
import Modal from "../Modal";
import Card from "../Card";

const StyledSlider = styled.div`
  position: relative;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 10px;
  background-color: rgba(249, 248, 248, 0.99);
`;
const SlideImage = styled.div`
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  box-shadow: inset 120px -70px 70px  rgba(249, 248, 248, 0.99);
  width: 75%;
  height: 100%;
  background-position: right;
  @media (max-width: 800px) {
    background-size: cover;
    background-position: center;
    width: 90%;
  }
`;
const StyledSlide = styled.div`
  height: 500px;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  ${({ $active }) =>
    $active
      ? css`
          display: flex;
          flex-direction: row-reverse;
        `
      : css`
          display: none;
        `}
  @media (max-width: 800px) {
    height: 250px;
  }
`;

const SlideBtnPrev = styled.button`
  display: flex;
  align-items: center;
  font-size: 30px;
  padding: 15px 21px;
  background-color: #e384ff;
  color: white;
  position: absolute;
  left: 0;
  top: 50%;
  border: none;
  transform: translate(-50%, -20%);
  border-radius: 100%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  @media (max-width: 800px) {
    font-size: 25px;
    padding: 6px 11px;
    transform: translate(-42%, -20%);
  }
`;
const SlideBtnNext = styled.button`
  display: flex;
  align-items: center;
  font-size: 30px;
  padding: 15px 21px;
  background-color: #e384ff;
  color: white;
  position: absolute;
  right: 0;
  top: 50%;
  border: none;
  transform: translate(50%, -20%);
  border-radius: 100%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  @media (max-width: 800px) {
    font-size: 25px;
    padding: 6px 11px;
    transform: translate(42%, -20%);
  }
`;

function Slider({ animes }) {
  const [activeSlide, setActiveSlide] = useState(0);
  function nextSlide() {
    setActiveSlide((activeSlide) => (activeSlide + 1) % animes.length);
  }
  function prevSlide() {
    setActiveSlide((activeSlide) =>
      activeSlide - 1 < 0 ? animes.length - 1 : activeSlide - 1
    );
  }
  return (
    <>
      <StyledSlider>
        {animes.map((anime, index) => (
          <Modal key={anime.id}>
            <Modal.Open>
              <StyledSlide $active={activeSlide === index}>
                <SlideImage $src={anime.poster} />
                <SlideText
                  name={anime.name}
                  description={anime.description}
                  episodes={anime.episodes}
                />
              </StyledSlide>
            </Modal.Open>
            <Modal.Window>
              <Card animeId={anime.id} />
            </Modal.Window>
          </Modal>
        ))}
        <SlideBtnPrev onClick={prevSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </SlideBtnPrev>
        <SlideBtnNext onClick={nextSlide}>
          <i className="fa-solid fa-angle-right"></i>
        </SlideBtnNext>
      </StyledSlider>
    </>
  );
}

export default Slider;

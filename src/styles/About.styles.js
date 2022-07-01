import styled from "styled-components"

export const IntroWrapper = styled.div`
  padding: 3rem 1rem;
  color: #000;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 2.4rem;
    padding: 6rem 4rem;
  }
  @media (min-width: 768px) {
    padding: 0;
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1100px;
    gap: 4rem;
  }
`
export const Section = styled.section`
  background-color: #f5eaea;
`
export const IntroImgWrapper = styled.div`
  display: block;
`
export const IntroTextWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 2rem;
  }
`
export const IntroTitle = styled.h1`
  font-size: 3rem;
  line-height: 1.4;
  font-weight: lighter;
  @media (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`
export const IntroDesc = styled.p`
  font-family: "Karla", sans-serif;
  line-height: 1.6;
`
export const AboutContent = styled.div`
  font-family: "Karla", sans-serif;
  line-height: 1.5;
  padding: 3rem 1rem;
  min-height: 100vh;
  @media (min-width: 768px) {
    padding: 3rem 4rem;
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 900px;
    padding: 4rem 4rem;
  }
`

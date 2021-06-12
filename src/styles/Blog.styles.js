import styled from "styled-components"
import img from "../images/Blog-page-banner-image.jpg"

export const Section = styled.section`
  padding: 5rem 1rem 0rem 1rem;
`
export const Img = styled.img`
  width: 100%;
`
export const Banner = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 400px;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  color: #fff;
  text-align: center;
`
export const BannerTitle = styled.h1`
  font-size: 3rem;
`
export const BlogTitle = styled.h2`
  font-weight: lighter;
  color: #000;
`

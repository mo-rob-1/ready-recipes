import styled from "styled-components"
import Link from "gatsby-link"
import img from "../../images/food-banner-homepage.jpg"

export const Section = styled.section`
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  color: #fff;
  text-align: center;
`
export const Title = styled.h1`
  font-weight: lighter;
`
export const Description = styled.p`
  line-height: 1.6;
  font-family: "Karla", sans-serif;
  font-size: 0.9rem;
  text-align: left;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    text-align: center;
    margin: 0 auto;
    max-width: 540px;
  }
`
export const SubscribeBtn = styled(Link)`
  font-family: "Karla", sans-serif;
  text-decoration: none;
  border: solid 1px #fff;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  border-radius: 2rem;
  color: #fff;
  @media (min-width: 768px) {
    margin-top: 1.4rem;
  }
`

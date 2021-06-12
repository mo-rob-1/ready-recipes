import React from "react"
import { useSubscribeQuery } from "../../hooks/useSubscribeQuery"
import {
  Section,
  Title,
  Description,
  SubscribeBtn,
} from "./SubscribeSection.styles"

const SubscribeSection = () => {
  const data = useSubscribeQuery()
  console.log(data)
  return (
    <Section>
      <Title>{data.allWpPage.edges[0].node.subscribe.heading}</Title>
      <Description>
        {data.allWpPage.edges[0].node.subscribe.description}
      </Description>
      <SubscribeBtn to="/">Subscribe</SubscribeBtn>
    </Section>
  )
}

export default SubscribeSection

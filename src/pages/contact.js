import React from "react"
import Layout from "../components/Layout/Layout"
import {
  InnerWrapper,
  ContactInfoWrapper,
  ContactWrapper,
  Heading,
  Desc,
  FormWrapper,
  NumberAndEmailWrapper,
  IconsWrapper,
  Form,
  FormItemWrapper,
  Label,
  FormInput,
  TextArea,
  Container,
  SubmitBtn,
  StyledLink,
} from "../styles/Contact.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  return (
    <Layout>
      <Container>
        <ContactWrapper>
          <ContactInfoWrapper>
            <InnerWrapper>
              <Heading>
                If you have a question or a recipe you would like to share,
                please fill the form to send your enquiry.
              </Heading>
              <Desc>
                Please provide some information about your recipe or question
                and we’ll move the conversation on from there.
              </Desc>
            </InnerWrapper>
            <InnerWrapper>
              <NumberAndEmailWrapper>
                <StyledLink href="tel:0800000000">
                  {" "}
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    style={{
                      marginRight: "9px",
                    }}
                  />
                  0800 00 0000
                </StyledLink>
                <StyledLink href="mailto:info@readyrecipes.com">
                  {" "}
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{
                      marginRight: "9px",
                    }}
                  />
                  info@readyrecipes.com
                </StyledLink>
              </NumberAndEmailWrapper>
              <IconsWrapper>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    fontSize: "1.8rem",
                    marginRight: "18px",
                    cursor: "pointer",
                  }}
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ fontSize: "1.8rem", cursor: "pointer" }}
                />
              </IconsWrapper>
            </InnerWrapper>
          </ContactInfoWrapper>
          <FormWrapper>
            <Form>
              <FormItemWrapper>
                <Label>Name</Label>
                <FormInput />
              </FormItemWrapper>
              <FormItemWrapper>
                <Label>Email</Label>
                <FormInput />
              </FormItemWrapper>
              <FormItemWrapper>
                <Label>Subject</Label>
                <FormInput />
              </FormItemWrapper>
              <FormItemWrapper>
                <Label>Message</Label>
                <TextArea rows="12" maxlength="3000" required></TextArea>
              </FormItemWrapper>
              <SubmitBtn type="submit">Submit</SubmitBtn>
            </Form>
          </FormWrapper>
        </ContactWrapper>
      </Container>
    </Layout>
  )
}

export default Contact

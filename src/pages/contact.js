import React from "react"
import Layout from "../components/Layout/Layout"
import {
  InnerWrapper,
  ContactInfoWrapper,
  ContactWrapper,
  Heading,
  Desc,
  AddressWrapper,
  FormWrapper,
  NumberAndEmailWrapper,
  IconsWrapper,
  Form,
  FormItemWrapper,
  Label,
  FormInput,
  TextArea,
} from "../styles/Contact.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelope,
  faPhone,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  return (
    <Layout>
      <ContactWrapper>
        <ContactInfoWrapper>
          <InnerWrapper>
            <Heading>
              If you have question or a recipe you want to share, please
              complete the form below to send your enquiry.
            </Heading>
            <Desc>
              Please provide some information on about your recipe or question
              and we’ll move the conversation on from there.
            </Desc>
          </InnerWrapper>
          <InnerWrapper>
            {/* <AddressWrapper>
              <p>123 Recipe St</p>
              <p>Manchester, UK</p>
            </AddressWrapper> */}
            <NumberAndEmailWrapper>
              <p>
                {" "}
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  style={{
                    marginRight: "9px",
                  }}
                />
                0800 00 0000
              </p>
              <p>
                {" "}
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{
                    marginRight: "9px",
                  }}
                />
                info@readyrecipes.com
              </p>
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
            {/* <FormItemWrapper>
              <Label>Last Name</Label>
              <FormInput />
            </FormItemWrapper> */}
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
          </Form>
        </FormWrapper>
      </ContactWrapper>
    </Layout>
  )
}

export default Contact

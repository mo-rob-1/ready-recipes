import styled from "styled-components"

export const Container = styled.div`
  background-color: #f5eaea;
  min-height: 100vh;
`
export const ContactWrapper = styled.div`
  padding: 3rem 1rem;
  @media (min-width: 768px) {
    padding: 8rem 4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 2rem;
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1100px;
    padding-right: 0;
    padding-left: 0;
    gap: 7rem;
  }
`
export const ContactInfoWrapper = styled.div`
  display: block;
`
export const InnerWrapper = styled.div`
  display: block;
`
export const Heading = styled.div`
  line-height: 1.5;
  font-size: 1.8rem;
  margin-bottom: 2rem;
`
export const Desc = styled.div`
  font-family: "Karla", sans-serif;
  line-height: 1.5;
  font-size: 0.9rem;
  @media (min-width: 1024px) {
    width: 80%;
  }
`
export const AddressWrapper = styled.div`
  font-family: "Karla", sans-serif;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
export const NumberAndEmailWrapper = styled.div`
  font-family: "Karla", sans-serif;
  margin-top: 2rem;
  font-size: 0.9rem;
`
export const IconsWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`
export const FormWrapper = styled.div`
  display: block;
`
export const Form = styled.form`
  display: block;
`
export const FormItemWrapper = styled.div`
  display: block;
  margin-bottom: 1.8rem;
`
export const Label = styled.label`
  font-family: "Karla", sans-serif;
`
export const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.4rem;
`
export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  margin-top: 0.4rem;
`
// export const TextLink = styled.a`
//   color: #000;
//   text-decoration: none;
//   padding-bottom: 3rem;
// `

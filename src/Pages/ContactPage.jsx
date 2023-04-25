import { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const FormLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

const SubmitButton = styled.button`
  background-color: #0077cc;
  color: #fff;
  font-size: 1rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #005ea3;
  }
`;

const ContactPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      phone,
    };
    let mainop = JSON.parse(window.localStorage.getItem("contacts")) || [];
    mainop.push(formData);
    window.localStorage.setItem("contacts", JSON.stringify(mainop));
    setEmail('')
    setFirstName('')
    setLastName('')
    setPhone('')
  };
  

  return (
    <ContactContainer>
     <Form onSubmit={handleSubmit}>
  <FormLabel htmlFor="firstName">First Name</FormLabel>
  <FormInput
    type="text"
    id="firstName"
    value={firstName}
    onChange={(event) => setFirstName(event.target.value)}
    required
  />
  <FormLabel htmlFor="lastName">Last Name</FormLabel>
  <FormInput
    type="text"
    id="lastName"
    value={lastName}
    onChange={(event) => setLastName(event.target.value)}
    required
  />
  <FormLabel htmlFor="email">Email Id</FormLabel>
  <FormInput
    type="email"
    id="email"
    value={email}
    onChange={(event) => setEmail(event.target.value)}
    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
    required
  />
  <FormLabel htmlFor="phone">Phone Number</FormLabel>
  <FormInput
    type="tel"
    id="phone"
    value={phone}
    onChange={(event) => setPhone(event.target.value)}
    pattern="[0-9]{10}"
    required
  />
  <SubmitButton type="submit">Submit</SubmitButton>
</Form>

    </ContactContainer>
  );
};



export default ContactPage;

import { useEffect, useState } from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const WelcomeMessage = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ClearButton = styled.button`
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

const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ContactName = styled.span`
  margin-right: 1rem;
`;

const HomePage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  const onClearClick = () => {
    let id = confirm("Are you sure you want to clear");

    if(id===true){
        localStorage.removeItem('contacts');
        setContacts([]);
    }
  };

  return (
    <HomeContainer>
      <WelcomeMessage>Welcome to the React App!</WelcomeMessage>
      {contacts.length > 0 ? (
        <>
          <ContactsList>
            {contacts.map((contact) => (
              <ContactItem  key={contact.id}>
                <ContactName>{contact.firstName}    {contact.lastName}</ContactName>
              </ContactItem>
            ))}
          </ContactsList>
        </>
      ) : (
          <p>No contacts found.</p>
          )}
          <ClearButton onClick={onClearClick}>Clear</ClearButton>
    </HomeContainer>
  );
};

export default HomePage;

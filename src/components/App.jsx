import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container, Section, TitleH1, TitleH2 } from './App.styled';

export function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <TitleH1>Phonebook</TitleH1>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <TitleH2>Contacts</TitleH2>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}

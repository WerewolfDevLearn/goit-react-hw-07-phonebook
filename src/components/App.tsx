import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import usePHBState from '../redux/selectors';
import { IContact } from 'types';
import AppStl from './App.module.css';
import { getContacts } from '../services/api';
import { useEffect } from 'react';

export default function App() {
  const { contacts, filter } = usePHBState();
  const getVisibleContacts = (contacts: IContact[]) => {
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };
  useEffect(() => {
    getContacts();
  }, []);
  const visibleContacts = getVisibleContacts(contacts);
  return (
    <div className={AppStl.container}>
      <h2 className={AppStl.heading}>PhoneBook</h2>

      <ContactForm />

      <h2 className={AppStl.heading}>Contacts</h2>

      {contacts.length > 1 && <Filter />}

      {contacts.length > 0 && <ContactsList visibleContacts={visibleContacts} />}
    </div>
  );
}

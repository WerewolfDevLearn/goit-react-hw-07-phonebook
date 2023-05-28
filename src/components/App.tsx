import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import AppStl from './App.module.css';
import usePHBState from '../redux/selectors';
import { fetchContacts } from '../redux/contactsOps';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IContact } from '../types';
import Loader from './Loader/Loader';
import Error from './Error/Error';

export default function App() {
  const dispatch = useDispatch();
  const { contacts, filter } = usePHBState();
  const { items, error, isLoading } = contacts;
  console.log(error);
  const getVisibleContacts = (items: IContact[]) => {
    return items.filter((item) =>
      item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const visibleContacts = getVisibleContacts(items);
  return (
    <div className={AppStl.container}>
      <h2 className={AppStl.heading}>PhoneBook</h2>

      <ContactForm />

      <h2 className={AppStl.heading}>Contacts</h2>

      {items.length > 1 && <Filter />}

      {items.length > 0 && !error && !isLoading && (
        <ContactsList visibleContacts={visibleContacts} />
      )}
      {isLoading && <Loader />}
      {error && <Error message={error} />}
    </div>
  );
}

import ContactListItem from './ContactListItem/ContactListItem';
import ContactListStl from './ContactListItem/ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { Remove } from '../../redux/contactsSlices';
import { IContact } from '../../types';
interface ContactsListProps {
  visibleContacts: IContact[];
}

export default function ContactsList({ visibleContacts }: ContactsListProps) {
  const dispatch = useDispatch();
  return (
    <ul className={ContactListStl.contactList}>
      {visibleContacts.map((visibleContact) => (
        <ContactListItem
          contact={visibleContact}
          onRemove={() => dispatch(Remove(visibleContact.id))}
          key={visibleContact.id}
        />
      ))}
    </ul>
  );
}

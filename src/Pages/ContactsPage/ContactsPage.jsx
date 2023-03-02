// import { nanoid } from 'nanoid';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import css from '../ContactsPage/ContactsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContactsRequest,
  addContactRequest,
} from 'redux/contactsOperations';
import { filterContacts } from 'redux/contactsSlice';
import { useEffect } from 'react';
import { selectFilter, selectiContactsItems } from 'redux/selectors';

function ContactsPage() {
  const contacts = useSelector(selectiContactsItems);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsRequest());
  }, [dispatch]);

  const sendContact = contact => {
    const repeatName = contacts.find(({ name }) => {
      return contact.name === name;
    });
    if (repeatName) {
      alert(`${contact.name} is already in your contacts!`);
      return;
    }
    dispatch(addContactRequest({ ...contact }));
  };

  const handleFilter = e => {
    const { value } = e.target;
    dispatch(filterContacts(value));
  };

  return (
    <div>
      <div action="" className={css.phonebook}>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <ContactForm onSubmit={sendContact} />
        <h1 className={css.contactTitle}>Contacts</h1>
        <Filter onChange={handleFilter} value={filter} />
        <ContactList />
      </div>
    </div>
  );
}

export default ContactsPage;

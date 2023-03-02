import { useDispatch, useSelector } from 'react-redux';
import { deleteContactRequest } from 'redux/contactsOperations';
import { selectFilterContacts } from 'redux/selectors';
import css from './ContactList.module.css';

export function ContactList() {
  const contacts = useSelector(selectFilterContacts);
  const dispatch = useDispatch();

  const onBtnDelete = e => {
    dispatch(deleteContactRequest(e.target.id));
  };

  return (
    <ul className={css.contactList}>
      {contacts.map(item => (
        <li className={css.contactItem} key={item.id}>
          {item.name}:<span className={css.contactNumber}>{item.number}</span>
          <button className={css.contactBtn} id={item.id} onClick={onBtnDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

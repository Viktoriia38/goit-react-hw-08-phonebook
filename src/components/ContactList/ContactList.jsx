import css from './ContactList.module.css';

export function ContactList({ onBtnDelete, contacts }) {
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

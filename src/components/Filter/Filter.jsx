import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ onChange }) {
  const value = useSelector(state => state.contacts.filter);

  return (
    <div className={css.contactsForm}>
      <label className={css.name} htmlFor="">
        Find contacts by Name
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={css.userName}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  onChange: propTypes.func.isRequired,
};

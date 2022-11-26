import { ContactListItem } from '../ContactListItem/ContactListItem.styled';
import { Filter } from 'components/Filter/Filter';

export const ContactList = ({ contacts }) => {
  return (
    <>
      <h3>Contacts</h3>
      <Filter />
      <ul>
        <ContactListItem contacts={contacts} />
      </ul>
    </>
  );
};

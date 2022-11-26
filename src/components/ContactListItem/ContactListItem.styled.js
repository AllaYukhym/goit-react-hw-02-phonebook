export const ContactListItem = ({ contacts }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </>
  );
};

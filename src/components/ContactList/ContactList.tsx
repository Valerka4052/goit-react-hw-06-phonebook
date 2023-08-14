import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export function ContactList () {
    const contacts = useSelector((state: RootState) => state.contacts);
    const filter = useSelector((state: RootState) => state.filter);
    const normalizedFilter = filter.toLowerCase();
    
    const filteredContacts = contacts.filter(({ name }) => {
        return name.toLowerCase().includes(normalizedFilter);
    });
 
    return (
        contacts.length > 0 ? <List>
            {filteredContacts.map(({ name, number, id }) => {
                return <ContactListItem key={id}
                    name={name}
                    number={number}
                    id={id}
                />
            }
            )}
        </List> :null
    );
};

import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux'; 
import { ContactType, deleteContact } from '../../redux/Contacts/slice';
import { AppDispatch } from '../../redux/store';

export function ContactListItem({ name, number, id }:ContactType) {
const dispatch:AppDispatch = useDispatch()
 
    return (
        <Item >{name}: {number}
            <Button
                onClick={() => dispatch(deleteContact(id))}
                type='button'>Delete
            </Button>
        </Item>
    );
};

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};


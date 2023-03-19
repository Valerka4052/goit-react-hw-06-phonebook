import { useDispatch } from 'react-redux';
import { Container, Label, Input } from './Filter.styled';
import { getFlter } from 'redux/Filter/slice';

export function Filter() {
    const dispatch = useDispatch()
    return (
        <Container>
            <Label >Find contacts by name<Input
                onChange={(e) => dispatch(getFlter(e.target.value))}
                name="filter"
                type="text" />
            </Label>
        </Container>
    );
};

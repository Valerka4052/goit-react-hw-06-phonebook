import { useDispatch } from 'react-redux';
import { Container, Label, Input } from './Filter.styled';
import { getFlter } from '../../redux/Filter/slice';
import { AppDispatch } from '../../redux/store';

export function Filter() {
    const dispatch: AppDispatch = useDispatch();
    return (
        <Container>
            <Label >Find contacts by name<Input
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch(getFlter(e.target.value))}
                name="filter"
                type="text" />
            </Label>
        </Container>
    );
};

import { nanoid } from "nanoid";
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage, Label, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../../redux/Contacts/slice';
import { AppDispatch, RootState } from "../../redux/store";
import { FormikValues } from 'formik';

export function ContactForm() {
    const dispatch: AppDispatch = useDispatch();
    const contacts = useSelector((state: RootState) => state.contacts);

    const getValues = (values:FormikValues): void => {
        if (values.name === '' || values.number === '') {
            return;
        } else if (contacts.find((contact) => {
            return contact.name === values.name;
        })) {
            return alert(`${values.name} is already in contacts`);
        } else {
            const contact = {
                name: values.name,
                number: values.number,
                id: nanoid(),
            };
            
            dispatch(addContact(contact));
            values.name = '';
            values.number = '';
        };
    };

    const values = {
        name: '',
        number: '',

    };
        
        const phoneSchema = Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(5)
            .required('A phone number is required');
        
        const validationSchema = Yup.object({
            name: Yup.string().required(),
            number: phoneSchema,
        });

const submitForm = (values: FormikValues): void => {
    getValues(values);
};
    
    return (
       <Formik initialValues={values} onSubmit={submitForm} validationSchema={validationSchema}>
            <Form>
                <Label>Name<Field name="name" /><ErrorMessage name="name" component="p" /></Label>
                <Label>Number<Field name="number" /><ErrorMessage name="number" component="p" /></Label>
                <Button type="submit">add contact</Button>
            </Form>
        </Formik>
    );
};

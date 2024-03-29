import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import usePHBState from '../../redux/selectors';
import * as yup from 'yup';
import { addContact } from '../../redux/contactsOps';

// Styles
import ContactFormStl from './ContactForm.module.css';

// types
import { IValues } from '../../types';
// variables
const initialValues = { name: '', number: '' };
const phoneRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
// validation
const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
});

export default function ContactForm() {
  const { contacts } = usePHBState();
  const { items } = contacts;
  const dispatch = useDispatch();
  const onSubmitFormik = (values: IValues, { resetForm }: FormikHelpers<IValues>) => {
    if (items.some((item) => item.name.toLocaleLowerCase() === values.name.toLocaleLowerCase())) {
      alert(`${values.name} is already in Contacts`);
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitFormik} validationSchema={schema}>
      <Form className={ContactFormStl.ContactForm}>
        <label className={ContactFormStl.label} htmlFor='name'>
          Name
          <Field type='text' name='name' className={ContactFormStl.input} />
          <ErrorMessage name='name' />
        </label>
        <label className={ContactFormStl.label} htmlFor='number'>
          Phone Number
          <Field type='text' name='number' className={ContactFormStl.input} />
          <ErrorMessage name='number' />
        </label>
        <button type='submit' className={ContactFormStl.buttonSubmit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

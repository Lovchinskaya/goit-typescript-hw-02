import { Formik, Form, Field} from 'formik';
import css from './SearchBar.module.css'
import toast from 'react-hot-toast';


interface Props {
  onSubmit: (value: string) => void;
}

export default function SearchBar ({ onSubmit }: Props) {

    return (
    <header className={css.formcontainer}>
        <Formik 
        initialValues={{
            topic: ''
        }}
        onSubmit={(values, actions) =>{
            if (values.topic.trim() === '') {
                toast.error('Please enter something for seach.', {
                  duration: 1750,
                  position: 'top-center',
                  className: `${css['custom-toast-error']} ${css['info']}`,
                });
                return;
              }
            onSubmit(values.topic)
            actions.resetForm();
        }}
        >
        <Form className={css.formsearch}>
          <Field
          className ={css.forminput}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit"        
        className={css.formbtn}>Search</button>
      </Form>
        </Formik>
        </header>
       
    )
}
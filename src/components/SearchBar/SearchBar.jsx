import { Formik, Form, Field} from 'formik';
import css from './SearchBar.module.css'


export default function SearchBar ({ onSearch }) {

    return (
    <header className={css.formcontainer}>
        <Formik 
        initialValues={{
            topic: ''
        }}
        onSubmit={(values, actions) =>{
            onSearch(values.topic)
            console.log(values.topic);
            actions.resetForm();
        }}
        >
        <Form className={css.formsearch}>
          <Field
          className ={css.forminput}
          type="text"
          name="topic"
        //   autocomplete="off"
        //   autofocus
          placeholder="Search images and photos"
        />
        <button type="submit"        
        className={css.formbtn}>Search</button>
      </Form>
        </Formik>
        </header>
       
    )
}
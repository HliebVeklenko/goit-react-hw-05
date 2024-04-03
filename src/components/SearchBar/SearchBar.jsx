import { Field, Form, Formik } from "formik";
import { useSearchParams } from "react-router-dom";
import css from "./SearchBar.module.css";

export default function SearchBar() {
  const [params, setParams] = useSearchParams();

  const changeFilter = (newFilter) => {
    params.set("query", newFilter);
    setParams(params);
  };
  return (
    <Formik
      initialValues={{ topic: "" }}
      onSubmit={(values, actions) => {
        changeFilter(values.topic);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field className={css.input} name="topic" />
        <button className={css.button} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
}

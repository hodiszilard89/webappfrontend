import React from "react";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";

const initialValues = {
  firstName: "asdaasd",
  lastName: "asdasd",
  email: "asdasdas",
};

const onSubmit = (values, actions) => {
  console.log(values);
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Kötelező mező";
  }
  if (!values.lastName) {
    errors.lastName = "Kötelező mező";
  }
  if (!values.email) {
    errors.email = "Kötelező mező";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Érvénytelen email cím";
  }
  return errors;
};

const EditTodo2 = ({ item, updateTodo }) => {
  //console.log(JSON.stringify(item));
  //console.log(item.toJSON());
  const item2 = item.toJSON();
  console.log({
    id: 1,
    value: "Pista",
    color: "blue",
    done: false,
    onDeleting: false,
  });
  return (
    <div>
      <h1>Formik űrlap példa</h1>
      <Formik
        // initialValues={myData.toJS()}
        initialValues={item.toJSON()}
        onSubmit={updateTodo}
        // validate={validate}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="firstName">Vezetéknév:</label>
              <Field name="value" />
              {errors.firstName && touched.firstName && (
                <div>{errors.firstName}</div>
              )}
            </div>

            <div>
              <label htmlFor="color">Keresztnév:</label>
              <Field name="color" />
              {errors.lastName && touched.lastName && (
                <div>{errors.lastName}</div>
              )}
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field name="email" type="email" />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>

            <button type="submit">Beküldés</button>
          </Form>
        )}
      </Formik>
      <Link to="/"> Back</Link>
    </div>
  );
};
export default EditTodo2;

import React from 'react';
import { FormVars } from './types'

import { useFormik } from 'formik'

const validate = (values: any) => {
  const errors = {
    name: '',
    height: '',
    weight: '',
    gender: '',
    age: ''
  };
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 50) {
    errors.name = 'Must be 50 characters or less';
  }

  if (!values.weight) {
    errors.weight = 'Required';
  } else if (values.weight.length > 20) {
    errors.weight = 'Must be 20 characters or less';
  }

  if (!values.age) {
    errors.age = 'Required';
  } else if (values.age.length >= 3) {
    errors.age = 'Must enter age';
  }


  return errors;
};


const Form = ({ personalData, onChange, onReset, onSubmit }: FormVars) => {

  const formik = useFormik({
    initialValues: {
      name: '',
      height: '',
      weight: '',
      gender: '',
      age: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formik.values.name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange} />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <input
        type="number"
        name="height"
        placeholder="Height"
        value={formik.values.height}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange} />
      {formik.touched.height && formik.errors.height ? (
        <div>{formik.errors.height}</div>
      ) : null}
      <input
        type="number"
        name="weight"
        placeholder="Weight"
        value={formik.values.weight}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange} />
      {formik.touched.weight && formik.errors.weight ? (
        <div>{formik.errors.weight}</div>
      ) : null}
      <input
        type="radio"
        name="gender"
        value="m"
        checked={formik.values.gender === "m"}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange} /> Male
      <input
        type="radio"
        name="gender"
        value="f"
        checked={formik.values.gender === "f"}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange} /> Female
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formik.values.age}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange} />
      {formik.touched.age && formik.errors.age ? (
        <div>{formik.errors.age}</div>
      ) : null}
      <div>
        <button type="reset" >Reset</button>
        <button type="submit">Add Record</button>
      </div>
    </form>

  )
}

export default Form
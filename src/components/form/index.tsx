import React from 'react';
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { PersonalData } from '../dashboard/types';
import { useDispatch } from 'react-redux';
import { addRecord } from '../../redux/actions';

const validationSchema: Yup.ObjectSchema<PersonalData> = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  height: Yup.number().required("Height is required"),
  weight: Yup.number().required("Weight is required"),
  gender: Yup.string().required("Gender is required"),
  age: Yup.number().required("Age is required"),
});

const Form = () => {
  const dispatch = useDispatch();

  const initialValues: PersonalData = {
    name: '',
    height: 0,
    weight: 0,
    gender: '',
    age: ''
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      const newPersonalData = {
        name: values.name,
        height: values.height,
        weight: values.weight,
        gender: values.gender,
        age: values.age
      };
      dispatch(addRecord(newPersonalData));
      formik.resetForm()
    },
  });

  const bmi: number | undefined = Number((formik.values.weight / ((formik.values.height * 0.01) * (formik.values.height * 0.01))).toFixed(2))

  return (
    <>
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

      <div>
        <h1>Body Mass Index</h1>
        {isNaN(bmi) ? null : <h2>{bmi}</h2>}
      </div>
    </>
  )
}

export default Form
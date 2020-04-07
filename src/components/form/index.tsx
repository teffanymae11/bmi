import React, { useEffect } from 'react';
import * as Yup from 'yup'
import { useFormikContext, Formik } from 'formik';

import { PersonalData } from '../dashboard/types';
import { useDispatch, useSelector } from 'react-redux';
import { addRecord, resetData } from '../../redux/actions';


const BMI = () => {
  const dispatch = useDispatch();
  const personalData: PersonalData | null = useSelector((state: any) => state.personalData)

  const { values, setValues } = useFormikContext<PersonalData>();

  useEffect(() => {
    if (personalData && personalData.name !== "") {
      setValues(personalData);
      dispatch(resetData())
    }
  }, [dispatch, setValues, personalData])

  const bmi: number | undefined = Number((values.weight / ((values.height * 0.01) * (values.height * 0.01))).toFixed(2))

  return (
    <div>
      <h1>Body Mass Index</h1>
      {isNaN(bmi) ? null : <h2>{bmi}</h2>}
    </div>
  );
};

const Form = () => {
  const dispatch = useDispatch();

  const initialValues: PersonalData | null = {
    name: '',
    height: 0,
    weight: 0,
    gender: '',
    age: ''
  }

  const validationSchema: Yup.ObjectSchema<PersonalData> = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    height: Yup.number().required("Height is required"),
    weight: Yup.number().required("Weight is required"),
    gender: Yup.string().required("Gender is required"),
    age: Yup.number().required("Age is required"),
  });

  const onSubmit = (values: PersonalData, { resetForm }: any) => {
    const newPersonalData = {
      name: values.name,
      height: values.height,
      weight: values.weight,
      gender: values.gender,
      age: values.age
    };
    dispatch(addRecord(newPersonalData));
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>

      {formik => (
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
              min="0"
              value={formik.values.height}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange} />
            <input
              type="number"
              name="weight"
              placeholder="Weight"
              min="0"
              value={formik.values.weight}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange} />
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
              min="0"
              value={formik.values.age}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange} />
            {formik.touched.age && formik.errors.age ? (
              <div>{formik.errors.age}</div>
            ) : null}
            <div>
              <button data-testid="reset" type="reset" >Reset</button>
              <button data-testid="submit" type="submit">Add Record</button>
            </div>
          </form>

          <BMI />
        </>
      )}
    </Formik>

  )
}

export default Form
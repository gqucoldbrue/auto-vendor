import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
  collectionDetails: Yup.string(),
  references: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Required'),
      relationship: Yup.string().required('Required'),
      contact: Yup.string().required('Required')
    })
  )
});

export const MembershipForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        collectionDetails: '',
        references: [{ name: '', relationship: '', contact: '' }]
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-8 max-w-2xl mx-auto">
          <div className="space-y-4">
            <Field
              name="firstName"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="First Name"
            />
            {/* Add more form fields here */}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-4 rounded-lg text-lg font-medium"
          >
            Submit Application
          </button>
        </Form>
      )}
    </Formik>
  );
}
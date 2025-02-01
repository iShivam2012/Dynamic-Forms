import { useFormik } from "formik";
import RenderCustomFormField from "./RenderCustomFormField";
import { dynamicFormValidation } from "../ValidationSchema/schema";
import * as Yup from "yup";
import React from "react";

type option = {
  id: number,
  label: string,
  value: string | number,
  name?: string
}
type field = {
  id: number,
  name: string,
  label: string,
  type: string,
  required: boolean,
  placeholder?: string,
  options: option[],
  min?: number,
  max?: number,
  step?: number,
  children?: {fields: field[]}[]
}

interface Data {
  id: number,
  sectionTitle: string,
  fields: field[]
}

interface DynamicProps {
  data: Data[]
}
const DynamicForms:React.FC<DynamicProps> = ({ data }) => {
  const gettingInitialValues = (data: Data[] |{fields: field[]}[], initialValues = {}) => {
    data.map((form: Data | {fields: field[]}) => {
      form.fields.map((field) => {
        initialValues[field.name] = "";
        if (field.children) {
          return gettingInitialValues(field.children, initialValues);
        }
      });
    });
    return initialValues;
  };
  const obj = dynamicFormValidation(data);
  const { getFieldProps, errors, values, handleSubmit, touched } = useFormik({
    initialValues: gettingInitialValues(data),
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values,null,2))
    },
    validationSchema: Yup.object(obj),
  });

  return (
    <form className="container" onSubmit={handleSubmit}>
      {data.map((form) => {
        return (
          <div key={form.id} id={`${form.id}`} className="pod">
            <h2 className="form-title">{form.sectionTitle}</h2>
            <RenderCustomFormField
              fields={form.fields}
              getFieldProps={getFieldProps}
              errors={errors}
              values={values}
              touched={touched}
            />
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForms;

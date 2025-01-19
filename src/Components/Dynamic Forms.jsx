import { useFormik } from "formik";
import RenderCustomFormField from "./RenderCustomFormField";
import { dynamicFormValidation } from "../ValidationSchema/schema";
import * as Yup from "yup";

const DynamicForms = ({ data }) => {
  const gettingInitialValues = (data, initialValues = {}) => {
    data.map((form) => {
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
    },
    validationSchema: Yup.object(obj),
  });

  return (
    <form className="container" onSubmit={handleSubmit}>
      {data.map((form) => {
        return (
          <div key={form.id} id={form.id} className="pod">
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

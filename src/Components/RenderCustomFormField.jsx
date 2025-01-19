import { Fragment } from "react";

const RenderCustomFormField = ({
  fields,
  getFieldProps,
  errors,
  values,
  touched,
}) => {
  const customFormField = ({
    type,
    name,
    label,
    placeholder,
    options,
    children,
    id
  }) => {
    if (type === "select") {
      return (
        <div className="input-container">
          <label htmlFor={name}>{label}</label>
          <select className="input" name={name} id={id} {...getFieldProps(name)}>
            {options.map((option) => {
              return <option key={option.id} value={option.value}>{option.label}</option>;
            })}
          </select>
          {touched[name] && errors[name] ? (
            <div style={{ color: "red" }}>{errors[name]}</div>
          ) : null}
          {values[name] === options[1].value &&
            children &&
            children.map((form) =>
              form.fields.map((field) => <Fragment key={field.id}>{customFormField(field)}</Fragment>)
            )}
        </div>
      );
    }
    if (type === "textarea") {
      return (
        <div className="input-container">
          <label htmlFor={name}>{label}</label>
          <textarea
          className="input"
            row={5}
            cols={20}
            name={name}
            {...getFieldProps(name)}
            id={id}
            placeholder={placeholder}
          ></textarea>
          {touched[name] && errors[name] ? (
            <div style={{ color: "red" }}>{errors[name]}</div>
          ) : null}
        </div>
      );
    }
    if (type === "radio") {
      return (
        <div className="radioBtn">
          <label htmlFor={name}>{label}</label>
          {options.map((option) => {
            return (
              <div key={option.id}>
                <input
                  type={type}
                  {...getFieldProps(name)}
                  id={option.id}
                  name={option.name}
                  value={option.value}
                />
                <label htmlFor={option.name}>{option.label}</label>
              </div>
            );
          })}
          {touched[name] && errors[name] ? (
            <div style={{ color: "red" }}>{errors[name]}</div>
          ) : null}
          {values[name] === options[1].value &&
            children &&
            children.map((form) =>
              form.fields.map((field) => <div className="container" key={field.id} >{customFormField(field)}</div>)
            )}
        </div>
      );
    } else {
      return (
        <div id={type} className="input-container">
          <label htmlFor={name}>{label}</label>
          <input
          className="input"
            type={type}
            {...getFieldProps(name)}
            name={name}
            id={id}
            placeholder={placeholder}
          />
          {touched[name] && errors[name] ? (
            <div style={{ color: "red" }}>{errors[name]}</div>
          ) : null}
          {type === "checkbox" &&
            values[name] &&
            children &&
            children.map((form) =>
              form.fields.map((field) => <div className="container" key={field.id}>{customFormField(field)}</div>)
            )}
        </div>
      );
    }
  };

  return (
    <>
      {fields.map((field) => {
        return <Fragment key={field.id}>{customFormField(field)}</Fragment>;
      })}
    </>
  );
};

export default RenderCustomFormField;

const RenderCustomFormField = ({
  fields,
  getFieldProps,
  errors,
  values,
  touched,
}) => {
  console.log(touched);
  const customFormField = ({
    type,
    name,
    label,
    placeholder,
    options,
    children,
  }) => {
    if (type === "select") {
      return (
        <>
          <label htmlFor={name}>{label}</label>
          <select name={name} id={name} {...getFieldProps(name)}>
            {options.map((option) => {
              return <option value={option.value}>{option.label}</option>;
            })}
          </select>
          {touched[name] && errors[name] ? (
            <div style={{ color: "red" }}>{errors[name]}</div>
          ) : null}
          {values[name] === options[1].value &&
            children &&
            children.map((form) =>
              form.fields.map((field) => customFormField(field))
            )}
        </>
      );
    }
    if (type === "textarea") {
      return (
        <>
          <label htmlFor={name}>{label}</label>
          <textarea
            row={5}
            cols={20}
            name={name}
            {...getFieldProps(name)}
            id={name}
            placeholder={placeholder}
          ></textarea>
          {touched[name] && errors[name] ? (
            <div style={{ color: "red" }}>{errors[name]}</div>
          ) : null}
        </>
      );
    }
    if (type === "radio") {
      return (
        <>
          <label htmlFor={name}>{label}</label>
          {options.map((option) => {
            return (
              <>
                <input
                  type={type}
                  {...getFieldProps(name)}
                  id={option.name}
                  name={option.name}
                  value={option.value}
                />
                <label htmlFor={option.name}>{option.label}</label>
              </>
            );
          })}
          {touched[name] && errors[name] ? (
            <div style={{ color: "red" }}>{errors[name]}</div>
          ) : null}
          {values[name] === options[1].value &&
            children &&
            children.map((form) =>
              form.fields.map((field) => customFormField(field))
            )}
        </>
      );
    } else {
      return (
        <>
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            {...getFieldProps(name)}
            name={name}
            id={name}
            placeholder={placeholder}
          />
          {touched[name] && errors[name] ? (
            <div style={{ color: "red" }}>{errors[name]}</div>
          ) : null}
          {type === "checkbox" &&
            values[name] &&
            children &&
            children.map((form) =>
              form.fields.map((field) => customFormField(field))
            )}
        </>
      );
    }
  };

  return (
    <>
      {fields.map((field) => {
        return <>{customFormField(field)}</>;
      })}
    </>
  );
};

export default RenderCustomFormField;

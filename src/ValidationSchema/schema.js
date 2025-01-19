import * as Yup from 'yup'

export const dynamicFormValidation = (data, validateObj={}) =>{
    
    data.map((form) => {
        form.fields.map((field) => {
            if(field.type  === 'text' && field.required){
                validateObj[field.name] = Yup.string().required(`${field.label} is required`);
            }
            if(field.type === 'email' && field.required){
                validateObj[field.name] = Yup.string().email('Invalid Format').required(`${field.label} is required`);
            }
            if(field.type === 'password' && field.required){
                validateObj[field.name] = Yup.string().required(`${field.label} is required`).min(6,'Password must be minimum 6 characters');
            }
            if(field.type  === 'date' && field.required){
                validateObj[field.name] = Yup.date().required(`${field.label} is required`);
            }
            if(field.type  === 'checkbox' && field.required){
                validateObj[field.name] = Yup.boolean().required(`${field.label} is required`);
            }
            if(field.type  === 'radio' && field.required){
                validateObj[field.name] = Yup.string().required(`${field.label} is required`);
            }
            if(field.type  === 'color' && field.required){
                validateObj[field.name] = Yup.string().required(`${field.label} is required`);
            }
            if(field.type  === 'color' && field.required){
                validateObj[field.name] = Yup.string().required(`${field.label} is required`);
            }
            if(field.type  === 'range' && field.required){
                validateObj[field.name] = Yup.number().required(`${field.label} is required`);
            }
            if(field.type  === 'select' && field.required){
                validateObj[field.name] = Yup.string().required(`${field.label} is required`);
            }
            if(field.type  === 'textarea' && field.required){
                validateObj[field.name] = Yup.string().required(`${field.label} is required`);
            }
            if(field.type  === 'file' && field.required){
                validateObj[field.name] = Yup.mixed().required(`${field.label} is required`);
            }
            if(field.type  === 'search' && field.required){
                validateObj[field.name] = Yup.string().required(`${field.label} is required`);
            }
            if(field.type  === 'number' && field.required){
                validateObj[field.name] = Yup.number().required(`${field.label} is required`);
            }

            if (field.children) {
            return dynamicFormValidation(field.children, validateObj);
          }
        });
      });
    return validateObj;
}
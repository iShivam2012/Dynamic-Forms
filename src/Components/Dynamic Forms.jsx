import { useFormik } from "formik";
import RenderCustomFormField from "./RenderCustomFormField";

const DynamicForms = ({data}) =>{
    
    const gettingInitialValues = (data, initialValues={}) =>{
        data.map((form)=>{
            form.fields.map(field =>{
                initialValues[field.name] = '';
                if(field.children){
                    return gettingInitialValues(field.children, initialValues)
                }
                
            })
        })
        return initialValues
    }
    const {getFieldProps, errors, handleSubmit} = useFormik({
        initialValues: gettingInitialValues(data),
        onSubmit: (values)=>{
            console.log(values)
        }
    })

    return (
        <>
        {data.map((form)=>{
            return (
                <div id={form.sectionTitle}>
                <h2>{form.sectionTitle}</h2>
                <form onSubmit={handleSubmit}>
                    <RenderCustomFormField fields={form.fields} getFieldProps={getFieldProps} errors={errors} />
                    <button type="submit">Submit</button>
                </form>
                </div>
            )
        })}
        </>
    )
}

export default DynamicForms
const RenderCustomFormField = ({fields, getFieldProps, errors}) =>{
    
    const customFormField = ({type, name, label, placeholder, options}) =>{
        if(type === 'select'){
            return <>
            <label htmlFor={name} >{label}</label> 
            <select name={name} id={name} {...getFieldProps(name)} >
                {options.map(option =>{
                    return <option value={option.value}>{option.label}</option>
                })}
            </select>;
            </>
        }
        if(type === 'textarea'){
            return <>
            <label htmlFor={name} >{label}</label> 
            <textarea row={5} cols={20} name={name} {...getFieldProps(name)} id={name} placeholder={placeholder} ></textarea>
            </>
        }
        if(type === 'radio'){
            return <>
            <label htmlFor={name} >{label}</label>
            {options.map(option =>{
                return <>
                <input type={type} {...getFieldProps(name)} id={option.name} name={option.name} value={option.value} />
                <label htmlFor={option.name} >{option.label}</label>
                </>
            })}
            </>
        }
        else{
            return <>
            <label htmlFor={name} >{label}</label> 
            <input type={type} {...getFieldProps(name)} name={name} id={name} placeholder={placeholder} /> 
            </>
        }
    }

    return (
    <>
        {fields.map((field)=>{
            return(
                <>
                    {customFormField(field)}   
                </>
            )
        })}
    </>
    )
}

export default RenderCustomFormField